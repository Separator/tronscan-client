import { TronScanTokenBalanceInfo } from './token-info';
import { TronScanDailyAnalyticsItem } from './analytics';
import { TronScanBandwidth, TronScanFrozen, TronScanPermission, TronScanRepresentative } from './tronscan';
import { AnalyticType } from './params';

/**
 * Options
 */

export interface TronScanGetAccountDetailInformationOptions {
  /**
   * @description Account address
   * @example 'TSTVYwFDp7SBfZk7Hrz3tucwQVASyJdwC7'
   */
  address: string;
}

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

/**
 * Responses
 */

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
