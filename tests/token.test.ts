import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ISSUER_ADDRESS, TOKEN_ADDRESS, API_KEY, URL, TRC1155_TOKEN_ADDRESS } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Tokens', () => {
  test(
    'Get token list',
    async () => {
      const response = await tronScanClient.getTokensList();
      expect(response.tokens.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get details of all TRC20/TRC721/TRC1155 tokens or specified TRC20/TRC721/TRC1155 tokens',
    async () => {
      const response = await tronScanClient.getTrc20Trc721Trc1155TokensDetails({
        contract: TOKEN_ADDRESS!
      });
      expect(response.total).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get details of all TRC10 tokens or specified TRC10 tokens',
    async () => {
      const response = await tronScanClient.getDetailsOfAllTrc10Tokens();
      expect(response.total).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the holder of a TRC20/TRC721/TRC1155 token',
    async () => {
      const response = await tronScanClient.getTrc20Trc721Trc1155TokenHolders({
        contract_address: TOKEN_ADDRESS!
      });
      expect(response.total).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the holder of a TRC10 token',
    async () => {
      const response = await tronScanClient.getTrc10TokenHolders({
        address: ISSUER_ADDRESS!
      });
      expect(response.total).toBe(1);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the distribution of token amounts held by holders',
    async () => {
      const response = await tronScanClient.getTokenAmountDistributionByHolders({
        tokenId: TOKEN_ADDRESS
      });
      expect(response.expire).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the price information of a specific token',
    async () => {
      const response = await tronScanClient.getSpecificTokenPriceInfo();
      expect(response.token).toBe('trx');
    },
    TEST_TIMEOUT
  );

  test(
    'Get a list of priced tokens',
    async () => {
      const response = await tronScanClient.getPricedTokensList();
      expect(response.data.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  // getTransfersListOfOneTrc721TokenId

  test(
    'Get one TRC10/TRX transfer information',
    async () => {
      const response = await tronScanClient.getOneTrc10TrxTransferInfo();
      expect(response.Data.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get inventory information of a TRC1155',
    async () => {
      const response = await tronScanClient.getTrc1155InventoryInformation({
        contract: TRC1155_TOKEN_ADDRESS!
      });
      expect(response.data.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the holding information of a certain tokenId in TRC1155',
    async () => {
      const response = await tronScanClient.getTrc1155HoldingInformation({
        contract: TRC1155_TOKEN_ADDRESS!,
        tokenId: '1'
      });
      expect(response.data.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the circulation of a TRC20 token',
    async () => {
      const response = await tronScanClient.getTrc20TokenCirculation({
        address: TOKEN_ADDRESS!
      });
      expect(response).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test('Get inventory information of a TRC721', async () => {
    const response = await tronScanClient.getTrc721InventoryInformation({
      contract: TOKEN_ADDRESS!
    });
    expect(response.data.length).toBeGreaterThanOrEqual(0);
  });
});
