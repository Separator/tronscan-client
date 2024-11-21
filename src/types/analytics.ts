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
