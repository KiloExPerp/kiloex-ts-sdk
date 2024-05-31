import { createPublicClient, createWalletClient, http, PublicClient, fallback, WalletClient } from 'viem';
import { ChainId, chainConfig } from './config';

interface KiloClient {
	init: (chainId: ChainId) => void;
	getPublicClient: () => PublicClient;
	getWalletClient: () => WalletClient;
}

export const kiloClient: KiloClient = (() => {
	let publicClient: PublicClient;
	let walletClient: WalletClient;
	
	return {
		init: (chainId: ChainId) => {
			const transport = chainConfig[chainId].rpc.map((rpc) => http(rpc))
			const chain = chainConfig[chainId].chain;
			
			publicClient = createPublicClient({ 
				chain: chain, 
				transport: fallback(transport), 
			})
		
			walletClient = createWalletClient({ 
				chain: chain, 
				transport: fallback(transport), 
			})
		},
		getPublicClient: () => {
			return publicClient
		},
		getWalletClient: () => {
			return walletClient
		}
	}
})();

export const kiloPublicClient = () => kiloClient.getPublicClient();
export const kiloWalletClient = () => kiloClient.getWalletClient();