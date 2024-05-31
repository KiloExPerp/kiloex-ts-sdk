import { bsc, opBNB, bscTestnet, Chain } from 'viem/chains'

interface ChainConfigType {
	chainId: ChainId;
	name: string
	rpc: string[];
	chain: Chain;
}

interface ChainConfig {
	[chainName: number]: ChainConfigType;
}

enum ChainId {
  BSCTEST = 97,
  BSC = 56,
  OPBNB = 204,
  MANTA = 169,
}

// activeChainConfig is a global variable that will be used to store the active chain configuration
let activeChainConfig: ChainConfigType;

// chainConfig is an object that contains the configuration for different chains
const chainConfig: ChainConfig = {
	[ChainId.BSCTEST]: {
		chainId: ChainId.BSCTEST,
		name: 'bscTestnet',
		rpc:[
      'https://bsc-dataseed1.binance.org/',
      'https://bsc-dataseed2.binance.org/',
      'https://bsc-dataseed3.binance.org/',
      'https://bsc-dataseed4.binance.org/'
    ],
		chain: bscTestnet,
	},
	[ChainId.BSC]: {
		chainId: ChainId.BSC,
		name: 'bsc',
		rpc:[
      'https://bsc-dataseed1.binance.org/',
      'https://bsc-dataseed2.binance.org/',
      'https://bsc-dataseed3.binance.org/',
      'https://bsc-dataseed4.binance.org/'
    ],
		chain: bsc,
	},
	[ChainId.OPBNB]: {
		chainId: ChainId.OPBNB,
		name: 'opBNB',
		rpc:[
      'https://bsc-dataseed1.binance.org/',
      'https://bsc-dataseed2.binance.org/',
      'https://bsc-dataseed3.binance.org/',
      'https://bsc-dataseed4.binance.org/'
    ],
		chain: opBNB,
	},
};

export function setActiveChainConfig(chain: ChainId): void {
	activeChainConfig = chainConfig[chain];
}

export {
	ChainId,
	chainConfig,
	activeChainConfig
}