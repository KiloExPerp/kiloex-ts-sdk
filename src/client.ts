import { createPublicClient, createWalletClient, http, PublicClient, fallback, WalletClient, custom } from 'viem';
import { ChainId, chainConfig } from './config';

interface KiloClient {
	init: (chainId: ChainId, options: {
		env?: 'WEB' | 'NODE',
		brokerId?: number
	}) => void;
	getPublicClient: () => PublicClient;
	getWalletClient: () => WalletClient;
	getBrokerId: () => number;
}

let publicClient: PublicClient;
let walletClient: WalletClient;
let BrokerId = 0;

export const kiloClient: KiloClient = (() => {
	return {
		init: (chainId: ChainId, {
			brokerId = 0,
			env = 'WEB',
		}: {
			env?: 'WEB' | 'NODE',
			brokerId?: number
		} = {}) => {
			BrokerId = brokerId || 0;
			// const transport = chainConfig[chainId].rpc.map((rpc) => http(rpc))
			const chain = chainConfig[chainId].chain;
			
			publicClient = createPublicClient({ 
				chain: chain, 
				transport: http(), 
			})
		
			if (env === 'WEB') {
				walletClient = createWalletClient({ 
					chain: chain, 
					transport: custom(window.ethereum!), 
				})
			} else {
				walletClient = createWalletClient({ 
					chain: chain, 
					transport: http(), 
				})
			}
		},
		getPublicClient: () => {
			return publicClient
		},
		getWalletClient: () => {
			return walletClient
		},
		getBrokerId: () => {
			return BrokerId
		}
	}
})();


export const kiloPublicClient = () => kiloClient.getPublicClient();
export const kiloWalletClient = () => kiloClient.getWalletClient();
export const getBrokerId = () => kiloClient.getBrokerId();