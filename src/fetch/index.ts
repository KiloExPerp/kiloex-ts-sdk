import axios from 'axios';
import { ChainId, activeChainConfig } from '../config';

const API_URLS: Record<ChainId, string> =  {
	[ChainId.BSCTEST]: 'https://testapi.kiloex.io',
  [ChainId.BSC]: 'https://api.kiloex.io',
  [ChainId.BSCREX]: 'https://revoxapi.kiloex.io',
  [ChainId.BSCBOX]: 'https://deboxapi.kiloex.io',
  [ChainId.OPBNB]: 'https://opapi.kiloex.io',
  [ChainId.MANTA]: 'https://mantaapi.kiloex.io',
}

export const INDEX_SYMBOL_MAPS: Record<ChainId, string> = {
	[ChainId.BSC]: 'https://app.kiloex.io/backendstatic/bnb/symbols.json',
	[ChainId.BSCREX]: 'https://app.kiloex.io/backendstatic/bnb/symbols.json',
	[ChainId.BSCBOX]: 'https://app.kiloex.io/backendstatic/bnb/symbols.json',
	[ChainId.OPBNB]: 'https://app.kiloex.io/backendstatic/opbnb/symbols.json',
	[ChainId.MANTA]: 'https://app.kiloex.io/backendstatic/manta/symbols.json',
	[ChainId.BSCTEST]: 'https://testapi.kiloex.io/index/symbols',
}

export interface Product {
	productId: number;
	productToken: string;
	maxLeverage: number;
	minLeverage: number;
	productFee: number;
	isActive: boolean;
	openInterestLong: number;
	openInterestShort: number;
	weight: number;
	reserve: number;
	maxExposure: number;
	minPriceChange: number;
	maxPositionSize: number;
	maxShift: number;
}

export interface Symbols {
	base: string;
	decimal: number;
	defaultLeverage: number;
	id: number;
	isHot: boolean;
	name: string;
	priceDecimal: number;
	pythid: string;
	quote: string;
	quoteDecimal: number;
	sort: number;
	symbol: string;
	tags: string;
}
export interface FundingData {
	borrowingRate: string;
	cumulativeBorrowing: string;
	cumulativeFunding: string;
	funding: string;
	fundingRate: string;
	productId: number;
}

interface kiloConfig {
	adlMultiplier: string;
	allowPublicLiquidator: boolean;
	canUserStake: boolean;
	exposureMultiplier: string;
	isTradeEnabled: boolean;
	liquidationBounty: string;
	liquidationThreshold: string;
	maxExposureMultiplier: string;
	maxShift: number;
	minMargin: number;
	minProfitTime: number;
	utilizationMultiplier: string;
}

interface KiloCache {
	fundingBorrowList: FundingData[];
	vaultBalance: string;
	obMinExecutionFee: string;
	prMinExecutionFee: string;
	kiloConfig: kiloConfig;
}

interface QueryProduct {
	status: boolean;
	time: number;
	productList: Product[];
}

interface QueryKiloCache {
	status: boolean;
	time: number;
	kiloCache: KiloCache;
}

interface Price {
	current: {
		[key: number]: string
	},
	previousDay: {
		[key: number]: string
	}
}

interface OrderInfo {
  account: string; // Account address
  cancelledTimestamp: number;
  createdTimestamp: number; 
  errorMsg: string;
  executedTimestamp: number; 
  executionFee: number;
  executionPrice: number;
  id: number; 
  index: number; 
  isLong: number; // Is long (1 for yes, 0 for no)
  isOpen: number; // Is open (1 for yes, 0 for no)
  lastUpdated: string;
  leverage: number; // Leverage multiple
  margin: number;
  productId: number; 
  size: number;
  status: string;
  tradeFee: number;
  triggerAboveThreshold: number; // Trigger threshold
  triggerPrice: string; // Trigger price
  type: string;
}



interface OrderHistory {
  account: string; 
  addedMargin: number; 
  blockNumber: number; 
  blockTimestamp: number;
  borrowingFee: number; 
  created: string; 
  entryPrice: number; 
  errorMsg: string; 
  fundingPayment: number; 
  id: number;
  isLong: number; // Is long (1 for yes, 0 for no)
  isOpen: number; // Is open (1 for yes, 0 for no)
  leverage: number; 
  liquidated: number; // Is liquidated (1 for yes, 0 for no)
  margin: number;
  orderIndex: number; 
  orderType: number; 
  pnl: number; // Profit and loss amount
  prevLeverage: number; // Previous leverage multiple
  price: number; 
  productId: number;
  realizedPnl: number; // Realized profit and loss amount
  status: number; 
  tradeFee: number; 
  transactionHash: string;
  size: number; 
}


interface Api {
  queryProducts: () => Promise<Product[]>;
	queryIndexSymbols: () => Promise<Symbols[]>;
	queryKiloCache: () => Promise<KiloCache>;
	queryIndexPrices: () => Promise<Price>;
	queryOrders: (params: {account: string}) => Promise<OrderInfo[]>;
	queryTradesHistory: (params: {account: string}) => Promise<OrderHistory[]>;
}

export const createApi = (chainId: ChainId): Api => {
	const apiUrl = API_URLS[chainId];
	const instance = axios.create({
		baseURL: apiUrl,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	instance.interceptors.response.use(
    (response) => {
      return response.data; 
    },
    (error) => {
      return Promise.reject(error);
    }
  );

	return {
		queryProducts: async () => {
			const response: QueryProduct = await instance.get('/common/queryProducts');
			return response.productList;
    },
		queryIndexSymbols: async () => {
			const chainId = activeChainConfig.chainId
      const url = INDEX_SYMBOL_MAPS[chainId] || '/index/symbols'
       
			const responseData = await axios.get(url)
			return responseData.data
    },
		queryKiloCache: async () => {
			const response: QueryKiloCache = await instance.get('/common/queryKiloCache');
			return response.kiloCache;
		},
		queryIndexPrices: () => {
      return instance.get('/index/prices')
    },
		queryOrders: (params: {account: string}) => {
      return instance.get('/user/queryLimitOrders', { params })
    },
		queryTradesHistory: (params: {account: string}) => {
			return instance.get('/user/queryHistoryOrders', { params })
		},
	}
}