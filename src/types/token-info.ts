/**
 * Token info types
 */

interface TronScanTokenInfoCommon {
  /**
   * @description Token id (address or _ for native)
   * @example '_'
   */
  tokenId: string;
  /**
   * @description Token name
   * @example 'trx'
   */
  tokenName: string;
  /**
   * @description Token abbreviation
   * @example 'trx'
   */
  tokenAbbr: string;
  /**
   * @description Number of decimal places
   * @example 6
   */
  tokenDecimal: number;
  /**
   * @description Token can show
   * @example 1
   */
  tokenCanShow: number;
  /**
   * @description Token logo url
   * @example 'https://static.tronscan.org/production/logo/trx.png'
   */
  tokenLogo: string;
  /**
   * @description Token type string
   * @example 'trc10'
   */
  tokenType: string;
  /**
   * @description Vip token status
   * @example true
   */
  vip: boolean;
}

export interface TronScanTokenInfo extends TronScanTokenInfoCommon {
  /**
   * @description Token level
   * @example '2'
   */
  tokenLevel: string;
  /**
   * @description Token issuer address
   * @example 'THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC'
   */
  issuerAddr?: string;
}

export interface TronScanTokenOverviewInfo extends TronScanTokenInfoCommon {
  /**
   * @description Balance
   * @example '55002484'
   */
  balance: string;
  /**
   * @description Token price in trx
   * @example 1
   */
  tokenPriceInTrx: number;
  /**
   * @description Token price in usd
   * @example 0.201517751094141
   */
  tokenPriceInUsd: number;
  /**
   * @description Asset in trx
   * @example 55.002484
   */
  assetInTrx: number;
  /**
   * @description Asset in usd
   * @example 11.0839768802715
   */
  assetInUsd: number;
  /**
   * @description Percent
   * @example 1
   */
  percent: number;
}

export interface TronScanTokenBalanceInfo extends TronScanTokenInfoCommon {
  /**
   * @description Amount in trx
   * @example '12.744104'
   */
  amount: string;
  /**
   * @description Quantity
   * @example '12.744104'
   */
  quantity?: string;
  /**
   * @description Token level
   */
  level?: string;
  /**
   * @description Token price in USD
   * @example 0.123082017644144
   */
  tokenPriceInUsd?: number;
  /**
   * @description Token price in trx
   * @example 1
   */
  tokenPriceInTrx: number;
  /**
   * @description Amount in USD
   * @example 1.56857
   */
  amountInUsd?: number;
  /**
   * @description Balance in sun
   * @example "12744104"
   */
  balance: string;
  /**
   * @description Number of token holders (not available in trx)
   * @example 42_771_261
   */
  nrOfTokenHolders?: number;
  /**
   * @description Transfers count (not available in trx)
   * @example 1_739_028_163
   */
  transferCount: number;
  /**
   * @description Project info
   * @example ''
   */
  project?: string;
}
