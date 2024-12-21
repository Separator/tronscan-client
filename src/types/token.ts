import { TronScanContractMap, TronScanPaginationOptions } from './tronscan';
import { TronScanOrder, TronScanTokenFilter, TronScanTokenShow, TronScanTokenSort, TronScanTokenVerifier } from './params';

interface TronScanTokenListItemCommon {
  /**
   * @description Token abbr
   * @example 'TRON'
   */
  abbr: string;
  /**
   * @description Number of token holders
   * @example 161425301
   */
  nrOfTokenHolders: number;
  /**
   * @description Date created
   * @example 1529891469
   */
  dateCreated: number;
  /**
   * @description Email
   * @example 'info@fimarkcoin.com'
   */
  email?: string;
  /**
   * @description Github
   * @example 'https://github.com/tronprotocol'
   */
  github: string;
  /**
   * @description Token level
   * @example '2'
   */
  level: string;
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
   * @description Grey tag
   * @example ''
   */
  greyTag?: string;
  /**
   * @description Red tag
   * @example ''
   */
  redTag?: string;
  /**
   * @description Public tag
   * @example ''
   */
  publicTag?: string;
  /**
   * @description Img url
   * @example 'https://static.tronscan.org/production/logo/trx.png'
   */
  imgUrl: string;
  /**
   * @description Name
   * @example 'TRX'
   */
  name: string;
  /**
   * @description Owner address
   * @example '-'
   */
  ownerAddress: string;
  /**
   * @description Vip status
   * @example true
   */
  vip: boolean;
  /**
   * @description Description
   * @example 'Official Token of TRON Protocol'
   */
  description: string;
}

export interface TronScanTokensListItem extends TronScanTokenListItemCommon {
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
   * @description Decimal
   * @example 6
   */
  decimal: number;
  /**
   * @description Gain
   * @example -0.048
   */
  gain: number;
  /**
   * @description Is top status
   * @example true
   */
  isTop: boolean;
  /**
   * @description Marketcap
   * @example 86229558988.263
   */
  marketcap: number;
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
   * @description Contract address lower
   * @example 'tf8ejxt89lmcunkv3fq55oed5v44v7tjo2'
   */
  contractAddressLower?: string;
  /**
   * @description Extra
   * @example ''
   */
  extra?: string;
  /**
   * @description Issue time
   * @example '2021-04-28 05:21:36'
   */
  issueTime?: string;
  /**
   * @description Recent transfer count
   * @example 329
   */
  recentTransferCount?: number;
}

export interface TronScanTrc20Trc721Trc1155TokensPriceItem {
  /**
   * @description Price usd
   * @example '0.9998054785327043'
   */
  priceUsd: string;
  /**
   * @description Time
   * @example '1734505200'
   */
  time: string;
}

export interface TronScanTokenPriceLine {
  /**
   * @description Total
   * @example 25
   */
  total: number;
  /**
   * @description Token price line data
   */
  data: TronScanTrc20Trc721Trc1155TokensPriceItem[];
}

export interface TronScanTrc20Trc721Trc1155MarketInfoItem {
  /**
   * @description F precision
   * @example 6
   */
  fPrecision: number;
  /**
   * @description F short name
   * @example 'USDT'
   */
  fShortName: string;
  /**
   * @description F token addr
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  fTokenAddr: string;
  /**
   * @description Filter
   * @example false
   */
  filter: boolean;
  /**
   * @description Gain
   * @example -0.0002
   */
  gain: number;
  /**
   * @description Liquidity
   * @example 115666218.985924
   */
  liquidity: number;
  /**
   * @description Pair url
   * @example 'https://sun.io/#/scan/tokenDetail?tokenAddress=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&version=v3'
   */
  pairUrl: string;
  /**
   * @description Price from
   * @example 'SUNSWAPV3'
   */
  priceFrom: string;
  /**
   * @description Price in trx
   * @example 3.82243166986517
   */
  priceInTrx: number;
  /**
   * @description Price in usd
   * @example 0.999723707013475
   */
  priceInUsd: number;
  /**
   * @description S precision
   * @example 6
   */
  sPrecision: number;
  /**
   * @description S short name
   * @example 'TRX'
   */
  sShortName: string;
  /**
   * @description Volume 24h gain
   * @example 0.146348
   */
  volume24hGain: number;
  /**
   * @description Volume 24h in trx
   * @example 860947700309.817
   */
  volume24hInTrx: number;
}

export interface TronScanSocialMediaListItem {
  /**
   * @description Name
   * @example 'Twitter'
   */
  name: string;
  /**
   * @description Url
   * @example 'https://twitter.com/Tether_to'
   */
  url: string;
}

interface TronScanTokenDetailsCommon {
  /**
   * @description Total turn over
   * @example '61758980927299097'
   */
  totalTurnOver: string;
  /**
   * @description From third party
   * @example false
   */
  fromThirdParty: boolean;
  /**
   * @description White paper
   * @example 'https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf'
   */
  white_paper: string;
  /**
   * @description Index
   * @example 1
   */
  index: number;
  /**
   * @description Token price line
   */
  tokenPriceLine: TronScanTokenPriceLine;
  /**
   * @description Symbol show
   * @example true
   */
  symbolShow: boolean;
}

export interface TronScanTrc20Trc721Trc1155TokensDetailsItem extends TronScanTokenDetailsCommon {
  /**
   * @description Icon url
   * @example 'https://static.tronscan.org/production/logo/usdtlogo.png'
   */
  icon_url: string;
  /**
   * @description Symbol
   * @example 'USDT'
   */
  symbol: string;
  /**
   * @description Total supply
   * @example 0
   */
  total_supply: number;
  /**
   * @description Level
   * @example '2'
   */
  level: string;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Issue ts
   * @example 0
   */
  issue_ts: number;
  /**
   * @description Red tag
   * @example ''
   */
  redTag: string;
  /**
   * @description Token desc
   * @example 'USDT is the official stablecoin issued by Tether on the TRON network.'
   */
  token_desc: string;
  /**
   * @description Price trx
   * @example 0
   */
  price_trx: number;
  /**
   * @description Price
   * @example ''
   */
  price: string;
  /**
   * @description vip
   * @example true
   */
  vip: boolean;
  /**
   * @description Announcement
   * @example ''
   */
  announcement: string;
  /**
   * @description Volume 24h
   * @example 203288634887.11
   */
  volume24h: number;
  /**
   * @description Transfer 24h rate
   * @example -0.0068
   */
  transfer24h_rate: number;
  /**
   * @description Market info
   */
  market_info: TronScanTrc20Trc721Trc1155MarketInfoItem;
  /**
   * @description Volume
   * @example 0
   */
  volume: number;
  /**
   * @description Liquidity 24h
   * @example 154034144.662156
   */
  liquidity24h: number;
  /**
   * @description Name
   * @example 'Tether USD'
   */
  name: string;
  /**
   * @description Token type
   * @example 'trc20'
   */
  tokenType: string;
  /**
   * @description Social media
   * @example ''
   */
  social_media: string;
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
   * @description Gain
   * @example ''
   */
  gain: string;
  /**
   * @description Home page
   * @example 'https://tron.network/usdt'
   */
  home_page: string;
  /**
   * @description In tvc token
   * @example true
   */
  inTvcToken: boolean;
  /**
   * @description Just swap volume 24h
   * @example 176876552.974757
   */
  justSwapVolume24h: number;
  /**
   * @description Git hub
   * @example ''
   */
  git_hub: string;
  /**
   * @description Total supply with decimals
   * @example '61758981653053656'
   */
  total_supply_with_decimals: string;
  /**
   * @description Transfer 24h
   * @example 2255587
   */
  transfer24h: number;
  /**
   * @description Social media list
   */
  social_media_list: TronScanSocialMediaListItem[];
  /**
   * @description Just swap volume 24h rate
   * @example -0.0853
   */
  justSwapVolume24h_rate: number;
  /**
   * @description Volume 24h rate
   * @example 0.3219
   */
  volume24h_rate: number;
  /**
   * @description Email
   * @example ''
   */
  email: string;
  /**
   * @description Liquidity 24h rate
   * @example 0.0972
   */
  liquidity24h_rate: number;
  /**
   * @description Total supply str
   * @example ''
   */
  total_supply_str: string;
  /**
   * @description Contract name
   * @example 'TetherToken'
   */
  contract_name: string;
  /**
   * @description Blue tag
   * @example ''
   */
  blueTag: string;
  /**
   * @description Issue address
   * @example 'THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC'
   */
  issue_address: string;
  /**
   * @description Transfer num
   * @example 2200400831
   */
  transfer_num: number;
  /**
   * @description Holders count
   * @example 58295606
   */
  holders_count: number;
  /**
   * @description Decimals
   * @example 6
   */
  decimals: number;
  /**
   * @description Issue time
   * @example '2019-04-16 12:41:20'
   */
  issue_time: string;
}

export interface TronScanDetailsOfAllTrc10TokensItem extends TronScanTokenListItemCommon, TronScanTokenDetailsCommon {
  /**
   * @description Country
   * @example 'Canada'
   */
  country?: string;
  /**
   * @description Token id
   * @example 1001761
   */
  tokenID?: number;
  /**
   * @description Participated
   * @example 158520959000000
   */
  participated?: number;
  /**
   * @description Precision
   * @example 0
   */
  precision?: number;
  /**
   * @description Num
   * @example 1
   */
  num?: number;
  /**
   * @description Available
   * @example 0
   */
  available?: number;
  /**
   * @description Reputation
   * @example 'Ok'
   */
  reputation?: string;
  /**
   * @description Issued percentage
   * @example 100
   */
  issuedPercentage?: number;
  /**
   * @description Vote score
   * @example 0
   */
  voteScore?: number;
  /**
   * @description Price
   * @example 5000000
   */
  price?: number;
  /**
   * @description Percentage
   * @example 0
   */
  percentage?: number;
  /**
   * @description Start time
   * @example 1545066000000
   */
  startTime?: number;
  /**
   * @description Id
   * @example 1001761
   */
  id?: number;
  /**
   * @description Issued
   * @example 2000000000
   */
  issued?: number;
  /**
   * @description Trx num
   * @example 5000000
   */
  trxNum?: number;
  /**
   * @description Website
   * @example 'https://trongameglobal.network/'
   */
  website?: string;
  /**
   * @description Available supply
   * @example 0
   */
  availableSupply?: number;
  /**
   * @description Total supply
   * @example '2000000000'
   */
  totalSupply?: string;
  /**
   * @description Third part url
   * @example ''
   */
  thirdPartyUrl?: string;
  /**
   * @description Frozen total
   * @example 0
   */
  frozenTotal?: number;
  /**
   * @description Frozen
   * @example []
   */
  frozen?: any[];
  /**
   * @description Frozen supply
   * @example []
   */
  frozen_supply?: any[];
  /**
   * @description Can show
   * @example '1'
   */
  canShow?: string;
  /**
   * @description Remaining
   * @example 0
   */
  remaining?: number;
  /**
   * @description Url
   * @example 'https://trongameglobal.network/'
   */
  url?: string;
  /**
   * @description Frozen percentage
   * @example 0
   */
  frozenPercentage?: number;
  /**
   * @description Is black
   * @example false
   */
  isBlack?: boolean;
  /**
   * @description New social media
   * @example ''
   */
  new_social_media?: string;
  /**
   * @description Remaining percentage
   * @example 0
   */
  remainingPercentage?: number;
  /**
   * @description End time
   * @example 1559235600000
   */
  endTime?: number;
  /**
   * @description Social media
   */
  social_media?: TronScanSocialMediaListItem[];
  /**
   * @description Rank order
   * @example 1000000
   */
  rank_order?: number;
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

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc20Trc721Trc1155TokensDetailsOptions extends TronScanPaginationOptions {
  /**
   * @description TRC20/TRC721/TRC1155 contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract: string;
  /**
   * @description Returned data type. 0: only whitelist. 1: all. 2: exclude blacklist
   * @example '1'
   */
  showAll?: TronScanTokenShow;
}

export interface TronScanGetTrc20Trc721Trc1155TokensDetailsResponse {
  /**
   * @description Total
   * @example 1
   */
  total: number;
  /**
   * @description Contract map
   */
  contractMap: TronScanContractMap;
  /**
   * @description Range total
   * @example 1
   */
  rangeTotal: number;
  /**
   * @description Tokens list
   */
  trc20_tokens: TronScanTrc20Trc721Trc1155TokensDetailsItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetDetailsOfAllTrc10TokensOptions extends TronScanPaginationOptions {
  /**
   * @description TRC10 issuer address
   */
  owner?: string;
  /**
   * @description TRC10 token ID. If id is set to 0, the token is TRX
   */
  id?: number;
  /**
   * @description The ID of the returned token must be greater than this parameter value
   */
  id_gt?: number;
  /**
   * @description Returned data type. 0: only whitelist. 1: all. 2: exclude blacklist
   */
  showAll?: TronScanTokenShow;
  /**
   * @description Field names to be returned, separated by commas.
   * If left blank, all fields will be returned
   */
  fields?: string;
  /**
   * @description When totalAll=1, the totalAll in the return value is the total number of all tokens.
   * Otherwise, it is the number of filtered tokens
   */
  totalAll?: number;
  /**
   * @description TRC10 token name
   */
  name?: string;
}

export interface TronScanGetDetailsOfAllTrc10TokensResponse {
  /**
   * @description Total
   * @example 3475
   */
  total: number;
  /**
   * @description Data list
   */
  data: TronScanDetailsOfAllTrc10TokensItem[];
  /**
   * @description Contract map
   */
  contractMap: TronScanContractMap;
  /**
   * @description Total all
   * @example 3475
   */
  totalAll: number;
}
