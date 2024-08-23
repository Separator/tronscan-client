import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, TOKEN_ADDRESS, TX_HASH, URL } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Security Service API', () => {
  test(
    'Check account security',
    async () => {
      const response = await tronScanClient.checkAccountSecurity({
        address: ADDRESS!
      });
      expect(response).toEqual({
        send_ad_by_memo: false,
        has_fraud_transaction: false,
        fraud_token_creator: false,
        is_black_list: false
      });
    },
    TEST_TIMEOUT
  );

  test('Check token security', async () => {
    const response = await tronScanClient.checkTokenSecurity({
      address: TOKEN_ADDRESS!
    });
    expect(response).toEqual({
      is_vip: false,
      black_list_type: 0,
      increase_total_supply: 0,
      token_level: '2',
      has_url: false,
      swap_token: false
    });
  });

  test('Check url security', async () => {
    const response = await tronScanClient.checkUrlSecurity({
      url: 'www.google.com.hk'
    });
    expect(response).toEqual({
      cheat_url: false
    });
  });

  test('Check transactions security', async () => {
    const response = await tronScanClient.checkTransactionsSecurity({
      hashes: TX_HASH!
    });
    expect(response).toEqual({
      [TX_HASH!]: {
        riskToken: false,
        zeroTransfer: false,
        riskAddress: false,
        sameTailAttach: false,
        riskTransaction: false
      }
    });
  });

  test('Check multi sign security', async () => {
    const response = await tronScanClient.checkMultiSignSecurity({
      address: ADDRESS!
    });
    expect(response.multiSign).toBe(false);
  });

  test('Check account authorization security', async () => {
    const response = await tronScanClient.checkAccountAuthSecurity({
      address: ADDRESS!
    });
    expect(response).toEqual({
      approveRiskContractCount: 0,
      approveProjectCount: 0,
      approveRiskAccountCount: 0,
      riskApprove: [],
      approveTokenCount: 0,
      approveAddressCount: 0,
      approveRiskAddressCount: 0
    });
  });

  test('Get all tokens in TronScan', async () => {
    const response = await tronScanClient.getAllTokens({
      limit: 1,
      start: 0
    });
    expect(response.data.length).toBe(1);
  });
});
