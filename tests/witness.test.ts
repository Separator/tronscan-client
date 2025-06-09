import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60_000;
const { ADDRESS = '', API_KEY, URL } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Witness', () => {
  test(
    'Get the list of witnesses',
    async () => {
      const response = await tronScanClient.getWitnessList({
        witnesstype: 0
      });
      expect(response.data.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the list of votes for the account',
    async () => {
      const response = await tronScanClient.getAccountVotesList({
        address: ADDRESS
      });
      expect(Object.keys(response).length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );
});
