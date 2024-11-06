import { ChainId, setActiveChainConfig } from '../src/config';
import { OpenType } from '../src/config/contract';
import { FundingData, Symbols, createApi } from '../src/fetch';
import { supportedChains, create, ProductInfo, PriceInfo } from '../src/index';

describe('supportedChains', () => {
  it('should return an array of supported chains', () => {
    const chains = supportedChains();
    expect(Array.isArray(chains)).toBe(true);

    chains.forEach(chain => {
      expect(chain).toHaveProperty('id');
      expect(chain).toHaveProperty('name');
    });
  });
});

jest.mock('../src/fetch', () => {
  const mockQueryProducts = jest.fn();
  const mockQueryIndexSymbols = jest.fn();
  const mockQueryKiloCache = jest.fn();
  const queryIndexPrices = jest.fn();

  return {
    createApi: jest.fn(() => ({
      queryProducts: mockQueryProducts,
      queryIndexSymbols: mockQueryIndexSymbols,
      queryKiloCache: mockQueryKiloCache,
      queryIndexPrices: queryIndexPrices,
    })),
    ChainId: {}, // Define any necessary interfaces used by createApi
    ProductInfo: {} as ProductInfo, // Define any necessary interfaces used by createApi
    Symbol: {} as Symbols, // Define any necessary interfaces used by createApi
    Funding: {} as FundingData, // Define any necessary interfaces used by createApi
    pricesData: {} as PriceInfo,
  };
});

jest.mock('../src/client', () => {
  const originalModule = jest.requireActual('../src/client');

  return {
    ...originalModule,
    kiloPublicClient: () => {
      return (
        {
          simulateContract: jest.fn().mockResolvedValue({ request: 'mockRequest' }),
          waitForTransactionReceipt: jest.fn().mockResolvedValue({
            blockHash: 'mockBlockHash',
            transactionHash: 'mockTransactionHash',
          }),
          readContract: jest.fn().mockResolvedValue('mockValue'),
        }
      )
    },
    kiloWalletClient:  () => ({
      writeContract: jest.fn().mockResolvedValue('mockHash'),
    }),
  };
});

describe('Kilo Client', () => {
  let kiloClient;

  beforeAll(async () => {
    
  });
  beforeAll((done) => {
    kiloClient = create(ChainId.BSC, {env: 'NODE'}); 
    done(); 
  });

  test('should retrieve supported products by chain', async () => {
      (createApi(ChainId.BSC).queryProducts as jest.Mock).mockResolvedValueOnce([
        { productId: '1', productToken: 'token1', isActive: true },
      ]);
      (createApi(ChainId.BSC).queryIndexSymbols as jest.Mock).mockResolvedValueOnce([{ id: '1' }]);

      (createApi(ChainId.BSC).queryKiloCache as jest.Mock).mockResolvedValueOnce({
          fundingBorrowList: [{ productId: '1' }],
      });

      const result = await kiloClient.supportedProductsByChain({} as ChainId); 

      expect(result).toEqual([
          {
            id: '1',
            productId: '1',
            productToken: 'token1',
            isActive: true,
            address: 'token1',
          },
      ]);
  });

  it('should retrieve product info', async () => {
    (createApi(ChainId.BSC).queryProducts as jest.Mock).mockResolvedValueOnce([
      { productId: '1', productToken: 'token1', isActive: true },
    ]);
    (createApi(ChainId.BSC).queryIndexSymbols as jest.Mock).mockResolvedValueOnce([{ id: '1' }]);

    (createApi(ChainId.BSC).queryKiloCache as jest.Mock).mockResolvedValueOnce({
        fundingBorrowList: [{ productId: '1' }],
    });

    const productIds = ['1']; 
    const products = await kiloClient.getProductsInfo(productIds);
    expect(products.length).toBe(productIds.length);
  });

  test('should return product prices', async () => {
    const productIds = [1, 2, 3];
    (createApi(ChainId.BSC).queryIndexPrices as jest.Mock).mockResolvedValueOnce({
        current: {
            1: '10',
            2: '20',
            3: '30',
        },
        previousDay: {
            1: '9', 
            2: '19',
            3: '29',
        },
    });

    const result = await kiloClient.getProductPrices(productIds);
    expect(result).toEqual([
        { id: 1, currentPrices: '10', previousPrices: '9' },
        { id: 2, currentPrices: '20', previousPrices: '19' },
        { id: 3, currentPrices: '30', previousPrices: '29' },
    ]);
  });

  test('should throw error for invalid margin', async () => {
    const walletAddress = '0x123456789abcdef';
    const type = 1;
    const position = {
      tickerPrice: '100',
      productId: '123',
      leverage: '2',
      isLong: true,
      margin: '5',
    };

    await expect(kiloClient.increasePosition(walletAddress, type, position)).rejects.toEqual('margin is invalid');
  });

  test('should return transaction', async () => {
    const walletAddress = '0x3ae8a5FbFF011aaecBe875d83d956F543942c314';
    const type = OpenType.Market; 
    const position = {
        tickerPrice: '100',
        productId: '1',
        leverage: '2',
        isLong: true,
        margin: '20', 
    };

    const result = await kiloClient.increasePosition(walletAddress, type, position);
    expect(result).toHaveProperty('transactionHash');
    expect(result).toHaveProperty('blockHash');
  });
});
