import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, URL, TX_HASH } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Transactions and Transfers', () => {
  test(
    'Get a list of transactions',
    async () => {
      const response = await tronScanClient.getTransactionsList({
        address: ADDRESS!,
        start_timestamp: 1716539547000,
        end_timestamp: 1716539547000
      });

      expect(response?.data?.length).toBe(1);
    },
    TEST_TIMEOUT
  );

  test(
    'Get transaction detail information by transaction hash',
    async () => {
      const response = await tronScanClient.getTransactionDetailByHash({
        hash: TX_HASH!
      });
      expect(response.hash).toBe(TX_HASH);
    },
    TEST_TIMEOUT
  );

  test(
    'Get trc20&721 transfers list',
    async () => {
      const response = await tronScanClient.getTrc20Trc721TransferList({
        relatedAddress: ADDRESS!
      });

      expect(response?.token_transfers?.length).toBe(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get trc1155 transfer list',
    async () => {
      const response = await tronScanClient.getTrc1155TransferList({
        relatedAddress: ADDRESS
      });
      expect(response.total).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get trx&trc10 transfer list',
    async () => {
      const response = await tronScanClient.getTrxTrc10TransferList({
        address: ADDRESS!,
        start_timestamp: 1715855574000,
        end_timestamp: 1715855574000
      });

      expect(response?.data?.length).toBe(1);
    },
    TEST_TIMEOUT
  );

  test(
    'Get internal transaction list for special address or block',
    async () => {
      const response = await tronScanClient.getInternalTxListForAddressOrBlock({
        address: ADDRESS!
      });
      expect(response.total).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );
});
