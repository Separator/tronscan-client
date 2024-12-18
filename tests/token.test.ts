import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, URL } = process.env;

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
});
