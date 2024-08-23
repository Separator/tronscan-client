import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, URL, TOKEN_ADDRESS, FROM_ADDRESS } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Account', () => {
  test(
    'Get account list',
    async () => {
      const response = await tronScanClient.getAccountList();
      expect(response.data.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get account detail information',
    async () => {
      const response = await tronScanClient.getAccountDetailInformation({
        address: ADDRESS!
      });
      expect(response.address).toBe(ADDRESS);
    },
    TEST_TIMEOUT
  );

  test('Get the voted list', async () => {
    const response = await tronScanClient.getVotedList({
      candidate: ADDRESS
    });
    expect(response).toHaveProperty('data');
  });

  test('Get a list of account resources', async () => {
    const response = await tronScanClient.getAccountResourcesList({
      address: ADDRESS!
    });
    expect(response).toHaveProperty('data');
  });

  test('Get a list of stake 2.0 account resources', async () => {
    const response = await tronScanClient.getAccountResourcesStake2List({
      address: ADDRESS!
    });
    expect(response).toHaveProperty('data');
  });

  test('Get approval list', async () => {
    const response = await tronScanClient.getApprovalList({
      address: ADDRESS!
    });
    expect(response).toHaveProperty('data');
  });

  test('Get account authorization change records', async () => {
    const response = await tronScanClient.getAccountAuthChangeRecords({
      contract_address: TOKEN_ADDRESS!,
      from_address: FROM_ADDRESS!,
      to_address: ADDRESS!,
      type: 'approve'
    });
    expect(response).toEqual({
      total: 0,
      contractMap: {},
      data: [],
      contractInfo: {},
      rangeTotal: 0
    });
  });

  test('Get list of daily analytics data for an account over time', async () => {
    const response = await tronScanClient.getAccountDailyAnalytics({
      address: ADDRESS!,
      start_timestamp: Date.now() - 1000 * 60 * 60 * 24
    });
    expect(response.size).toBe(0);
  });
});
