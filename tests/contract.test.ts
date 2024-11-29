import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { API_KEY, URL } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Contract', () => {
  test(
    '',
    async () => {
      const response = await tronScanClient.getListOfContracts();
      expect(response.triggerTop7.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT
  );
});
