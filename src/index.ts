import { Abi, TransactionReceipt, stringToHex, erc20Abi } from 'viem';
import { chainConfig, setActiveChainConfig, activeChainConfig, ChainId } from './config'
import { Product, Symbols, FundingData, createApi } from './fetch'
import BigNumber from "bignumber.js";
import { kiloClient, kiloPublicClient, kiloWalletClient, getBrokerId } from './client'
import perpTrade from './abi/perpTrade'
import orderBook from './abi/orderBook'
import kiloPerpView from './abi/kiloPerpView'
import { utils } from 'ethers'
import { approveMap, addressMap, gasMap, OpenType, MAX_ALLOWANCE, MIN_MARGIN } from './config/contract';
import { big2decimal, decimal2Big } from './utils';
import positionRouter from './abi/positionRouter';

interface chain {
	id: ChainId,
	name: string
}

export interface ProductInfo extends Product, Symbols, FundingData {
	address: string
}

export interface PriceInfo {
	id: number
	currentPrices: string
	previousPrices: string
}

/**
 * Kilo Client Interface
 */
interface KiloClient {
	supportedChains: () => chain[]
	supportedProductsByChain: (chain: ChainId) => Promise<ProductInfo[]>
	getProductsInfo: (productIds: number[]) => Promise<ProductInfo[]>
	getProductPrices: (productIds: number[]) => Promise<PriceInfo[]>
	increasePosition: (walletAddress: `0x${string}`, type: OpenType, position: Position) => Promise<TransactionReceipt>
	closePosition: (walletAddress: `0x${string}`, position: IClosePosition) => Promise<TransactionReceipt>
	updatePositionMargin: (walletAddress: `0x${string}`, position: IUpdatePositionMargin) => Promise<TransactionReceipt>
	cancelOrder: (walletAddress: `0x${string}`, type: 'Increase' | 'Decrease', orderIndex: number) => Promise<TransactionReceipt>
	updateOrder: (walletAddress: `0x${string}`, updateData: IUpdateOrder) => Promise<TransactionReceipt>
	getAllPositions: (walletAddress: `0x${string}`) => Promise<PositionInfo[]>
	getAllOrders: (walletAddress: `0x${string}`) => Promise<IOrderInfo[]>
	getTradesHistory: (walletAddress: `0x${string}`) => Promise<ITradeHistory[]>
	setApprove: (walletAddress: `0x${string}`, address: `0x${string}`) => Promise<boolean>
	cancelPosition: (walletAddress: `0x${string}`, type: 'Increase' | 'Decrease',  orderIndex: number) =>Promise<TransactionReceipt>
}

/**
 * Supported Chains
 */
export function supportedChains() {
	return Object.values(chainConfig).map((option) => {
		return {
			id: option.chainId,
			name: option.name
		}
	})
}

/**
 * Get all supported products by chain
 * @param chainId Chain ID
 * @returns Promise<ProductInfo[]>
 */
const supportedProductsByChain = (chainId: ChainId): Promise<ProductInfo[]> => {
	const request = createApi(chainId)
	return Promise.all([
		request.queryProducts(),
		request.queryIndexSymbols(),
		request.queryKiloCache()
	]).then((data) => {
	
		const productInfo: ProductInfo[] = []
		const products = data[0]
		const symbols = data[1]
		const kiloCache = data[2]
		const { fundingBorrowList } = kiloCache
	
		products.forEach((product) => {
			const symbol = symbols.find((symbol) => symbol.id === product.productId)
			const funding = fundingBorrowList.find((funding) => funding.productId === product.productId)

			if (symbol && funding) {
				productInfo.push({
					...symbol,
					...product,
					...funding,
					address: product.productToken,
					isActive: product.isActive
				})
			}
		})

		return Promise.resolve(productInfo) 
	}).catch((error) => {
		return Promise.reject(error)
	})
}

/**
 * Get products info
 * @param productIds Product IDs
 * @returns Promise<ProductInfo[]>
 */
const getProductsInfo = async (productIds: number[]): Promise<ProductInfo[]> => {
	const chainId = activeChainConfig.chainId
	return supportedProductsByChain(chainId).then((products) => {
		const findProducts = products.filter((product) => productIds.includes(product.id))
		return Promise.resolve(findProducts)
	}).catch((error) => {
		return Promise.reject(error)
	})
}

/**
 * Get product prices
 * @param productIds Product IDs
 * @returns Promise<PriceInfo[]>
 */
const getProductPrices = async (productIds: number[]): Promise<PriceInfo[]> => {
	const chainId = activeChainConfig.chainId
	const request = createApi(chainId)
	try {
		const pricesData = await request.queryIndexPrices();
		const currentPrices = pricesData.current
		const previousPrices = pricesData.previousDay

		const productPrices = productIds.map((id) => {
			const current = currentPrices[id] || '0'
			const previous = previousPrices[id] || '0'
			return {
				id: id,
				currentPrices: current,
				previousPrices: previous
			}
		})
		
		return productPrices
	} catch (error) {
		throw error;
	}
}

interface Position {
	tickerPrice: string
	productId: number
	leverage: number
	isLong: boolean
	margin: number
	point: number
	stopLessPrice?: number
	takeProfitPrice?: number
	entryPrice?: number // refers to the price point at which a buy order is executed when entering the product in a trade.
}

/**
 * increase position
 * @param walletAddress 
 * @param type product limit 'tp/sl'
 * @param position position Position data
 * @param position.tickerPrice current price
 * @param position.productId token id
 * @param position.leverage leverage
 * @param position.isLong trade is long or short
 * @param position.margin 
 * @param position.point acceptable price point
 * @param position.stopLessPrice stop loss price
 * @param position.takeProfitPrice take profit price
 * @param position.entryPrice refers to the price point at which a buy order is executed when entering the product in a trade. type is 'StopLoss' or 'TakeProfit' effect
 * @returns 
 */
const increasePosition = async (
	walletAddress: `0x${string}`,
	type: OpenType,
	position: Position,
): Promise<TransactionReceipt> => {
	try {
		const {
			tickerPrice,
			productId,
			leverage,
			isLong,
			margin,
			point = 0.01
		} = position
		let hash: `0x${string}` = stringToHex('', { size: 32 })
		const chainId = activeChainConfig.chainId
		if (margin < MIN_MARGIN) {
			return Promise.reject('margin is invalid')
		}

		const buyPrice = new BigNumber(margin).times(leverage)
	
		const abi = approveMap[type].abi
		const address = approveMap[type].addressName
		const functionName = approveMap[type].increaseFunctionName
		let minExecution = BigInt(0)
		let acceptablePrice = new BigNumber(tickerPrice);

		if (type !== OpenType.TPSL) {
			minExecution = await _getMinExecution(addressMap[chainId][address], abi)
		
			
			const approve = await setApprove(walletAddress, addressMap[chainId][address])

			if (!approve) {
				throw Promise.reject('approve failed')
			}
		}
	
		
		if (type === OpenType.Market) {
			if (isLong) {
				acceptablePrice = new BigNumber(acceptablePrice).times(point).plus(acceptablePrice)
			} else {
				acceptablePrice = new BigNumber(acceptablePrice).minus(new BigNumber(acceptablePrice).times(point))
			}
	
			if (acceptablePrice.lte(0)) {
				return Promise.reject('acceptable price is invalid')
			}
		
			const data = {
				account: walletAddress,
				abi: approveMap[type].abi,
				functionName,
				address: addressMap[chainId][address],
				args: [
					productId,
					big2decimal(margin),
					big2decimal(leverage),
					isLong,
					big2decimal(acceptablePrice),
					minExecution,
					stringToHex('', { size: 32 }),
					utils.solidityPack(['uint8'], [getBrokerId()])
				],
				chainId,
				gas: gasMap[functionName],
				value: minExecution
			}
	
			const { request } = await kiloPublicClient().simulateContract(data)
			hash = await kiloWalletClient().writeContract(request)
		}
	
		if (type === OpenType.Limit) {
			const data = {
				account: walletAddress,
				abi: approveMap[type].abi,
				functionName,
				address: addressMap[chainId][address],
				args: [
					productId,
					big2decimal(margin),
					big2decimal(leverage),
					isLong,
					big2decimal(acceptablePrice),
					!isLong,
					minExecution,
					stringToHex('', { size: 32 }),
					utils.solidityPack(['uint8'], [getBrokerId()])
				],
				chainId,
				gas: gasMap[functionName],
				value: minExecution
			}
	
			const { request } = await kiloPublicClient().simulateContract(data)
			hash = await kiloWalletClient().writeContract(request)
		}
	
		if (type === OpenType.TPSL) {
			const {
				stopLessPrice,
				takeProfitPrice,
			} = position

			const result = await kiloPublicClient().readContract({
				address: addressMap[chainId][address],
				abi: approveMap[type].abi,
				args: [],
				functionName: 'minExecutionFees'
			}) as [number, number];

			const [ minExecutionFee, orderBookMinExecutionFee]  = result
			const isDoubleFee = decimal2Big(stopLessPrice).gt(0) && decimal2Big(takeProfitPrice).gt(0)
			const limitOrderfee = decimal2Big(orderBookMinExecutionFee).times(isDoubleFee ? 2 : 1)
			const value = big2decimal(decimal2Big(minExecutionFee).plus(limitOrderfee)).toString()

			if (isLong) {
				acceptablePrice = new BigNumber(acceptablePrice).times(point).plus(acceptablePrice)
			} else {
				acceptablePrice = new BigNumber(acceptablePrice).minus(new BigNumber(acceptablePrice).times(point))
			}
	
			if (acceptablePrice.lte(0)) {
				return Promise.reject('acceptable price is invalid')
			}
	
			const data = {
				account: walletAddress,
				abi: approveMap[type].abi,
				functionName,
				address: addressMap[chainId][address],
				args: [
					productId,
					big2decimal(margin),
					big2decimal(leverage),
					isLong,
					big2decimal(acceptablePrice),
					minExecutionFee,
					stringToHex('', { size: 32 }),
					big2decimal(stopLessPrice || 0),
					big2decimal(takeProfitPrice || 0),
					utils.solidityPack(['uint8'], [getBrokerId()])
				],
				chainId,
				gas: gasMap[functionName],
				value: BigInt(value),
			}

			const { request } = await kiloPublicClient().simulateContract(data)
			hash = await kiloWalletClient().writeContract(request)
		}

		if (type === OpenType.StopLoss || type === OpenType.TakeProfit) {
			const entryPrice = position.entryPrice || 0;
			let triggerAboveThreshold = true
			if (isLong && new BigNumber(tickerPrice).gte(entryPrice)) {
				triggerAboveThreshold = true
			} else if (isLong && new BigNumber(tickerPrice).lt(entryPrice)) {
				triggerAboveThreshold = false
			} else if (!isLong && new BigNumber(tickerPrice).gte(entryPrice)) {
				triggerAboveThreshold = true
			} else if (!isLong && new BigNumber(tickerPrice).lt(entryPrice)) {
				triggerAboveThreshold = false
			}

			const data = {
				account: walletAddress,
				abi: approveMap[type].abi,
				functionName,
				address: addressMap[chainId][address],
				args: [
					productId,
					big2decimal(buyPrice.toFixed(7, 0)).toString(),
					isLong,
					big2decimal(tickerPrice),
					triggerAboveThreshold
				],
				chainId,
				gas: gasMap[functionName],
				value: minExecution
			}

			const { request } = await kiloPublicClient().simulateContract(data)
			hash = await kiloWalletClient().writeContract(request)
		}

		const transactionResult = await kiloPublicClient().waitForTransactionReceipt({
			confirmations: 1,
			hash: hash
		})
		return transactionResult
	} catch (error) {
		throw error
	}
}

interface IClosePosition {
	productId: number
	margin: number
	isLong: boolean
	tickerPrice: number
}
/**
 * Close position
 * @param walletAddress Wallet address
 * @param position Position data
 * @returns Promise<TransactionReceipt>
 */
const closePosition = async (walletAddress: `0x${string}`, position: IClosePosition) => {
	let hash: `0x${string}` = stringToHex('', { size: 32 })
	const abi = approveMap[OpenType.Market].abi
	const address = approveMap[OpenType.Market].addressName
	const functionName = approveMap[OpenType.Market].closeFunctionName!

	const minExecution = await _getMinExecution(addressMap[activeChainConfig.chainId][address], abi)

	const data = {
		account: walletAddress,
		abi: abi,
		functionName,
		address: addressMap[activeChainConfig.chainId][address],
		args: [
			position.productId,
			big2decimal(position.margin),
			position.isLong,
			big2decimal(position.tickerPrice),
			minExecution,
			utils.solidityPack(['uint8'], [getBrokerId()])
		],
		chainId: activeChainConfig.chainId,
		gas: gasMap[functionName],
		value: minExecution
	}

	const { request } = await kiloPublicClient().simulateContract(data)
	hash = await kiloWalletClient().writeContract(request)

	const transactionResult = await kiloPublicClient().waitForTransactionReceipt({
		confirmations: 1,
		hash: hash
	})

	return transactionResult
}

interface IUpdatePositionMargin {
	productId: number
	margin: number
	isLong: boolean
}

/**
 * Update position margin
 * @param walletAddress Wallet address
 * @param position Update position data
 * @returns Promise<TransactionReceipt>
 */
const updatePositionMargin = async (walletAddress: `0x${string}`, position: IUpdatePositionMargin) => {
	let hash: `0x${string}` = stringToHex('', { size: 32 })
	const abi = perpTrade.abi
	const functionName = 'addMargin'

	const data = {
		account: walletAddress,
		abi: abi,
		functionName,
		address: addressMap[activeChainConfig.chainId].positionRouterAddr,
		args: [
			position.productId,
			position.isLong,
			big2decimal(position.margin)
		],
		chainId: activeChainConfig.chainId,
		gas: gasMap[functionName],
	}

	const { request } = await kiloPublicClient().simulateContract(data)
	hash = await kiloWalletClient().writeContract(request)

	const transactionResult = await kiloPublicClient().waitForTransactionReceipt({
		confirmations: 1,
		hash: hash
	})

	return transactionResult
}


/**
 * Cancel buy/sell limit order
 * @param walletAddress Wallet address
 * @param type Product limit type 'Increase' or 'Decrease'
 * @param orderIndex Order index
 * @returns Promise<TransactionReceipt>
 */
const cancelOrder = async (walletAddress: `0x${string}`, type: 'Increase' | 'Decrease', orderIndex: number) => {
	let hash: `0x${string}` = stringToHex('', { size: 32 })
	const abi = orderBook.abi
	const functionName = type === 'Increase' ? 'cancelIncreaseOrder' : 'cancelDecreaseOrder';
	const address = addressMap[activeChainConfig.chainId].orderBookAddr

	const data = {
		account: walletAddress,
		abi: abi,
		functionName,
		address,
		args: [orderIndex],
		chainId: activeChainConfig.chainId,
		gas: gasMap[functionName],
	}

	const { request } = await kiloPublicClient().simulateContract(data)
	hash = await kiloWalletClient().writeContract(request)

	const transactionResult = await kiloPublicClient().waitForTransactionReceipt({
		confirmations: 1,
		hash: hash
	})

	return transactionResult
}

type orderType = 'STOP_LOSS' | 'TAKE_PROFIT'

interface IUpdateOrder {
	orderIndex: number
	size: number
	limitPrice: number
	type: orderType
}

/**
 * update limit order
 * @param walletAddress 
 * @param updateData
 * @param updateData.orderIndex
 * @param updateData.size Quantity to buy or sell
 * @param updateData.limitPrice Limit order price 
 * @param updateData.type update order type 'STOP_LOSS' | 'TAKE_PROFIT'
 * @returns Promise<TransactionReceipt>
 */
const updateOrder = async (walletAddress: `0x${string}`, updateData: IUpdateOrder) => {
	let hash: `0x${string}` = stringToHex('', { size: 32 })
	const abi = orderBook.abi
	const functionName = 'updateDecreaseOrder'
	const address = addressMap[activeChainConfig.chainId].orderBookAddr
	const { orderIndex, size, limitPrice, type } = updateData

	const data = {
		account: walletAddress,
		abi: abi,
		functionName,
		address,
		args: [
			orderIndex,
			big2decimal(new BigNumber(size).toFixed(7, 0)).toString(),
			big2decimal(limitPrice),
			type === 'STOP_LOSS' ? false : true
		],
		chainId: activeChainConfig.chainId,
		gas: gasMap[functionName],
	}
	
	const { request } = await kiloPublicClient().simulateContract(data)
	hash = await kiloWalletClient().writeContract(request)

	const transactionResult = await kiloPublicClient().waitForTransactionReceipt({
		confirmations: 1,
		hash: hash
	})

	return transactionResult
}

interface PositionInfoByContract {
	borrowing: bigint; // Borrowing amount
	funding: bigint; // Funding amount
	isLong: boolean; // Whether it is long (long position)
	leverage: bigint; 
	margin: bigint; // Margin amount
	oraclePrice: bigint; // Price from oracle
	owner: string; // Owner's address
	price: bigint; // Current price
	productId: bigint;
	timestamp: bigint; 
}

interface PositionInfo {
	borrowing: number; // Borrowing amount
	funding: number; // Funding amount
	isLong: boolean; // Whether it is long (long position)
	leverage: string; 
	margin: number; // Margin amount
	oraclePrice: number; // Price from oracle
	price: number;
	productId: number;
	size: string; 
	symbol: string; 
	timestamp: number;
}

/**
 * Get all positions
 * @param walletAddress Wallet address
 * @returns Promise<PositionInfo[]>
 */
const getAllPositions = async (walletAddress: `0x${string}`) => {
	const { chainId } = activeChainConfig
	const address = addressMap[chainId].kiloPerpViewAddr
	const product = await supportedProductsByChain(chainId)
	const ids = product.map((item) => item.id)

	const data = {
		address: address,
		abi: kiloPerpView.abi,
		functionName: 'getPositions',
		chainId: chainId,
		args: [walletAddress, ids]
	}

	const positionResult = await kiloPublicClient().readContract(data) as PositionInfoByContract[]
	const productIds = positionResult.map((item) => Number(item.productId))
	const pricesInfo = await getProductPrices(productIds)

	const request = createApi(chainId)
	const kiloCache = await request.queryKiloCache()

	kiloCache.kiloConfig.liquidationThreshold

	const positions: PositionInfo[] = positionResult.map((position) => {
		const productId = Number(position.productId)
		const prices = pricesInfo.find((item) => item.id === productId)

		return {
			borrowing: decimal2Big(position.borrowing).toNumber(),
			funding:  decimal2Big(position.funding, 12).toNumber(),
			isLong: position.isLong,
			leverage: decimal2Big(position.leverage)?.toString(),
			margin: decimal2Big(position.margin).toNumber(),
			oraclePrice: decimal2Big(position.oraclePrice).toNumber(),
			price:  decimal2Big(position.price).toNumber(),
			productId: productId,
			size: decimal2Big(position.leverage * position.margin, 8 * 2)?.toString(),
			symbol: product.find((item) => item.id === productId)?.symbol || '',
			timestamp: Number(position.timestamp),
		}
	})

	return positions
}

interface IOrderInfo {
	account: string; // Account address
	cancelledTimestamp: number; // Cancellation timestamp
	createdTimestamp: number; // Creation timestamp
	errorMsg: string; // Error message
	executedTimestamp: number; // Execution timestamp
	executionFee: number; // Execution fee
	executionPrice: number; // Execution price
	id: number; // ID
	index: number; // Index
	isLong: number; // Whether it is long (1 for yes, 0 for no)
	isOpen: number; // Whether it is open (1 for yes, 0 for no)
	lastUpdated: string; // Last updated time
	leverage: string; // Leverage
	margin: string; // Margin
	productId: number; // Product ID
	size: string; // Trade size
	status: string; // Status
	tradeFee: number; // Trade fee
	triggerAboveThreshold: number; // Trigger above threshold
	triggerPrice: string; // Trigger price
	type: string; // Type ("stop" for stop loss)
}

/**
 * Get all orders for a given wallet address.
 * @param walletAddress The wallet address for which to retrieve orders.
 * @returns A Promise that resolves to an array of order information objects.
 */
const getAllOrders = async (walletAddress: `0x${string}`) => {
	const chainId = activeChainConfig.chainId
	const request = createApi(chainId)

	try {
		const orderData = await request.queryOrders({
			account: walletAddress
		});
		const newList: IOrderInfo[] = []
		const productIds = orderData.map((order) => order.productId)
		const productInfo = await getProductsInfo(productIds)
		
		orderData.forEach((order) => {
			const size = decimal2Big(order.size)
			const margin = decimal2Big(order.margin)
			const leverage = decimal2Big(order.leverage)
			const activeProduct = productInfo.find((item) => item.id === order.productId)
			const priceDecimal = activeProduct?.priceDecimal || 2
			const newItem = {
				id: order.id,
				productId: order.productId,
				size: size.gt(0)
            ? size.toFixed(priceDecimal, 1)
            : margin.times(leverage).toFixed(priceDecimal, 1),
				isLong: order.isLong,
				type: order.type,
				status: order.status,
				createdTimestamp: order.createdTimestamp,
				executedTimestamp: order.executedTimestamp,
				cancelledTimestamp: order.cancelledTimestamp,
				executionPrice: order.executionPrice,
				index: order.index,
				account: order.account,
				errorMsg: order.errorMsg,
				executionFee: order.executionFee,
				tradeFee: order.tradeFee,
				lastUpdated: order.lastUpdated,
				leverage: leverage.toString(),
				triggerAboveThreshold: order.triggerAboveThreshold,
				triggerPrice: decimal2Big(order.triggerPrice).toFixed(priceDecimal, 1),
				margin:
					order.type != 'stop'
						? margin.toFixed(priceDecimal, 1) || '0'
						: '0',
				isOpen: order.isOpen,
			}
			newList.push(newItem)
		})
		
		return newList
	} catch (error) {
		throw error;
	}
}


interface ITradeHistory {
	account: string; // Account address
	addedMargin: number; // Added margin
	blockNumber: number; // Block number
	blockTimestamp: number; // Block timestamp
	borrowingFee: number; // Borrowing fee
	created: string; // Creation time
	entryPrice: number; // Entry price
	errorMsg: string; // Error message
	fundingPayment: number; // Funding payment
	id: string; // ID
	isLong: number; // Whether it is long (1 for yes, 0 for no)
	isOpen: number; // Whether it is open (1 for yes, 0 for no)
	leverage: string; // Leverage
	liquidated: number; // Whether it is liquidated (1 for yes, 0 for no)
	margin: number; // Margin
	orderIndex: string; // Order index
	orderType: string; // Order type
	prevLeverage: string; // Previous leverage
	price: number; // Price
	productId: number; // Product ID
	realizedPnl: number; // Realized profit and loss amount
	size: string; // Trade size
	status: number; // Status
	symbol: string; // Trading symbol
	tradeFee: number; // Trade fee
	transactionHash: string; // Transaction hash
}

/**
 * Get trade history for a given wallet address.
 * @param walletAddress The wallet address for which to retrieve trade history.
 * @returns A Promise that resolves to an array of trade history information objects.
 */
const getTradesHistory = async (walletAddress: `0x${string}`) => {
	const chainId = activeChainConfig.chainId
	const request = createApi(chainId)

	try {
		const orderData = await request.queryTradesHistory({
			account: walletAddress
		});

		const newList: ITradeHistory[] = []
		const productIds = orderData.map((order) => order.productId)
		const productInfo = await getProductsInfo(productIds)

		orderData.forEach((order) => {
			const m = decimal2Big(order.margin)
			const am = decimal2Big(order.addedMargin)
			const l = decimal2Big(order.leverage)
			const pl = decimal2Big(order.prevLeverage || 0)
			const leverage = pl.isZero() ? l : l.times(m).minus(m.minus(am).times(pl)).div(am)
			const activeProduct = productInfo.find((item) => item.id === order.productId) as ProductInfo
			const size = decimal2Big(order.size || 0)

			newList.push({
				account: order.account,
				addedMargin: am.toNumber(),
				blockNumber: order.blockNumber,
				blockTimestamp: order.blockTimestamp,
				borrowingFee: order.borrowingFee,
				created: order.created,
				entryPrice: order.entryPrice,
				leverage: leverage.isZero() ? '0' : leverage.toString(),
				errorMsg: order.errorMsg,
				fundingPayment: decimal2Big(order.fundingPayment).toNumber(),
				id: order.id.toString(),
				isLong: order.isLong,
				isOpen: order.isOpen,
				liquidated: decimal2Big(order.liquidated).toNumber(),
				margin: parseInt(am.abs().toFixed(activeProduct?.quoteDecimal, 1), 10),
				orderIndex: order.orderIndex.toString(),
				orderType: order.orderType.toString(),
				prevLeverage: pl.toString(),
				price: decimal2Big(order.price).toNumber(),
				productId: order.productId,
				realizedPnl: decimal2Big(order.realizedPnl).toNumber(),
				size: size.gt(0)
        ? size.toFixed(activeProduct?.quoteDecimal, 1)
        : order.orderType === 3
        ? m.times(leverage).toFixed(activeProduct?.quoteDecimal, 1)
        : am.abs().times(leverage).toFixed(activeProduct?.quoteDecimal, 1),
				status: order.status,
				symbol: activeProduct?.symbol || '',
				tradeFee: order.tradeFee,
				transactionHash: order.transactionHash,
			})
		})

		return newList;
	} catch (error) {
		throw error;
	}
}

/**
 * Set approval for a spender.
 * @param walletAddress The wallet address to set approval for.
 * @param spender The address of the spender.
 * @returns A Promise that resolves to a boolean indicating whether the approval was successful.
 */
const setApprove = async (walletAddress: `0x${string}`, spender: `0x${string}`) => {
	try {
		let hash: `0x${string}` = stringToHex('', { size: 32 })
		const kusdAddr = addressMap[activeChainConfig.chainId].kusdAddr
		const data = await kiloPublicClient().readContract({
			address: kusdAddr,
			abi: erc20Abi,
			functionName: 'allowance',
			args: [walletAddress, spender]
		})

		const allowance = decimal2Big(data, 18)
		const args: [`0x${string}`, bigint] = [
			spender,
			big2decimal(MAX_ALLOWANCE, 18),
		]

		if (allowance.lt(MAX_ALLOWANCE))  {
			const data = {
				account: walletAddress,
				address: kusdAddr,
				abi: erc20Abi,
				functionName: erc20Abi[3].name,
				args: args,
				gas: 100_000n
			}
			
			const { request } = await kiloPublicClient().simulateContract(data)
			hash = await kiloWalletClient().writeContract(request)

			const transactionResult = await kiloPublicClient().waitForTransactionReceipt({
				confirmations: 1,
				hash: hash
			})

			if (transactionResult?.status == 'success') {
				return true
			} else {
				return false
			}
		} else {
			return true
		}

	} catch (error) {
		throw error
	}
}


/**
 * cancelPosition 
 * @description The order price is not within the executable price range; the margin needs to be withdrawn.
 * @param walletAddress Wallet address
 * @param type Product limit type 'Increase' or 'Decrease'
 * @param orderIndex Order index
 * @returns Promise<TransactionReceipt>
 */
const cancelPosition = async (walletAddress: `0x${string}`, type: 'Increase' | 'Decrease', orderIndex: number) => {
	let hash: `0x${string}` = stringToHex('', { size: 32 })
	const abi = positionRouter.abi
	const functionName = type === 'Increase' ? 'cancelIncreasePosition' : 'cancelDecreasePosition';
	const address = addressMap[activeChainConfig.chainId].positionRouterAddr

	const result = await kiloPublicClient().readContract({
		address: address,
		abi: abi,
		args: [walletAddress, orderIndex],
		functionName: 'getRequestKey'
	});

	const data = {
		account: walletAddress,
		abi: abi,
		functionName,
		address,
		args: [result, walletAddress],
		chainId: activeChainConfig.chainId,
		gas: gasMap[functionName],
	}


	const { request } = await kiloPublicClient().simulateContract(data)
	hash = await kiloWalletClient().writeContract(request)

	const transactionResult = await kiloPublicClient().waitForTransactionReceipt({
		confirmations: 1,
		hash: hash
	})

	return transactionResult
}

function createKiloClient() {
	const kiloClient: KiloClient = {
		supportedChains: supportedChains,
		supportedProductsByChain: supportedProductsByChain,
		getProductsInfo: getProductsInfo,
		getProductPrices: getProductPrices,
		increasePosition: increasePosition,
		closePosition: closePosition,
		updatePositionMargin: updatePositionMargin,
		cancelOrder: cancelOrder,
		updateOrder: updateOrder,
		getAllPositions: getAllPositions,
		getAllOrders: getAllOrders,
		getTradesHistory: getTradesHistory,
		setApprove: setApprove,
		cancelPosition: cancelPosition
	}
	return kiloClient
}

const _getMinExecution = async (walletAddress: `0x${string}`, abi: Abi): Promise<bigint> => {
	const minExecution = await kiloPublicClient().readContract({
		address: walletAddress,
		abi: abi,
		args: [],
		functionName: 'minExecutionFee',
	}) as bigint
	return minExecution
}

export function create(chainId: ChainId, options?: {
	env?: 'WEB' | 'NODE',
	brokerId?: number
}) {
	setActiveChainConfig(chainId)
	kiloClient.init(chainId, options)

	return createKiloClient()
}

export {
	ChainId,
	chainConfig,
}


