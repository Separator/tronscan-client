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
});
