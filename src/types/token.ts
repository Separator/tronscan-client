import { TronScanPaginationOptions } from './tronscan';
import { TronScanOrder, TronScanTokenFilter, TronScanTokenShow, TronScanTokenSort, TronScanTokenVerifier } from './params';

export interface TronScanTokensListItem {
  /**
   * @description Token abbr
   * @example 'TRON'
   */
  abbr: string;
  /**
   * @description Can show
   * @example 1
   */
  canShow: number;
  /**
   * @description Contract address
   * @example '_'
   */
  contractAddress: string;
  /**
   * @description Date created
   * @example 1529891469
   */
  dateCreated: number;
  /**
   * @description Decimal
   * @example 6
   */
  decimal: number;
  /**
   * @description Description
   * @example 'Official Token of TRON Protocol'
   */
  description: string;
  /**
   * @description Gain
   * @example -0.048
   */
  gain: number;
  /**
   * @description Github
   * @example 'https://github.com/tronprotocol'
   */
  github: string;
  /**
   * @description Img url
   * @example 'https://static.tronscan.org/production/logo/trx.png'
   */
  imgUrl: string;
  /**
   * @description Is top status
   * @example true
   */
  isTop: boolean;
  /**
   * @description Token level
   * @example '2'
   */
  level: string;
  /**
   * @description Marketcap
   * @example 86229558988.263
   */
  marketcap: number;
  /**
   * @description Name
   * @example 'TRX'
   */
  name: string;
  /**
   * @description Number of token holders
   * @example 161425301
   */
  nrOfTokenHolders: number;
  /**
   * @description Owner address
   * @example '-'
   */
  ownerAddress: string;
  /**
   * @description Pair url
   * @example 'https://sun.io/#/scan/tokenDetail?tokenAddress=T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb&version=v1'
   */
  pairUrl: string;
  /**
   * @description Price in trx
   * @example 1
   */
  priceInTrx: number;
  /**
   * @description Price in USD
   * @example 0.274422196173302
   */
  priceInUsd: number;
  /**
   * @description Project site
   * @example 'https://tron.network/'
   */
  projectSite: string;
  /**
   * @description Social media
   * @example '[{"method":"Twitter","active":true,"link":["twitter.com\\/Tronfoundation"]}]'
   */
  socialMedia: string;
  /**
   * @description Supply
   * @example 86229558988.263
   */
  supply: number;
  /**
   * @description Token id
   * @example 0
   */
  tokenId: number;
  /**
   * @description Token type
   * @example 'trc10'
   */
  tokenType: string;
  /**
   * @description Transfer count
   * @example 3527451925
   */
  transferCount: number;
  /**
   * @description Verifier
   * @example 'robot'
   */
  verifier: string;
  /**
   * @description Vip status
   * @example true
   */
  vip: number;
  /**
   * @description Volume 24h in trx
   * @example 4807070424.53061
   */
  volume24hInTrx: number;
  /**
   * @description White paper
   * @example 'https://tron.network/static/doc/white_paper_v_2_0.pdf'
   */
  whitePaper: string;
  /**
   * @description Announcement
   * @example ''
   */
  announcement?: string;
  /**
   * @description Blue tag
   * @example ''
   */
  blueTag?: string;
  /**
   * @description Contract address lower
   * @example 'tf8ejxt89lmcunkv3fq55oed5v44v7tjo2'
   */
  contractAddressLower?: string;
  /**
   * @description Email
   * @example 'info@fimarkcoin.com'
   */
  email?: string;
  /**
   * @description Extra
   * @example ''
   */
  extra?: string;
  /**
   * @description Grey tag
   * @example ''
   */
  greyTag?: string;
  /**
   * @description Issue time
   * @example '2021-04-28 05:21:36'
   */
  issueTime?: string;
  /**
   * @description Public tag
   * @example ''
   */
  publicTag?: string;
  /**
   * @description Recent transfer count
   * @example 329
   */
  recentTransferCount?: number;
  /**
   * @description Red tag
   * @example ''
   */
  redTag?: string;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTokensListOptions extends TronScanPaginationOptions {
  /**
   * @description Default in descending order; optional parameter: **desc**, **asc**
   */
  order?: TronScanOrder;
  /**
   * @description Token filtering, default value is "all".
   * Optional parameter: **trc10**, **trc20**, **trc721**, **trc1155**, **all**, **top**
   */
  filter?: TronScanTokenFilter;
  /**
   * @description Sorting field, default is **marketcap**.
   * Optional parameter: **priceInTrx**, **gain**, **volume24hInTrx**, **holderCount**, **marketcap**
   */
  sort?: TronScanTokenSort;
  /**
   * @description Returned data type. 0: only whitelist. 1: all. 2: exclude blacklist
   */
  showAll?: TronScanTokenShow;
  /**
   * @description Field names to be returned, separated by commas.
   * If left blank, all fields will be returned
   */
  field?: string;
  /**
   * @description By default, tokens with type=auto are not returned.
   * When set to **all**, all tokens are returned.
   */
  verifier?: TronScanTokenVerifier;
}

export interface TronScanGetTokensListResponse {
  /**
   * @description All
   * @example 177559
   */
  all: number;
  /**
   * @description Current week all
   * @example 289
   */
  currentWeekAll: number;
  /**
   * @description Current week total all
   * @example 251
   */
  currentWeekTotalAll: number;
  /**
   * @description Tokens list
   */
  tokens: TronScanTokensListItem[];
  /**
   * @description Total
   * @example 120262
   */
  total: number;
  /**
   * @description Total 10
   * @example 3475
   */
  total10: number;
  /**
   * @description Total 1155
   * @example 32
   */
  total1155: number;
  /**
   * @description Total 20
   * @example 172344
   */
  total20: number;
  /**
   * @description Total 721
   * @example 1708
   */
  total721: number;
  /**
   * @description Total all
   * @example 177559
   */
  totalAll: number;
  /**
   * @description Total all count
   * @example 177559
   */
  totalAllCount: number;
  /**
   * @description Update time
   * @example 1734545185223
   */
  updateTime: number;
  /**
   * @description Value at least
   * @example 10000
   */
  valueAtLeast: number;
}
