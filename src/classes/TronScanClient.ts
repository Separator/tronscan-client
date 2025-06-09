import { AxiosRequestConfig } from 'axios';

import { AxiosTransport, Transport } from './Transport';
import {
  TronScanGetDetailsOfAllTrc10TokensOptions,
  TronScanGetDetailsOfAllTrc10TokensResponse,
  TronScanGetOneTrc10TrxTransferInfoOptions,
  TronScanGetOneTrc10TrxTransferInfoResponse,
  TronScanGetPricedTokensListResponse,
  TronScanGetSpecificTokenPriceInfoOptions,
  TronScanGetSpecificTokenPriceInfoResponse,
  TronScanGetTokenAmountDistributionByHoldersOptions,
  TronScanGetTokenAmountDistributionByHoldersResponse,
  TronScanGetTokensListOptions,
  TronScanGetTokensListResponse,
  TronScanGetTransfersListOfOneTrc721TokenIdOptions,
  TronScanGetTransfersListOfOneTrc721TokenIdResponse,
  TronScanGetTrc10TokenHoldersOptions,
  TronScanGetTrc10TokenHoldersResponse,
  TronScanGetTrc1155HoldingInformationOptions,
  TronScanGetTrc1155HoldingInformationResponse,
  TronScanGetTrc1155InventoryInformationOptions,
  TronScanGetTrc1155InventoryInformationResponse,
  TronScanGetTrc20TokenCirculationOptions,
  TronScanGetTrc20Trc721Trc1155TokenHoldersOptions,
  TronScanGetTrc20Trc721Trc1155TokenHoldersResponse,
  TronScanGetTrc20Trc721Trc1155TokensDetailsOptions,
  TronScanGetTrc20Trc721Trc1155TokensDetailsResponse,
  TronScanGetTrc721InventoryInformationOptions,
  TronScanGetTrc721InventoryInformationResponse
} from '../types/token';
import {
  TronScanGetContractCallersListOptions,
  TronScanGetContractCallersListResponse,
  TronScanGetContractCallsNumberPerDayOptions,
  TronScanGetContractCallsNumberPerDayResponse,
  TronScanGetContractCallStatisticsOptions,
  TronScanGetContractCallStatisticsResponse,
  TronScanGetContractDailyAnalyticsListOptions,
  TronScanGetContractDailyAnalyticsListResponse,
  TronScanGetContractDetailInformationOptions,
  TronScanGetContractDetailInformationResponse,
  TronScanGetContractEnergyStatisticsOptions,
  TronScanGetContractEnergyStatisticsResponse,
  TronScanGetContractEventInformationOptions,
  TronScanGetContractEventInformationResponse,
  TronScanGetContractsListOptions,
  TronScanGetContractsListResponse,
  TronScanGetContractUniqueAddressesNumberPerDayOptions,
  TronScanGetContractUniqueAddressesNumberPerDayResponse,
  TronScanGetTriggerTransactionsListOptions,
  TronScanGetTriggerTransactionsListResponse
} from '../types/contract';

import {
  // Options:
  TronScanGetBlocksListOptions,

  // Responses:
  TronScanBlockListResponse,
  TronScanGetBlocksStatisticalInformationResponse
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
  TronScanTrxTransfersResponse,
  TronScanGetTrc1155TransferListOptions,
  TronScanGetTrc1155TransferListResponse,
  TronScanGetInternalTxListForAddressOrBlockOptions,
  TronScanGetInternalTxListForAddressOrBlockResponse,
  TronScanGetAccountTransactionDataOptions,
  TronScanGetAccountTransactionDataResponse,
  TronScanGetTxsStatisticDataResponse,
  TronScanGetTxsStatisticDataOptions,
  TronScanGetTransferDistributionStatisticDataOptions,
  TronScanGetTransferDistributionStatisticDataResponse,
  TronScanGetEligibleExchangeTypeTransactionsOptions,
  TronScanGetEligibleExchangeTypeTransactionsResponse
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
import {
  TronScanGetWalletTokensInformationOptions,
  TronScanGetWalletTokensInformationResponse,
  TronScanGetWalletTrc10TransfersListOptions,
  TronScanGetWalletTrc10TransfersListResponse,
  TronScanGetWalletTrc20TransfersListOptions,
  TronScanGetWalletTrc20TransfersListResponse,
  TronScanGetWalletTrxTransfersListOptions,
  TronScanGetWalletTrxTransfersListResponse,
  TronScanGetWalletUnfreezableTrxAmountOptions,
  TronScanGetWalletUnfreezableTrxAmountResponse
} from '../types/wallet';
import {
  TronScanAccountVotesListOptions,
  TronScanAccountVotesListResponse,
  TronScanWitnessListOptions,
  TronScanWitnessListResponse
} from '../types/witness';

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
   * Get the list of the number of calls per day of the contract
   * @param params TronScanGetContractCallsNumberPerDayOptions
   * @returns Returns a list of the number of calls per day of the contract
   */
  public async getContractCallsNumberPerDay(
    params: TronScanGetContractCallsNumberPerDayOptions
  ): Promise<TronScanGetContractCallsNumberPerDayResponse> {
    const response = await this.transport.get<TronScanGetContractCallsNumberPerDayResponse>(
      'onecontracttriggerstatistic',
      params
    );
    return response.data;
  }

  /**
   * Get the list of daily analysis data for the contract over a period of time
   * @param params TronScanGetContractDailyAnalyticsListOptions
   * @returns Returns a list of daily analysis data for the contract over a period of time
   */
  public async getContractDailyAnalyticsList(
    params: TronScanGetContractDailyAnalyticsListOptions
  ): Promise<TronScanGetContractDailyAnalyticsListResponse> {
    const response = await this.transport.get<TronScanGetContractDailyAnalyticsListResponse>('contract/analysis', params);
    return response.data;
  }

  /**
   * Get the list of all callers of the contract and the statistics of the number of calls
   * @param params TronScanGetContractCallersListOptions
   * @returns Returns a list of all callers of the contract and the statistics of the number of calls
   */
  public async getContractCallersList(
    params: TronScanGetContractCallersListOptions
  ): Promise<TronScanGetContractCallersListResponse> {
    const response = await this.transport.get<TronScanGetContractCallersListResponse>('onecontractcallers', params);
    return response.data;
  }

  /**
   * Get the list of trigger transactions for a certain time period
   *
   * **Note** : The maximum value for **limit** is **200**
   * @param params TronScanGetTriggerTransactionsListOptions
   * @returns Returns a list of trigger transactions for a certain time period
   */
  public async getTriggerTransactionsList(
    params: TronScanGetTriggerTransactionsListOptions = {}
  ): Promise<TronScanGetTriggerTransactionsListResponse> {
    const response = await this.transport.get<TronScanGetTriggerTransactionsListResponse>('contracts/trigger', params);
    return response.data;
  }

  /**
   * Undocumented methods (from tronscan cabinet)
   */

  /**
   * Get trx transfers
   * @param params TronScanGetTrxTransfersOptions
   * @returns Returns trx transfers
   */
  public async getTrxTransfers(params: TronScanGetTrxTransfersOptions): Promise<TronScanTrxTransfersResponse> {
    const response = await this.transport.get<TronScanTrxTransfersResponse>('trx/transfer', {
      ...params,
      filterTokenValue: 0
    });
    return response.data;
  }

  /**
   * Get trc10 transfers
   * @param params TronScanGetTrc10TransfersOptions
   * @returns Returns trc10 transfers
   */
  public async getTrc10Transfers(params: TronScanGetTrc10TransfersOptions): Promise<TronScanTrc10TransfersResponse> {
    const response = await this.transport.get<TronScanTrc10TransfersResponse>('trc10/transfer', {
      ...params,
      filterTokenValue: 0
    });
    return response.data;
  }

  /**
   * Get trc20 transfers
   * @param params TronScanGetTrc20TransfersOptions
   * @returns Returns trc20 transfers
   */
  public async getTrc20Transfers(params: TronScanGetTrc20TransfersOptions): Promise<TronScanTrc20TransfersResponse> {
    const response = await this.transport.get<TronScanTrc20TransfersResponse>('filter/trc20/transfers', {
      ...params,
      filterTokenValue: 0
    });
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

  /**
   * Get trc1155 transfer list
   * @param params TronScanGetTrc1155TransferListOptions
   * @returns Get the transfer list of TRC1155 tokens
   */
  public async getTrc1155TransferList(
    params: TronScanGetTrc1155TransferListOptions
  ): Promise<TronScanGetTrc1155TransferListResponse> {
    const response = await this.transport.get<TronScanGetTrc1155TransferListResponse>('token_trc1155/transfers', {
      ...params,
      filterTokenValue: 0
    });
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
   * Get internal transaction list for special address or block
   * @param params TronScanGetInternalTxListForAddressOrBlockOptions
   * @returns Get internal transaction list
   */
  public async getInternalTxListForAddressOrBlock(
    params: TronScanGetInternalTxListForAddressOrBlockOptions
  ): Promise<TronScanGetInternalTxListForAddressOrBlockResponse> {
    const response = await this.transport.get<TronScanGetInternalTxListForAddressOrBlockResponse>('internal-transaction', params);
    return response.data;
  }

  /**
   * Get account's transaction data
   * @param params TronScanGetAccountTransactionDataOptions
   * @returns Get account's transaction data
   */
  public async getAccountTransactionData(
    params: TronScanGetAccountTransactionDataOptions
  ): Promise<TronScanGetAccountTransactionDataResponse> {
    const response = await this.transport.get<TronScanGetAccountTransactionDataResponse>(
      'token_trc20/transfers-with-status',
      params
    );
    return response.data;
  }

  /**
   * Get transaction's statistic data
   * @param params
   * @returns Query statistic data of transactions
   */
  public async getTxsStatisticData(
    params: TronScanGetTxsStatisticDataOptions = {}
  ): Promise<TronScanGetTxsStatisticDataResponse> {
    const response = await this.transport.get<TronScanGetTxsStatisticDataResponse>('transaction/statistics', params);
    return response.data;
  }

  /**
   * Get statistic distribution data of transfer
   * @param params
   * @returns Query statistic data of transfers
   */
  public async getTransferDistributionStatisticData(
    params: TronScanGetTransferDistributionStatisticDataOptions = {}
  ): Promise<TronScanGetTransferDistributionStatisticDataResponse> {
    const response = await this.transport.get<TronScanGetTransferDistributionStatisticDataResponse>(
      'transfer/statistics',
      params
    );
    return response.data;
  }

  /**
   * Get the eligible exchange type transactions
   * @param params TronScanGetEligibleExchangeTypeTransactionsOptions
   * @returns Query the eligible transactions of the exchange type, sorted by time in a descending order
   */
  public async getEligibleExchangeTypeTransactions(
    params: TronScanGetEligibleExchangeTypeTransactionsOptions = {}
  ): Promise<TronScanGetEligibleExchangeTypeTransactionsResponse> {
    const response = await this.transport.get<TronScanGetEligibleExchangeTypeTransactionsResponse>(
      'exchange/transaction',
      params
    );
    return response.data;
  }

  /**
   * Block section
   * https://docs.tronscan.org/api-endpoints/block
   */

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
   * Get statistical information of blocks
   * @returns Returns the statistic information of blocks
   */
  public async getBlocksStatisticalInformation(): Promise<TronScanGetBlocksStatisticalInformationResponse> {
    const response = await this.transport.get<TronScanGetBlocksStatisticalInformationResponse>('block/statistic', {});
    return response.data;
  }

  /**
   * Tokens section
   * https://docs.tronscan.org/api-endpoints/tokens
   */

  /**
   * Get token list
   *
   * **Note** : The maximum value for limit is **500**
   * @param params TronScanGetTokensListOptions
   * @returns Returns the token info
   */
  public async getTokensList(params: TronScanGetTokensListOptions = {}): Promise<TronScanGetTokensListResponse> {
    const response = await this.transport.get<TronScanGetTokensListResponse>('tokens/overview', params);
    return response.data;
  }

  /**
   * Get details of all TRC20/TRC721/TRC1155 tokens or specified TRC20/TRC721/TRC1155 tokens
   * @param params TronScanGetTrc20Trc721Trc1155TokensDetailsOptions
   * @returns Returns the detail information of TRC20/TRC721/TRC1155 tokens
   */
  public async getTrc20Trc721Trc1155TokensDetails(
    params: TronScanGetTrc20Trc721Trc1155TokensDetailsOptions
  ): Promise<TronScanGetTrc20Trc721Trc1155TokensDetailsResponse> {
    const response = await this.transport.get<TronScanGetTrc20Trc721Trc1155TokensDetailsResponse>('token_trc20', params);
    return response.data;
  }

  /**
   * Get details of all TRC10 tokens or specified TRC10 tokens
   * @param params TronScanGetDetailsOfAllTrc10TokensOptions
   * @returns Returns the detail information of TRC10 tokens
   */
  public async getDetailsOfAllTrc10Tokens(
    params: TronScanGetDetailsOfAllTrc10TokensOptions = {}
  ): Promise<TronScanGetDetailsOfAllTrc10TokensResponse> {
    const response = await this.transport.get<TronScanGetDetailsOfAllTrc10TokensResponse>('token', params);
    return response.data;
  }

  /**
   * Get the holder of a TRC20/TRC721/TRC1155 token.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetTrc20Trc721Trc1155TokenHoldersOptions
   * @returns Returns the holder information of TRC20/TRC721/TRC1155 tokens
   */
  public async getTrc20Trc721Trc1155TokenHolders(
    params: TronScanGetTrc20Trc721Trc1155TokenHoldersOptions
  ): Promise<TronScanGetTrc20Trc721Trc1155TokenHoldersResponse> {
    const response = await this.transport.get<TronScanGetTrc20Trc721Trc1155TokenHoldersResponse>('token_trc20/holders', params);
    return response.data;
  }

  /**
   * Get the holder of a TRC10 token.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetTrc10TokenHoldersOptions
   * @returns Returns the holder information of TRC10 tokens.
   */
  public async getTrc10TokenHolders(params: TronScanGetTrc10TokenHoldersOptions): Promise<TronScanGetTrc10TokenHoldersResponse> {
    const response = await this.transport.get<TronScanGetTrc10TokenHoldersResponse>('tokenholders', params);
    return response.data;
  }

  /**
   * Get the distribution of token amounts held by holders
   * @param params TronScanGetTokenAmountDistributionByHoldersOptions
   * @returns Returns the distribution of token holdings among token holders
   */
  public async getTokenAmountDistributionByHolders(
    params: TronScanGetTokenAmountDistributionByHoldersOptions = {}
  ): Promise<TronScanGetTokenAmountDistributionByHoldersResponse> {
    const response = await this.transport.get<TronScanGetTokenAmountDistributionByHoldersResponse>(
      'tokens/position-distribution',
      params
    );
    return response.data;
  }

  /**
   * Get the price information of a specific token.
   *
   * **Note** : Only some tokens have price information.
   * @param params TronScanGetSpecificTokenPriceInfoOptions
   * @returns Returns token price information
   */
  public async getSpecificTokenPriceInfo(
    params: TronScanGetSpecificTokenPriceInfoOptions = {}
  ): Promise<TronScanGetSpecificTokenPriceInfoResponse> {
    const response = await this.transport.get<TronScanGetSpecificTokenPriceInfoResponse>('token/price', params);
    return response.data;
  }

  /**
   * Get a list of priced tokens
   * @returns Returns the list of tokens that have price
   */
  public async getPricedTokensList(): Promise<TronScanGetPricedTokensListResponse> {
    const response = await this.transport.get<TronScanGetPricedTokensListResponse>('getAssetWithPriceList', {});
    return response.data;
  }

  /**
   * Get the transfer list of one TRC721 tokenId.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetTransfersListOfOneTrc721TokenIdOptions
   * @returns Returns the transfer list of a specific TRC721 token
   */
  public async getTransfersListOfOneTrc721TokenId(
    params: TronScanGetTransfersListOfOneTrc721TokenIdOptions
  ): Promise<TronScanGetTransfersListOfOneTrc721TokenIdResponse> {
    const response = await this.transport.get<TronScanGetTransfersListOfOneTrc721TokenIdResponse>('trc721/transfers', params);
    return response.data;
  }

  /**
   * Get one TRC10/TRX transfer information.
   *
   *  **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetOneTrc10TrxTransferInfoOptions
   * @returns Returns the transfer list of a TRC10 token or TRX
   */
  public async getOneTrc10TrxTransferInfo(
    params: TronScanGetOneTrc10TrxTransferInfoOptions = {}
  ): Promise<TronScanGetOneTrc10TrxTransferInfoResponse> {
    const response = await this.transport.get<TronScanGetOneTrc10TrxTransferInfoResponse>('asset/transfer', params);
    return response.data;
  }

  /**
   * Get inventory information of a TRC1155.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetTrc1155InventoryInformationOptions
   * @returns Returns TRC1155 inventory information
   */
  public async getTrc1155InventoryInformation(
    params: TronScanGetTrc1155InventoryInformationOptions
  ): Promise<TronScanGetTrc1155InventoryInformationResponse> {
    const response = await this.transport.get<TronScanGetTrc1155InventoryInformationResponse>('trc1155/inventory', params);
    return response.data;
  }

  /**
   * Get the holding information of a certain tokenId in TRC1155.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetTrc1155HoldingInformationOptions
   * @returns Returns the holding information of a token in TRC1155
   */
  public async getTrc1155HoldingInformation(
    params: TronScanGetTrc1155HoldingInformationOptions
  ): Promise<TronScanGetTrc1155HoldingInformationResponse> {
    const response = await this.transport.get<TronScanGetTrc1155HoldingInformationResponse>('trc1155/token/inventory', params);
    return response.data;
  }

  /**
   * Get the circulation of a TRC20 token
   * @param params TronScanGetTrc20TokenCirculationOptions
   * @returns Returns the circulation of a TRC20 token
   */
  public async getTrc20TokenCirculation(params: TronScanGetTrc20TokenCirculationOptions): Promise<number> {
    const response = await this.transport.get<number>('token_trc20/totalSupply', params);
    return response.data;
  }

  /**
   * Get inventory information of a TRC721
   * @param params TronScanGetTrc721InventoryInformationOptions
   * @returns Return the inverntory information of tokens in TRC721
   */
  public async getTrc721InventoryInformation(
    params: TronScanGetTrc721InventoryInformationOptions
  ): Promise<TronScanGetTrc721InventoryInformationResponse> {
    const response = await this.transport.get<TronScanGetTrc721InventoryInformationResponse>('trc721/token', params);
    return response.data;
  }

  /**
   * Witness section
   * https://docs.tronscan.org/api-endpoints/witness
   */

  /**
   * Get the list of witnesses.
   *
   * **Note** : The maximum value for **limit** is **200**.
   * @returns Returns a list of witnesses
   */
  public async getWitnessList(params: TronScanWitnessListOptions): Promise<TronScanWitnessListResponse> {
    const response = await this.transport.get<TronScanWitnessListResponse>('pagewitness', params);
    return response.data;
  }

  /**
   * Get the list of votes for the account
   * @param params TronScanAccountVotesListOptions
   * @returns Returns a list of votes for the account
   */
  public async getAccountVotesList(params: TronScanAccountVotesListOptions): Promise<TronScanAccountVotesListResponse> {
    const response = await this.transport.get<TronScanAccountVotesListResponse>('account/votes', params);
    return response.data;
  }

  /**
   * Wallet section
   * https://docs.tronscan.org/api-endpoints/wallet
   */

  /**
   * Get the list of trx transfers related to a specific address.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetWalletTrxTransfersListOptions
   * @returns Returns the list of TRX transfers for a specific address
   */
  public async getWalletTrxTransfersList(
    params: TronScanGetWalletTrxTransfersListOptions
  ): Promise<TronScanGetWalletTrxTransfersListResponse> {
    const response = await this.transport.get<TronScanGetWalletTrxTransfersListResponse>('transfer/trx', params);
    return response.data;
  }

  /**
   * Get the transfer list of a specific TRC10 token for a certain address.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetWalletTrc10TransfersListOptions
   * @returns Returns the transfer list of a TRC10 token for a specific account
   */
  public async getWalletTrc10TransfersList(
    params: TronScanGetWalletTrc10TransfersListOptions
  ): Promise<TronScanGetWalletTrc10TransfersListResponse> {
    const response = await this.transport.get<TronScanGetWalletTrc10TransfersListResponse>('transfer/token10', params);
    return response.data;
  }

  /**
   * Get the transfer list of a specific TRC20 token for a certain address.
   *
   * **Note** : The value sum of **start** and **limit** must be less than or equal to **10000**.
   * @param params TronScanGetWalletTrc20TransfersListOptions
   * @returns Returns the transfer list of a TRC20 token for a specific account
   */
  public async getWalletTrc20TransfersList(
    params: TronScanGetWalletTrc20TransfersListOptions
  ): Promise<TronScanGetWalletTrc20TransfersListResponse> {
    const response = await this.transport.get<TronScanGetWalletTrc20TransfersListResponse>('transfer/trc20', params);
    return response.data;
  }

  /**
   * Get the information of tokens held and followed in the account's web wallet
   * @param params TronScanGetWalletTokensInformationOptions
   * @returns Returns a list of tokens held and followed by an account
   */
  public async getWalletTokensInformation(
    params: TronScanGetWalletTokensInformationOptions
  ): Promise<TronScanGetWalletTokensInformationResponse> {
    const response = await this.transport.get<TronScanGetWalletTokensInformationResponse>('account/wallet', params);
    return response.data;
  }

  /**
   * Get the amount of unfreezable TRX in address
   * @param params TronScanGetWalletUnfreezableTrxAmountOptions
   * @returns Returns the amount of unfreezable TRX in one address
   */
  public async getWalletUnfreezableTrxAmount(
    params: TronScanGetWalletUnfreezableTrxAmountOptions
  ): Promise<TronScanGetWalletUnfreezableTrxAmountResponse> {
    const response = await this.transport.get<TronScanGetWalletUnfreezableTrxAmountResponse>('account/resource/unfreeze', params);
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
