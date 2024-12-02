import positionRouter from '../abi/positionRouter'
import orderBook from '../abi/orderBook'
import marketOrderWithTriggerOrder from '../abi/marketOrderWithTriggerOrder'
import { ChainId } from '.'
import BigNumber from 'bignumber.js'

export const addressMap: {
  [key: number]: {
    [key: string]: `0x${string}`
  }
} = {
  [ChainId.BSCTEST]: {
    kusdAddr: '0x7ce794304CBc54c3DeeA8Afa175F5B2458dDE460',
    orderBookAddr: '0x764b8A92015aBabc112B42D289BB672Bfb02779e',
    positionRouterAddr: '0x9cDaC1e06994aBfba5d6D8DC3683552c7b2E023D',
    kiloPerpViewAddr: '0xC5732F22D71286Dd25A663A21550Df0d5144d7DA',
    marketOrderWithTriggerOrder: '0x192a79846BC8543fd5fff5FC68Ccca106D89df87',
    perpTradeAddr: '0x6180C080A6daDe02cAb58ABDaed21796cE4a2a82',
  },
  [ChainId.BSC]: {
    kusdAddr: '0x55d398326f99059fF775485246999027B3197955',
    orderBookAddr: '0x746c180268825B52FC5ea8057ecf3768037692E2',
    positionRouterAddr: '0x298e94D5494E7c461a05903DcF41910e0125D019',
    kiloPerpViewAddr: '0x92A381C496eeE6C4686A4169aFf4aF94eAfeAFCc',
    marketOrderWithTriggerOrder: '0x256035E9099C266F2a9bd3BDebC4c3f5a623EaeB',
    perpTradeAddr: '0x7C09a8df940cF1D14d4C24f90aCa39EE619f0864',
  },
  [ChainId.OPBNB]: {
    kusdAddr: '0x9e5aac1ba1a2e6aed6b32689dfcf62a509ca96f3',
    orderBookAddr: '0x43E3E6FFb2E363E64cD480Cbb7cd0CF47bc6b477',
    positionRouterAddr: '0xa02d433868C7Ad58C8A2A820d6C3FF8a15536ACc',
    kiloPerpViewAddr: '0x796f1793599D7b6acA6A87516546DdF8E5F3aA9d',
    marketOrderWithTriggerOrder: '0xe0eE1Cb99843c6dCdeb701707DaaDf9Ea8b752f7',
    perpTradeAddr: '0x1a7b3F8890Da3cC6968c182fA528CE9C9C62f981',
  },
  [ChainId.MANTA]: {
    kusdAddr: '0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f',
    orderBookAddr: '0x43E3E6FFb2E363E64cD480Cbb7cd0CF47bc6b477',
    positionRouterAddr: '0xa02d433868C7Ad58C8A2A820d6C3FF8a15536ACc',
    kiloPerpViewAddr: '0x796f1793599D7b6acA6A87516546DdF8E5F3aA9d',
    marketOrderWithTriggerOrder: '0xF1fd3C545ED6eC401E50A8AeEeFE00E9A2BEC648',
    perpTradeAddr: '0x1a7b3F8890Da3cC6968c182fA528CE9C9C62f981',
  }
}

export const gasMap: {
  [key: string]: bigint
} = {
  createIncreasePositionV3: 500_000n, 
  createIncreasePositionWithCloseTriggerOrdersV3: 1000_000n,
  createIncreaseOrderV3: 400_000n,
  createDecreasePositionV3: 380_000n, 
  createDecreaseOrderV3: 400_000n,
  cancelDecreaseOrder: 180_000n,
  cancelIncreaseOrder: 180_000n, 
  updateDecreaseOrder: 150_000n, 
  addMargin: 180_000n,
}

export enum OpenType {
  Market = 1,
  Limit = 2,
  TPSL = 3,
  StopLoss = 4,
  TakeProfit = 5
}

export const approveMap: {
  [key: number]: {
    abi: any,
    addressName: string,
    increaseFunctionName: string,
    approveName?: string
    closeFunctionName?: string
  }
} = {
  [OpenType.Market]: { 
		abi: positionRouter.abi,
		addressName: 'positionRouterAddr',
    increaseFunctionName: 'createIncreasePositionV3',
    closeFunctionName: 'createDecreasePositionV3',
	},
  [OpenType.Limit]: {
		abi: orderBook.abi,
		addressName: 'orderBookAddr',
    increaseFunctionName: 'createIncreaseOrderV3',
	}, 
  [OpenType.TPSL]: { 
		abi: marketOrderWithTriggerOrder.abi,
    addressName: 'marketOrderWithTriggerOrder',
    approveName: '',
    increaseFunctionName: "createIncreasePositionWithCloseTriggerOrdersV3",
	},
  [OpenType.StopLoss]: {
    abi: orderBook.abi,
		addressName: 'orderBookAddr',
    increaseFunctionName: 'createDecreaseOrderV3',
  },
  [OpenType.TakeProfit]: {
    abi: orderBook.abi,
		addressName: 'orderBookAddr',
    increaseFunctionName: 'createDecreaseOrderV3',
  },
}

export const MAX_ALLOWANCE: BigNumber = new BigNumber('115792089237316195423570985008687907853269984665640564039457.584007913129639935');
export const MIN_MARGIN = 10;
