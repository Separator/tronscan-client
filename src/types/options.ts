import { AnalyticType } from './params';

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
