import { AxiosRequestConfig } from 'axios';

import { AxiosTransport, Transport } from './Transport';
import {
  TronScanAccountDetailInformationResponse,
  TronScanAccountListResponse,
  TronScanAccountResourcesListResponse,
  TronScanAccountResourcesStake2ListResponse,
  TronScanApprovalListResponse,
  TronScanBlockListResponse,
  TronScanCheckAccountAuthSecurityOptions,
  TronScanCheckAccountAuthSecurityResponse,
  TronScanCheckAccountSecurityOptions,
  TronScanCheckAccountSecurityResponse,
  TronScanCheckMultiSignSecurityOptions,
  TronScanCheckMultiSignSecurityResponse,
  TronScanCheckTokenSecurityOptions,
  TronScanCheckTokenSecurityResponse,
  TronScanCheckTxsSecurityOptions,
  TronScanCheckTxsSecurityResponse,
  TronScanCheckUrlSecurityOptions,
  TronScanCheckUrlSecurityResponse,
  TronScanGetAccountAuthChangeRecordsOptions,
  TronScanGetAccountAuthChangeRecordsResponse,
  TronScanGetAccountDailyAnalyticsOptions,
  TronScanGetAccountDailyAnalyticsResponse,
  TronScanGetAccountDetailInformationOptions,
  TronScanGetAccountListOptions,
  TronScanGetAccountResourcesListOptions,
  TronScanGetAccountResourcesStake2ListOptions,
  TronScanGetAllTokensOptions,
  TronScanGetAllTokensResponse,
  TronScanGetApprovalListOptions,
  TronScanGetBlocksListOptions,
  TronScanGetTokenListOptions,
  TronScanGetTransactionsListOptions,
  TronScanGetTrc10TransfersOptions,
  TronScanGetTrc20TransfersOptions,
  TronScanGetTrc20Trc721TransferListOptions,
  TronScanGetTrxTransfersOptions,
  TronScanGetTrxTrc10TransferListOptions,
  TronScanGetTxDetailByHashOptions,
  TronScanGetVotedListOptions,
  TronScanTokenListResponse,
  TronScanTransactionsListResponse,
  TronScanTrc10TransfersResponse,
  TronScanTrc20TransfersResponse,
  TronScanTrc20Trc721TransfersResponse,
  TronScanTrxTransfersResponse,
  TronScanTrxTrc10TransfersResponse,
  TronScanTxDetailByHashResponse,
  TronScanVotedListResponse
} from '../types/tronscan';

export interface TronScanClientOptions {
  /**
   * @description Block explorer url
   */
  url: string;
  /**
   * @description Your API key
   */
  apiKey?: string;
  /**
   * Axios request config
   */
  axiosOptions?: AxiosRequestConfig;
}

export class TronScanClient {
  protected transport: Transport;

  constructor(options: TronScanClientOptions) {
    const { url, apiKey = '', axiosOptions = {} } = options;
    if (!url) {
      throw new Error('URL not specified!');
    }

    this.transport = new AxiosTransport(url, apiKey, axiosOptions);
  }

  /**
   * Get account list.
   *
   * **Note**: The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetAccountListOptions
   * @returns List of accounts
   */
  public async getAccountList(params: TronScanGetAccountListOptions = {}) {
    const response = await this.transport.get<TronScanAccountListResponse>('account/list', params);
    return response.data;
  }

  /**
   * Get account detail information.
   * @param params TronScanGetAccountDetailInformationOptions
   * @returns Detail information of an account
   */
  public async getAccountDetailInformation(params: TronScanGetAccountDetailInformationOptions) {
    const response = await this.transport.get<TronScanAccountDetailInformationResponse>('accountv2', params);
    return response.data;
  }

  /**
   * Get account's token list.
   *
   * **Note** : The maximum value for **limit** is **200**.
   * @param params TronScanGetTokenListOptions
   * @returns Returns a list of tokens held by the account with a balance greater than 0.
   */
  public async getTokenList(params: TronScanGetTokenListOptions): Promise<TronScanTokenListResponse> {
    const { address, hidden = 0, show = 0, sortType = 0, sortBy = 0 } = params;
    const response = await this.transport.get<TronScanTokenListResponse>('account/tokens', {
      address,
      hidden,
      show,
      sortBy,
      sortType
    });
    return response.data;
  }

  /**
   * Get the voted list.
   *
   * **Note**: The maximum value for **limit** is **200**.
   * @param params TronScanGetVotedListOptions
   * @returns Voter list of a certain SR or the voted list of a certain account involving all SRs
   */
  public async getVotedList(params: TronScanGetVotedListOptions): Promise<TronScanVotedListResponse> {
    const response = await this.transport.get<TronScanVotedListResponse>('vote', params);
    return response.data;
  }

  /**
   * Get a list of account resources.
   * @param params TronScanGetAccountResourcesListOptions
   * @returns Resource list of an account that has resources in Stake 1.0.
   */
  public async getAccountResourcesList(
    params: TronScanGetAccountResourcesListOptions
  ): Promise<TronScanAccountResourcesListResponse> {
    const response = await this.transport.get<TronScanAccountResourcesListResponse>('account/resource', params);
    return response.data;
  }

  /**
   * Get a list of stake 2.0 account resources.
   *
   * **Note**: The maximum value for **limit** is **200**.
   * @param params TronScanGetAccountResourcesStake2ListOptions
   * @returns Resource list of an account that has resources in Stake 2.0.
   */
  public async getAccountResourcesStake2List(
    params: TronScanGetAccountResourcesStake2ListOptions
  ): Promise<TronScanAccountResourcesStake2ListResponse> {
    const response = await this.transport.get<TronScanAccountResourcesStake2ListResponse>('account/resourcev2', params);
    return response.data;
  }

  /**
   * Get approval list.
   *
   * **Note**: The maximum value for **limit** is **200**.
   * @param params TronScanGetApprovalListOptions
   * @returns Approval list of the specified account.
   */
  public async getApprovalList(params: TronScanGetApprovalListOptions): Promise<TronScanApprovalListResponse> {
    const response = await this.transport.get<TronScanApprovalListResponse>('account/approve/list', params);
    return response.data;
  }

  /**
   * Get account authorization change records
   * @param params TronScanGetAccountAuthChangeRecordsOptions
   * @returns Account authorization change records
   */
  public async getAccountAuthChangeRecords(
    params: TronScanGetAccountAuthChangeRecordsOptions
  ): Promise<TronScanGetAccountAuthChangeRecordsResponse> {
    const response = await this.transport.get<TronScanGetAccountAuthChangeRecordsResponse>('account/approve/change', params);
    return response.data;
  }

  /**
   * Get list of daily analytics data for an account over time
   * @param params TronScanGetAccountDailyAnalyticsOptions
   * @returns Returns a list of daily analytics data for an account within the specified period.
   */
  public async getAccountDailyAnalytics(
    params: TronScanGetAccountDailyAnalyticsOptions
  ): Promise<TronScanGetAccountDailyAnalyticsResponse> {
    const response = await this.transport.get<TronScanGetAccountDailyAnalyticsResponse>('account/analysis', params);
    return response.data;
  }

  // Transactions and transfers:
  /**
   * Get a list of transactions.
   * @param params TronScanGetTransactionsListOptions
   * @returns List of transactions.
   */
  public async getTransactionsList(params: TronScanGetTransactionsListOptions): Promise<TronScanTransactionsListResponse> {
    const response = await this.transport.get<TronScanTransactionsListResponse>('transaction', params);
    return response.data;
  }

  /**
   * Get transaction detail information by transaction hash.
   * @param params TronScanGetTxDetailByHashOptions
   * @returns Transaction information
   */
  public async getTransactionDetailByHash(params: TronScanGetTxDetailByHashOptions): Promise<TronScanTxDetailByHashResponse> {
    const response = await this.transport.get<TronScanTxDetailByHashResponse>('transaction-info', params);
    return response.data;
  }

  /**
   * Get trx&trc10 transfer list
   * @param params TronScanGetTrxTrc10TransferListOptions
   * @returns Account's transfer list
   */
  public async getTrxTrc10TransferList(
    params: TronScanGetTrxTrc10TransferListOptions
  ): Promise<TronScanTrxTrc10TransfersResponse> {
    const response = await this.transport.get<TronScanTrxTrc10TransfersResponse>('transfer', {
      ...params,
      filterTokenValue: 1
    });
    return response.data;
  }

  /**
   * Get trc20&721 transfers list.
   * @param params TronScanGetTrc20Trc721TransferListOptions
   * @returns Transfer list of TRC20 and TRC721 tokens.
   */
  public async getTrc20Trc721TransferList(
    params: TronScanGetTrc20Trc721TransferListOptions
  ): Promise<TronScanTrc20Trc721TransfersResponse> {
    const response = await this.transport.get<TronScanTrc20Trc721TransfersResponse>('token_trc20/transfers', {
      ...params,
      filterTokenValue: 1
    });
    return response.data;
  }

  public async getTrxTransfers(params: TronScanGetTrxTransfersOptions): Promise<TronScanTrxTransfersResponse> {
    const response = await this.transport.get<TronScanTrxTransfersResponse>('trx/transfer', {
      ...params,
      filterTokenValue: 0
    });
    return response.data;
  }

  public async getTrc10Transfers(params: TronScanGetTrc10TransfersOptions): Promise<TronScanTrc10TransfersResponse> {
    const response = await this.transport.get<TronScanTrc10TransfersResponse>('trc10/transfer', {
      ...params,
      filterTokenValue: 0
    });
    return response.data;
  }

  public async getTrc20Transfers(params: TronScanGetTrc20TransfersOptions): Promise<TronScanTrc20TransfersResponse> {
    const response = await this.transport.get<TronScanTrc20TransfersResponse>('filter/trc20/transfers', {
      ...params,
      filterTokenValue: 0
    });
    return response.data;
  }

  /**
   * Get the list of blocks or details of one block.
   *
   * **Note**: The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetBlocksListOptions
   * @returns Blocks info.
   */
  public async getBlocks(params?: TronScanGetBlocksListOptions): Promise<TronScanBlockListResponse> {
    const response = await this.transport.get<TronScanBlockListResponse>('block', params);
    return response.data;
  }

  // Security Service API

  /**
   * Check account security
   * @param params TronScanCheckAccountSecurityOptions
   * @returns Account security parameters
   */
  public async checkAccountSecurity(params: TronScanCheckAccountSecurityOptions): Promise<TronScanCheckAccountSecurityResponse> {
    const response = await this.transport.get<TronScanCheckAccountSecurityResponse>('security/account/data', params);
    return response.data;
  }

  /**
   * Check token security
   * @param params TronScanCheckTokenSecurityOptions
   * @returns Token security parameters
   */
  public async checkTokenSecurity(params: TronScanCheckTokenSecurityOptions): Promise<TronScanCheckTokenSecurityResponse> {
    const response = await this.transport.get<TronScanCheckTokenSecurityResponse>('security/token/data', params);
    return response.data;
  }

  /**
   * Check url security
   * @param params TronScanCheckUrlSecurityOptions
   * @returns Url security status
   */
  public async checkUrlSecurity(params: TronScanCheckUrlSecurityOptions): Promise<TronScanCheckUrlSecurityResponse> {
    const response = await this.transport.get<TronScanCheckUrlSecurityResponse>('security/url/data', params);
    return response.data;
  }

  /**
   * Check transactions security
   * @param params TronScanCheckTxsSecurityOptions
   * @returns Transactions security statuses
   */
  public async checkTransactionsSecurity(params: TronScanCheckTxsSecurityOptions): Promise<TronScanCheckTxsSecurityResponse> {
    const response = await this.transport.get<TronScanCheckTxsSecurityResponse>('security/transaction/data', params);
    return response.data;
  }

  /**
   * Check multi sign security
   * @param params TronScanCheckMultiSignSecurityOptions
   * @returns Multi sign security status
   */
  public async checkMultiSignSecurity(
    params: TronScanCheckMultiSignSecurityOptions
  ): Promise<TronScanCheckMultiSignSecurityResponse> {
    const response = await this.transport.get<TronScanCheckMultiSignSecurityResponse>('security/sign/data', params);
    return response.data;
  }

  /**
   * Check account authorization security
   * @param params TronScanCheckAccountAuthSecurityOptions
   * @returns Account authorization security
   */
  public async checkAccountAuthSecurity(
    params: TronScanCheckAccountAuthSecurityOptions
  ): Promise<TronScanCheckAccountAuthSecurityResponse> {
    const response = await this.transport.get<TronScanCheckAccountAuthSecurityResponse>('security/auth/data', params);
    return response.data;
  }

  public async getAllTokens(params: TronScanGetAllTokensOptions): Promise<TronScanGetAllTokensResponse> {
    const response = await this.transport.get<TronScanGetAllTokensResponse>('token/all', params);
    return response.data;
  }
}
