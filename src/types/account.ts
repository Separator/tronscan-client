import { AnalyticType, TronScanAccountAthTokenType, TronScanJustLendFilter } from './params';
import { TronScanTokenBalanceInfo, TronScanTokenInfo, TronScanTokenOverviewInfo } from './token-info';
import {
  TronScanBandwidth,
  TronScanContractInfo,
  TronScanContractMap,
  TronScanFrozen,
  TronScanPaginationOptions,
  TronScanPermission,
  TronScanRepresentative
} from './tronscan';

export interface TronScanDailyAnalyticsItem {
  /**
   * @description Day
   * @example '2023-04-02'
   */
  day: string;
  /**
   * @description Trx amount
   * @example '0.924655'
   */
  trx_amount: string;
  /**
   * @description Usdt amount
   * @example '0.060391'
   */
  usdt_amount: string;
  /**
   * @description Price
   * @example 0.06531234843567024
   */
  price: number;
}

export interface TronScanAccountAuthChangeRecord {
  /**
   * @description Date created
   * @example 1622129703000
   */
  date_created: number;
  /**
   * @description Unlimited status
   * @example true
   */
  unlimited: boolean;
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
  /**
   * @description Owner address
   * @example 'TRX6Q82wMqWNbCCiLqejbZe43wk1h1zJHm'
   */
  owner_address: string;
  /**
   * @description To address
   * @example 'TKcEU8ekq2ZoFzLSGFYCUY6aocJBX9X31b'
   */
  to_address: string;
  /**
   * @description Type
   * @example 'approve'
   */
  type: string;
  /**
   * @description Contract address
   * @example 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4'
   */
  contract_address: string;
  /**
   * @description Confirmed status
   * @example true
   */
  confirmed: boolean;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Block
   * @example 30558415
   */
  block: number;
  /**
   * @description Contract return status
   * @example 'SUCCESS'
   */
  contract_ret: string;
  /**
   * @description Amount str
   * @example '115792089237316195423570985008687907853269984665640564039457584007913129639935'
   */
  amount_str: string;
  /**
   * @description From address
   * @example 'TRX6Q82wMqWNbCCiLqejbZe43wk1h1zJHm'
   */
  from_address: string;
  /**
   * @description Hash
   * @example '292e134e8a641dea9c51c58eb492c6c5459e825e85967f8ab2290ee79e964304'
   */
  hash: string;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountDetailInformationOptions {
  /**
   * @description Account address
   * @example 'TSTVYwFDp7SBfZk7Hrz3tucwQVASyJdwC7'
   */
  address: string;
}

export interface TronScanAccountDetailInformationResponse {
  /**
   * @description Total frozen v2
   * @example 0
   */
  totalFrozenV2: number;
  /**
   * @description Out tx count
   * @example 1
   */
  transactions_out: number;
  /**
   * @description Frozen for energy v2
   * @example 0
   */
  frozenForEnergyV2: number;
  /**
   * @description Reward number
   * @example 0
   */
  rewardNum: number;
  /**
   * @description Delegated frozen v2 balance for bandwidth
   * @example 0
   */
  delegatedFrozenV2BalanceForBandwidth: number;
  /**
   * @description Owner permission
   */
  ownerPermission: TronScanPermission;
  /**
   * @description Red tag
   * @example ''
   */
  redTag: string;
  /**
   * @description Delegated frozen for energy
   * @example 0
   */
  delegateFrozenForEnergy: number;
  /**
   * @description Balance in sun
   * @example 12744104
   */
  balance: number;
  /**
   * @description Frozen band width v2
   * @example 0
   */
  frozenForBandWidthV2: number;
  /**
   * @description Can withdraw amount v2
   * @example 0
   */
  canWithdrawAmountV2: number;
  /**
   * @description Delegated
   * @example {}
   */
  delegated: {};
  /**
   * @description Transactions in count
   * @example 5
   */
  transactions_in: number;
  /**
   * @description Total transactions count (native maybe)
   * @example 3
   */
  totalTransactionCount: number;
  /**
   * @description Representative
   */
  representative: TronScanRepresentative;
  /**
   * @description Announcement
   * @example ''
   */
  announcement: string;
  /**
   * @description Allow exchange
   * @example []
   */
  allowExchange: any[];
  /**
   * @description Account type
   * @example 0
   */
  accountType: number;
  /**
   * @description Exchanges
   * @example []
   */
  exchanges: any[];
  /**
   * @description Frozen
   */
  frozen: TronScanFrozen;
  /**
   * @description Total transfers count (in and out)
   * @example 6
   */
  transactions: number;
  /**
   * @description Delegated frozen v2 balance for energy
   * @example 0
   */
  delegatedFrozenV2BalanceForEnergy: number;
  /**
   * @description Name
   * @example ''
   */
  name: string;
  /**
   * @description Frozen for energy
   * @example 0
   */
  frozenForEnergy: number;
  /**
   * @description Energy cost
   * @example 12.4964407880334
   */
  energyCost: number;
  /**
   * @description Active permissions list
   */
  activePermissions: TronScanPermission[];
  /**
   * @description Acquired delegated frozen v2 balance for bandwidth
   * @example 0
   */
  acquiredDelegatedFrozenV2BalanceForBandwidth: number;
  /**
   * @description Net cost
   * @example 1.11421309032748
   */
  netCost: number;
  /**
   * @description Acquired delegate frozen for bandwidth
   * @example 0
   */
  acquiredDelegateFrozenForBandWidth: number;
  /**
   * @description Grey tag
   * @example ''
   */
  greyTag: string;
  /**
   * @description Public tag
   * @example ''
   */
  publicTag: string;
  /**
   * @description Account tokens (with native)
   */
  withPriceTokens: TronScanTokenBalanceInfo[];
  /**
   * @description Unfreeze v2
   * @example 0
   */
  unfreezeV2: number;
  /**
   * @description Feedback risk
   * @example false
   */
  feedbackRisk: boolean;
  /**
   * @description Vote total
   * @example 0
   */
  voteTotal: number;
  /**
   * @description Total frozen
   * @example 0
   */
  totalFrozen: number;
  /**
   * @description Latest operation time
   * @example 1715695737000
   */
  latest_operation_time: number;
  /**
   * @description Frozen for bandwidth
   * @example 0
   */
  frozenForBandWidth: number;
  /**
   * @description Reward
   * @example 1
   */
  reward: number;
  /**
   * @description Address tag logo
   * @example ''
   */
  addressTagLogo: string;
  /**
   * @description Account address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  address: string;
  /**
   * @description Frozen supply
   * @example []
   */
  frozen_supply: any[];
  /**
   * @description Account bandwidth
   */
  bandwidth: TronScanBandwidth;
  /**
   * @description Account creation date in milliseconds
   * @example 1710332382000
   */
  date_created: number;
  /**
   * @description Acquired delegated frozen v2 balance for energy
   * @example 0
   */
  acquiredDelegatedFrozenV2BalanceForEnergy: number;
  /**
   * @description Account resources
   */
  accountResource: {
    /**
     * @description Account resource
     * @example {}
     */
    frozen_balance_for_energy: {};
  };
  /**
   * @description Blue tag
   * @example ''
   */
  blueTag: string;
  /**
   * @description Witness
   * @example 0
   */
  witness: number;
  /**
   * @description Freezing
   * @example 0
   */
  freezing: number;
  /**
   * @description Delegate frozen for bandwidth
   * @example 0
   */
  delegateFrozenForBandWidth: number;
  /**
   * @description Account activation status
   * @example true
   */
  activated: boolean;
  /**
   * @description Acquired delegate frozen for energy
   * @example 0
   */
  acquiredDelegateFrozenForEnergy: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountDailyAnalyticsOptions {
  /**
   * @description Account address
   * @example 'TUD4YXYdj2t1gP5th3A7t97mx1AUmrrQRt'
   */
  address: string;
  /**
   * @description Start time, accurate to milliseconds
   * @example 1514764800000
   */
  start_timestamp: number;
  /**
   * @description End time, accurate to milliseconds
   * @example 1680508422169
   */
  end_timestamp?: number;
  /**
   * @description Analytic type. See: Remarks for details:
   * * 0: Balance (TRX balance, price of TRX on that day, calculated using USDT);
   * * 1: Token transfers (number of transfers [trx, trc10, trc20] and number of tokens transferred [need to be de-duplicated]);
   * * 2: Energy consumption ([transaction triggered by current account] consumes Energy from frozen TRX, consumes Energy from TRX burning, consumes Energy provided by contract deployers, total Energy consumed);
   * * 3: Bandwidth consumption ([transaction triggered by current account] consumes Bandwidth from frozen TRX or free Bandwidth, consumes Bandwidth from burning TRX);
   * * 4: Transactions (number of transactions initiated, and received by the current account).
   * @example 0
   */
  type?: AnalyticType;
}

export interface TronScanGetAccountDailyAnalyticsResponse {
  /**
   * @description Size
   * @example 1
   */
  size: number;
  /**
   * @description Daily analytics items
   */
  data: TronScanDailyAnalyticsItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountAuthChangeRecordsOptions extends TronScanPaginationOptions {
  /**
   * @description Contract address
   * @example 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4'
   */
  contract_address: string;
  /**
   * @description Type must be set to **approve**
   * @example 'approve'
   */
  type: 'approve';
  /**
   * @description Token type:
   * * 1: TRC20;
   * * 2: TRC721;
   * * 3: ALL(default);
   * * 4: TRC1155.
   * @example 1
   */
  show?: TronScanAccountAthTokenType;
  /**
   * @description Originator address
   * @example 'TRX6Q82wMqWNbCCiLqejbZe43wk1h1zJHm'
   */
  from_address: string;
  /**
   * @description Recipient address
   * @example 'TKcEU8ekq2ZoFzLSGFYCUY6aocJBX9X31b'
   */
  to_address: string;
}

export interface TronScanGetAccountAuthChangeRecordsResponse {
  /**
   * @description Total
   * @example 1
   */
  total: number;
  /**
   * @description Contract
   */
  contractMap: TronScanContractMap;
  /**
   * @description Records list
   */
  data: TronScanAccountAuthChangeRecord[];
  /**
   * @description Contract info
   */
  contractInfo: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Range total
   * @example 1
   */
  rangeTotal: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountParticipateProjectOptions {
  /**
   * @description Account address
   * @example 'TWSRE85rP7FydZKjHmmZgCYF5Dbw8AB91J'
   */
  address: string;
  /**
   * @description Filter JustLend DAO transactions of a certain type
   * @example 0
   */
  justLendFilter?: TronScanJustLendFilter;
}

export interface TronScanProjectData {
  /**
   * @description Sc type
   * @example 'Staking'
   */
  sc_type: string;
  /**
   * @description Type
   * @example ''
   */
  type: string;
  /**
   * @description Currency
   * @example '_'
   */
  currency: string;
  /**
   * @description Currency info
   */
  currency_info: TronScanTokenInfo;
  /**
   * @description Balance
   * @example 10
   */
  balance: number;
  /**
   * @description Value
   * @example 10
   */
  value: number;
  /**
   * @description Value in usd
   * @example 2.02
   */
  value_in_usd: number;
  /**
   * @description Value detail
   * @example 10
   */
  value_detail: number;
  /**
   * @description Value in usd detail
   * @example 2.02016809745462
   */
  value_in_usd_detail: number;
  /**
   * @description Version
   * @example 1
   */
  version: number;
}

export interface TronScanProjectInfo {
  /**
   * @description Project name
   * @example 'TRX Staking Governance'
   */
  project_name: string;
  /**
   * @description Project logo
   * @example 'https://static.tronscan.org/production/logo/trx.png'
   */
  logo: string;
  /**
   * @description Project url
   * @example ''
   */
  url: string;
  /**
   * @description Total value
   * @example 10
   */
  total_value: number;
  /**
   * @description Total value in usd
   * @example 2.02
   */
  total_value_in_usd: number;
  /**
   * @description Data list
   */
  data: TronScanProjectData[];
  /**
   * @description Total value detail
   * @example 10
   */
  total_value_detail: number;
  /**
   * @description Total value in usd detail
   * @example 2.02016809745462
   */
  total_value_in_usd_detail: number;
  /**
   * @description Percent
   * @example 1
   */
  percent: number;
}

export interface TronScanRefreshTimeInfo {
  /**
   * @description refresh time info type
   * @example 'realtime'
   */
  type: string;
  /**
   * @description Refresh time info last update time
   * @example 1732804964
   */
  lastUpdateTime: number;
}

export interface TronScanGetAccountParticipateProjectResponse {
  /**
   * @description Total
   * @example 1
   */
  total: number;
  /**
   * @description Projects list
   */
  projects: TronScanProjectInfo[];
  /**
   * @description Total asset in trx
   * @example 10
   */
  total_asset_in_trx: number;
  /**
   * @description Total asset in usd
   * @example 2.02016809745462
   */
  total_asset_in_usd: number;
  /**
   * @description Refresh time info
   */
  refreshTimeInfo: TronScanRefreshTimeInfo;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountWalletTokenOverviewOptions {
  /**
   * @description Account address
   * @example 'TWSRE85rP7FydZKjHmmZgCYF5Dbw8AB91J'
   */
  address: string;
}

export interface TronScanGetAccountWalletTokenOverviewResponse {
  /**
   * @description Total asset in trx
   * @example 55.002484
   */
  totalAssetInTrx: number;
  /**
   * @description Token data list
   */
  data: TronScanTokenOverviewInfo[];
  /**
   * @description Total token count
   * @example 2
   */
  totalTokenCount: number;
  /**
   * @description Refresh time info
   */
  refreshTimeInfo: TronScanRefreshTimeInfo;
  /**
   * @description Total asset in usd
   * @example 11.0839768802715
   */
  totalAssetInUsd: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanMultipleChainItem {
  /**
   * @description Exists
   * @example true
   */
  exist: boolean;
  /**
   * @description Chain
   * @example 'BitTorrent Chain'
   */
  chain: string;
  /**
   * @description Address
   * @example '0x59f5c66c3d9e2065b60bf4a8634cd57fd6a4acd0'
   */
  address: string;
  /**
   * @description Chain name
   * @example 'bttc'
   */
  name: string;
  /**
   * @description Chain logo
   * @example 'https://static.tronscan.org/production/upload/logo/new/chain/bttc.svg'
   */
  logo: string;
  /**
   * @description Title
   * @example 'BTTCSCAN'
   */
  title: string;
  /**
   * @description Url
   * @example 'https://bttcscan.com/address/0x59f5c66c3d9e2065b60bf4a8634cd57fd6a4acd0'
   */
  url: string;
}

export interface TronScanFindAddressOnOtherChainOptions {
  /**
   * @description Account address
   * @example 'TJAsZtFdFdkME5dAF12UMZzK9Vpqp4ri4Q'
   */
  address: string;
}

export interface TronScanFindAddressOnOtherChainResponse {
  /**
   * @description Is token
   * @example false
   */
  isToken: boolean;
  /**
   * @description Is contract
   * @example false
   */
  isContract: boolean;
  /**
   * @description Tron logo
   * @example 'https://static.tronscan.org/production/upload/logo/new/chain/tron.svg'
   */
  tronLogo: string;
  /**
   * @description Tron address
   * @example 'TJAsZtFdFdkME5dAF12UMZzK9Vpqp4ri4Q'
   */
  tronAddress: string;
  /**
   * @description Multiple chain list
   */
  multipleChain: TronScanMultipleChainItem[];
  /**
   * @description Red tag
   * @example ''
   */
  redTag: string;
  /**
   * @description Public tag
   * @example ''
   */
  publicTag: string;
}
