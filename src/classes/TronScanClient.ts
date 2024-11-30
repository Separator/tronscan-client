import { AxiosRequestConfig } from 'axios';

import { AxiosTransport, Transport } from './Transport';
import {
  TronScanGetContractCallStatisticsOptions,
  TronScanGetContractCallStatisticsResponse,
  TronScanGetContractDetailInformationOptions,
  TronScanGetContractDetailInformationResponse,
  TronScanGetContractEnergyStatisticsOptions,
  TronScanGetContractEnergyStatisticsResponse,
  TronScanGetContractEventInformationOptions,
  TronScanGetContractEventInformationResponse,
  TronScanGetContractsListOptions,
  TronScanGetContractsListResponse,
  TronScanGetContractUniqueAddressesNumberPerDayOptions,
  TronScanGetContractUniqueAddressesNumberPerDayResponse
} from '../types/contract';

import {
  // Options:
  TronScanGetBlocksListOptions,

  // Responses:
  TronScanBlockListResponse
} from '../types/block';

import {
  // Options:
  TronScanGetAccountDetailInformationOptions,
  TronScanGetAccountDailyAnalyticsOptions,
  TronScanGetAccountAuthChangeRecordsOptions,

  // Responses:
  TronScanAccountDetailInformationResponse,
  TronScanGetAccountDailyAnalyticsResponse,
  TronScanGetAccountAuthChangeRecordsResponse,
  TronScanGetAccountParticipateProjectOptions,
  TronScanGetAccountParticipateProjectResponse,
  TronScanGetAccountWalletTokenOverviewOptions,
  TronScanGetAccountWalletTokenOverviewResponse,
  TronScanFindAddressOnOtherChainOptions,
  TronScanFindAddressOnOtherChainResponse
} from '../types/account';

import {
  // Options:
  TronScanGetTransactionsListOptions,
  TronScanGetTrc20Trc721TransferListOptions,
  TronScanGetTrxTrc10TransferListOptions,
  TronScanGetTrc10TransfersOptions,
  TronScanGetTrc20TransfersOptions,
  TronScanGetTrxTransfersOptions,

  // Responses:
  TronScanTransactionsListResponse,
  TronScanTrc20Trc721TransfersResponse,
  TronScanTrxTrc10TransfersResponse,
  TronScanTrc10TransfersResponse,
  TronScanTrc20TransfersResponse,
  TronScanTrxTransfersResponse
} from '../types/transactions';

import {
  // Options:
  TronScanCheckAccountAuthSecurityOptions,
  TronScanCheckAccountSecurityOptions,
  TronScanCheckMultiSignSecurityOptions,
  TronScanCheckTokenSecurityOptions,
  TronScanCheckTxsSecurityOptions,
  TronScanCheckUrlSecurityOptions,
  TronScanGetAllTokensOptions,

  // Responses:
  TronScanCheckAccountAuthSecurityResponse,
  TronScanCheckAccountSecurityResponse,
  TronScanCheckMultiSignSecurityResponse,
  TronScanCheckTokenSecurityResponse,
  TronScanCheckTxsSecurityResponse,
  TronScanCheckUrlSecurityResponse,
  TronScanGetAllTokensResponse
} from '../types/security';

import {
  TronScanAccountListResponse,
  TronScanAccountResourcesListResponse,
  TronScanAccountResourcesStake2ListResponse,
  TronScanApprovalListResponse,
  TronScanGetAccountListOptions,
  TronScanGetAccountResourcesListOptions,
  TronScanGetAccountResourcesStake2ListOptions,
  TronScanGetApprovalListOptions,
  TronScanGetTokenListOptions,
  TronScanGetTxDetailByHashOptions,
  TronScanGetVotedListOptions,
  TronScanTokenListResponse,
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
   * Account section
   * https://docs.tronscan.org/api-endpoints/account
   */

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

  /**
   * Get an account to participate in the project
   * @param params TronScanGetAccountParticipateProjectOptions
   * @returns Returns the project that an account has participated in
   */
  public async getAccountParticipateProject(
    params: TronScanGetAccountParticipateProjectOptions
  ): Promise<TronScanGetAccountParticipateProjectResponse> {
    const response = await this.transport.get<TronScanGetAccountParticipateProjectResponse>('participate_project', params);
    return response.data;
  }

  /**
   * Get account wallet token overview
   * @param params TronScanGetAccountWalletTokenOverviewOptions
   * @returns Returns overview of tokens in the account wallet
   */
  public async getAccountWalletTokenOverview(
    params: TronScanGetAccountWalletTokenOverviewOptions
  ): Promise<TronScanGetAccountWalletTokenOverviewResponse> {
    const response = await this.transport.get<TronScanGetAccountWalletTokenOverviewResponse>(
      'account/token_asset_overview',
      params
    );
    return response.data;
  }

  /**
   * Find the address if exist on other chain
   * @param params TronScanFindAddressOnOtherChainOptions
   * @returns Returns the address if exist on other chain
   */
  public async findAddressOnOtherChain(
    params: TronScanFindAddressOnOtherChainOptions
  ): Promise<TronScanFindAddressOnOtherChainResponse> {
    const response = await this.transport.get<TronScanFindAddressOnOtherChainResponse>('multiple/chain/query', params);
    return response.data;
  }

  /**
   * Contract section
   * https://docs.tronscan.org/api-endpoints/contract
   */

  /**
   * Get list of contracts
   * @param params TronScanGetContractsListOptions
   * @returns Returns a list of contracts
   */
  public async getListOfContracts(params: TronScanGetContractsListOptions = {}): Promise<TronScanGetContractsListResponse> {
    const response = await this.transport.get<TronScanGetContractsListResponse>('contracts', params);
    return response.data;
  }

  /**
   * Get contract detail information
   *
   * **Note** : The maximum value for **limit** is **200**
   * @param params TronScanGetContractDetailInformationOptions
   * @returns Returns contract detail information
   */
  public async getContractDetailInformation(
    params: TronScanGetContractDetailInformationOptions
  ): Promise<TronScanGetContractDetailInformationResponse> {
    const response = await this.transport.get<TronScanGetContractDetailInformationResponse>('contract', params);
    return response.data;
  }

  /**
   * Get event information of the contract
   * @param params TronScanGetContractEventInformationOptions
   * @returns Returns a list of event information for the contract
   */
  public async getContractEventInformation(
    params: TronScanGetContractEventInformationOptions
  ): Promise<TronScanGetContractEventInformationResponse> {
    const response = await this.transport.post<TronScanGetContractEventInformationResponse>(
      'contracts/smart-contract-triggers-batch',
      params
    );
    return response.data;
  }

  /**
   * Get contract energy statistics
   * @param params TronScanGetContractEnergyStatisticsOptions
   * @returns Returns Energy statistic data of a contract
   */
  public async getContractEnergyStatistics(
    params: TronScanGetContractEnergyStatisticsOptions
  ): Promise<TronScanGetContractEnergyStatisticsResponse> {
    const response = await this.transport.get<TronScanGetContractEnergyStatisticsResponse>('onecontractenergystatistic', params);
    return response.data;
  }

  /**
   * Get contract call statistics
   * @param params TronScanGetContractCallStatisticsOptions
   * @returns Returns contract call statistics
   */
  public async getContractCallStatistics(
    params: TronScanGetContractCallStatisticsOptions
  ): Promise<TronScanGetContractCallStatisticsResponse> {
    const response = await this.transport.get<TronScanGetContractCallStatisticsResponse>('contracts/top_call', params);
    return response.data;
  }

  /**
   * Get the number of unique addresses called per day for a contract over a certain period of time
   * @param params TronScanGetContractUniqueAddressesNumberPerDayOptions
   * @returns Returns the number of unique addresses called per day for a contract over a certain period of time
   */
  public async getContractUniqueAddressesNumberPerDay(
    params: TronScanGetContractUniqueAddressesNumberPerDayOptions
  ): Promise<TronScanGetContractUniqueAddressesNumberPerDayResponse> {
    const response = await this.transport.get<TronScanGetContractUniqueAddressesNumberPerDayResponse>(
      'onecontractcallerstatistic',
      params
    );
    return response.data;
  }

  /**
   * Transactions and transfers section
   * https://docs.tronscan.org/api-endpoints/transactions-and-transfers
   */

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

  /**
   * Security Service API
   * https://docs.tronscan.org/security-service/security-service-api
   */

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

  /**
   * Get all tokens in TronScan
   * @param params TronScanGetAllTokensOptions
   * @returns All tokens list in TronScan
   */
  public async getAllTokens(params: TronScanGetAllTokensOptions): Promise<TronScanGetAllTokensResponse> {
    const response = await this.transport.get<TronScanGetAllTokensResponse>('token/all', params);
    return response.data;
  }
}
