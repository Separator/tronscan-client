import { TronScanTokenInfo } from './token-info';
import {
  TronScanContractInfo,
  TronScanContractMap,
  TronScanPaginationOptions,
  TronScanRiskInfo,
  TronScanTimestampOptions
} from './tronscan';
import {
  TronScanConfirm,
  TronScanFilterTokenValue,
  TronScanOrder,
  TronScanTokenFilter,
  TronScanTokenShow,
  TronScanTokenSort,
  TronScanTokenVerifier
} from './params';

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

interface TronScanTokenHoldersItemCommon {
  /**
   * @description Sr tag
   * @example false
   */
  srTag: boolean;
  /**
   * @description Sr name
   * @example ''
   */
  srName: string;
  /**
   * @description Balance
   * @example '704748260701066539'
   */
  balance: string;
  /**
   * @description Address tag
   * @example 'Black Hole Address(0)'
   */
  addressTag: string;
  /**
   * @description Address tag logo
   * @example ''
   */
  addressTagLogo: string;
  /**
   * @description Foundation tag
   * @example false
   */
  foundationTag: boolean;
  /**
   * @description Analysis show
   * @example false
   */
  analysisShow: boolean;
  /**
   * @description Update time
   * @example 1734786399000
   */
  updateTime: number;
}

export interface TronScanTrc10TokenHoldersItem extends TronScanTokenHoldersItemCommon {
  /**
   * @description Address
   * @example 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb'
   */
  address: string;
  /**
   * @description Name
   * @example 'BitTorrent'
   */
  name: string;
  /**
   * @description Index
   * @example 1
   */
  index: number;
}

export interface TronScanTrc20Trc721Trc1155TokenHoldersItem extends TronScanTokenHoldersItemCommon {
  /**
   * @description Update block
   * @example 68019560
   */
  updateBlock: number;
  /**
   * @description Public tag desc
   * @example ''
   */
  publicTagDesc: string;
  /**
   * @description Holder address
   * @example 'TKHuVq1oKVruCGLvqVexFs6dawKv6fQgFs'
   */
  holder_address: string;
}

interface TronScanTokenHoldersCommon {
  /**
   * @description Contract info
   */
  contractInfo?: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Range total
   * @example 16326084
   */
  rangeTotal?: number;
  /**
   * @description Total
   * @example 10000
   */
  total?: number;
  /**
   * @description Contract map
   */
  contractMap?: TronScanContractMap;
}

export interface TronScanPricedTokensListItem {
  /**
   * @description Token name
   * @example 'Sunny'
   */
  name: string;
  /**
   * @description Price in USD
   * @example 0.00114235015383056
   */
  priceInUsd: number;
  /**
   * @description Token logo
   * @example ''
   */
  logo: string;
  /**
   * @description Token id
   * @example 'TVzEnWubbk9K4Zvdv5wBkS6UgbJUv35gmz'
   */
  id: string;
  /**
   * @description Token abbr
   * @example '🌞'
   */
  abbr: string;
  /**
   * @description Token type
   * @example 'trc20'
   */
  type: string;
  /**
   * @description Token VIP status
   * @example false
   */
  vip: boolean;
}

export interface TronScanTokenIdInfo {
  /**
   * @description Token id name
   * @example '965650'
   */
  tokenIdName: string;
  /**
   * @description Token id image
   * @example 'https://static.tronscan.org/production/upload/logo/00/0078186f4893cb0b57c5799da8bec800.png'
   */
  tokenIdImage: string;
}

export interface TronScanTransfersListOfOneTrc721TokenItem {
  /**
   * @description Contract ret
   * @example 'SUCCESS'
   */
  contractRet: string;
  /**
   * @description Confirmation status
   * @example true
   */
  confirmed: boolean;
  /**
   * @description Token id
   * @example '965650'
   */
  token_id: string;
  /**
   * @description Event type
   * @example 'Transfer'
   */
  event_type: string;
  /**
   * @description Block number
   * @example 46556208
   */
  block: number;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Tx id
   * @example '6e857404b7b3b8fed973442e0e2f58c3179e04893deb7a341873fa4160d5e27f'
   */
  transaction_id: string;
  /**
   * @description Block ts
   * @example 1670256540000
   */
  block_ts: number;
  /**
   * @description From address
   * @example 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb'
   */
  from_address: string;
  /**
   * @description To address
   * @example 'TNLjmMrKwAxPXabtgdLGdF1DG17kQKHZg2'
   */
  to_address: string;
  /**
   * @description Contract address
   * @example 'THjYwnDDN6aYxrzKb88CSMTEYjBuHpoYxS'
   */
  contract_address: string;
  /**
   * @description Final result
   * @example 'SUCCESS'
   */
  finalResult: string;
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
  /**
   * @description From address tag
   * @example 'Black Hole Address(0)'
   */
  from_address_tag: string;
  /**
   * @description To address tag
   * @example ''
   */
  to_address_tag: string;
}

export interface TronScanGetOneTrc10TrxTransferInfoItem {
  /**
   * @description Block id
   * @example 68416483
   */
  blockId: number;
  /**
   * @description Transaction hash
   * @example 'ef3567411be729da28f2bf9f4d0a0478fb912cf0dc553971c265bf7174d7735f'
   */
  transactionHash: string;
  /**
   * @description Timestamp
   * @example 1735900515000
   */
  timestamp: number;
  /**
   * @description Transfer from address
   * @example 'TDX9pTmvKya5o6kHRZc5yBTB6NgBj317zR'
   */
  transferFromAddress: string;
  /**
   * @description Transfer to address
   * @example 'TNfmhAGxKXxQMrLVi8jK3RL7TNxUwE9mjR'
   */
  transferToAddress: string;
  /**
   * @description Amount
   * @example 2
   */
  amount: number;
  /**
   * @description Token name
   * @example '_'
   */
  tokenName: string;
  /**
   * @description Final result
   * @example 'SUCCESS'
   */
  finalResult: string;
  /**
   * @description Contract ret
   * @example 'SUCCESS'
   */
  contractRet: string;
  /**
   * @description Confirmed status
   * @example false
   */
  confirmed: boolean;
  /**
   * @description Check status
   * @example true
   */
  cheatStatus: boolean;
  /**
   * @description Token info
   */
  tokenInfo: Partial<TronScanTokenInfo>;
  /**
   * @description From address is contract
   * @example false
   */
  fromAddressIsContract: boolean;
  /**
   * @description To address is contract
   * @example false
   */
  toAddressIsContract: boolean;
  /**
   * @description Tx risk status
   * @example true
   */
  riskTransaction: boolean;
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

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc20Trc721Trc1155TokenHoldersOptions extends TronScanPaginationOptions {
  /**
   * @description TRC20/TRC721/TRC1155 contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Token holder address
   */
  holder_address?: string;
}

export interface TronScanGetTrc20Trc721Trc1155TokenHoldersResponse extends TronScanTokenHoldersCommon {
  /**
   * @description Data list
   */
  trc20_tokens: TronScanTrc20Trc721Trc1155TokenHoldersItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc10TokenHoldersOptions extends TronScanPaginationOptions {
  /**
   * @description Sort fields, only supports sorting by block number.
   * The descending order is adopted with a hyphen (-). Default: '-number'
   */
  sort?: string;
  /**
   * @description TRC10 issuer address
   * @example 'TF5Bn4cJCT6GVeUgyCN4rBhDg42KBrpAjg'
   */
  address: string;
  /**
   * @description TRC10 holder address
   */
  holder_address?: string;
}

export interface TronScanGetTrc10TokenHoldersResponse extends TronScanTokenHoldersCommon {
  /**
   * @description Data list
   */
  data?: TronScanTrc10TokenHoldersItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTokenAmountDistributionByHoldersOptions {
  /**
   * @description Token address or token ID
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  tokenId?: string;
}

export interface TronScanGetTokenAmountDistributionByHoldersResponse {
  /**
   * @description Expire
   * @example 1735029150553
   */
  expire: number;
  /**
   * @description Rank 1-10
   * @example '6452597329564984'
   */
  'rank1-10': string;
  /**
   * @description Rank 11-50
   * @example '3733956271854990'
   */
  'rank11-50': string;
  /**
   * @description Rank 51-100
   * @example '1766021506615976'
   */
  'rank51-100': string;
  /**
   * @description Rank 101-500
   * @example '5095260905257557'
   */
  'rank101-500': string;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetSpecificTokenPriceInfoOptions {
  /**
   * @description Token abbreviation, default is "trx"
   * @example 'trx'
   */
  token?: string;
}

export interface TronScanGetSpecificTokenPriceInfoResponse {
  /**
   * @description Price in trx
   * @example '1.000000000000000000'
   */
  price_in_trx: string;
  /**
   * @description Percent change 24h
   * @example '1.9561606'
   */
  percent_change_24h: string;
  /**
   * @description Market cap
   * @example '22343180297.54'
   */
  market_cap: string;
  /**
   * @description Volume percent change 24h
   * @example '27.9997'
   */
  volume_percent_change_24h: string;
  /**
   * @description Price in usd
   * @example '0.25918176404830845'
   */
  price_in_usd: string;
  /**
   * @description Volume 24h
   * @example '961634947.7336742'
   */
  volume_24h: string;
  /**
   * @description Market cap percent change 24h
   * @example '1.9534'
   */
  market_cap_percent_change_24h: string;
  /**
   * @description Rank
   * @example 10
   */
  rank: number;
  /**
   * @description From
   * @example 'coinmarketcap'
   */
  from: string;
  /**
   * @description Time
   * @example 1735277119037
   */
  time: number;
  /**
   * @description Token
   * @example 'trx'
   */
  token: string;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetPricedTokensListResponse {
  /**
   * @description Priced tokens list
   */
  data: TronScanPricedTokensListItem[];
  /**
   * @description Number
   * @example 475
   */
  number: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTransfersListOfOneTrc721TokenIdOptions extends TronScanPaginationOptions {
  /**
   * @description TRC721 contract address
   * @example 'THjYwnDDN6aYxrzKb88CSMTEYjBuHpoYxS'
   */
  contract: string;
  /**
   * @description The ID of a TRC721 token
   * @example 965650
   */
  tokenId: number;
}

export interface TronScanGetTransfersListOfOneTrc721TokenIdResponse {
  /**
   * @description Token id info
   */
  token_id_info: TronScanTokenIdInfo;
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
   * @description Contract info
   */
  contractInfo: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Token transfers list
   */
  token_transfers: TronScanTransfersListOfOneTrc721TokenItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetOneTrc10TrxTransferInfoOptions extends TronScanTimestampOptions, TronScanPaginationOptions {
  /**
   * @description TRC20/TRC721/TRC1155 contract address
   */
  contract?: string;
  /**
   * @description Returned data type. 0: only whitelist. 1: all. 2: exclude blacklist
   */
  showAll?: TronScanTokenShow;
  /**
   * @description When querying TRX transfers, fill in 'trx'
   */
  name?: string;
  /**
   * @description TRC10 issuer address
   * @example 'TF5Bn4cJCT6GVeUgyCN4rBhDg42KBrpAjg'
   */
  issueAddress?: string;
  /**
   * @description Query address
   */
  address?: string;
  /**
   * @description Same as 'address' parameter
   */
  relatedAddress?: string;
  /**
   * @description
   *   - 0: Return solidified transactions;
   *   - 1: Return non-solidified transactions;
   *   - Not passing any value will return all.
   */
  confirm?: TronScanConfirm;
  /**
   * @description Whether to hide small amount transactions. 
       - 1: hide. 
       - 0: do not hide
   */
  filterTokenValue?: TronScanFilterTokenValue;
}

export interface TronScanGetOneTrc10TrxTransferInfoResponse {
  /**
   * @description Total
   * @example 10000
   */
  total: number;
  /**
   * @description Contract map
   */
  contractMap: TronScanContractMap;
  /**
   * @description Contract info
   */
  contractInfo: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Range total
   * @example 4568231936
   */
  rangeTotal: number;
  /**
   * @description Data list
   */
  Data: TronScanGetOneTrc10TrxTransferInfoItem[];
  /**
   * @description Normal address info
   */
  normalAddressInfo: {
    [key: string]: TronScanRiskInfo;
  };
}
