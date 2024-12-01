import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { API_KEY, URL, TOKEN_ADDRESS } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Contract', () => {
  test(
    'Get list of contracts',
    async () => {
      const response = await tronScanClient.getListOfContracts();
      expect(response.triggerTop7.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get contract detail information',
    async () => {
      const response = await tronScanClient.getContractDetailInformation({
        contract: TOKEN_ADDRESS
      });
      expect(response.data.length).toEqual(1);
    },
    TEST_TIMEOUT
  );

  test(
    'Get event information of the contract',
    async () => {
      const response = await tronScanClient.getContractEventInformation({
        contractAddress: TOKEN_ADDRESS!
      });
      expect(response.event_list.length).toBeGreaterThan(1);
    },
    TEST_TIMEOUT
  );

  test(
    'Get contract energy statistics',
    async () => {
      const response = await tronScanClient.getContractEnergyStatistics({
        address: TOKEN_ADDRESS
      });
      expect(response.total).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get contract call statistics',
    async () => {
      const response = await tronScanClient.getContractCallStatistics({
        contract_address: TOKEN_ADDRESS!
      });
      expect(response.timeLong).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the number of unique addresses called per day for a contract over a certain period of time',
    async () => {
      const response = await tronScanClient.getContractUniqueAddressesNumberPerDay({
        address: TOKEN_ADDRESS
      });
      expect(response.total).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the list of the number of calls per day of the contract',
    async () => {
      const response = await tronScanClient.getContractCallsNumberPerDay({
        address: TOKEN_ADDRESS!
      });
      expect(response.data.length).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get the list of daily analysis data for the contract over a period of time',
    async () => {
      const response = await tronScanClient.getContractDailyAnalyticsList({
        address: TOKEN_ADDRESS!
      });
      expect(response.size).toBeGreaterThanOrEqual(0);
    },
    TEST_TIMEOUT
  );
});
