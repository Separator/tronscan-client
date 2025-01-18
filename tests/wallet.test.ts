import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, URL, TOKEN_ADDRESS } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Wallet section', () => {
  test(
    'Get the list of trx transfers related to a specific address',
    async () => {
      const response = await tronScanClient.getWalletTrxTransfersList({
        address: ADDRESS!
      });
      expect(response?.data?.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the transfer list of a specific TRC10 token for a certain address',
    async () => {
      const response = await tronScanClient.getWalletTrc10TransfersList({
        address: ADDRESS!,
        trc10Id: '1'
      });
      expect(response?.data?.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the transfer list of a specific TRC20 token for a certain address',
    async () => {
      const response = await tronScanClient.getWalletTrc20TransfersList({
        address: ADDRESS!,
        trc20Id: TOKEN_ADDRESS!
      });
      expect(response?.data?.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    "Get the information of tokens held and followed in the account's web wallet",
    async () => {
      const response = await tronScanClient.getWalletTokensInformation({
        address: ADDRESS!
      });
      expect(response?.data?.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );
});
