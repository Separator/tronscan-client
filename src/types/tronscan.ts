// https://apilist.tronscanapi.com/api/new
// https://shastapi.tronscan.org/api
// https://nileapi.tronscan.org/api

// 1 Все обычные входящие транзакции, чтобы детектировать входящую нативку
// https://apilist.tronscanapi.com/api/new/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&start_timestamp=1710332385000&end_timestamp=1710332385000
// https://shastapi.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&start_timestamp=1714819797000&end_timestamp=1714819797000

// 2 Все переводы токенов на счёт
// https://apilist.tronscanapi.com/api/new/token_trc20/transfers?limit=20&start=0&toAddress=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&start_timestamp=1672513200000&end_timestamp=&confirm=&filterTokenValue=1
// https://shastapi.tronscan.org/api/token_trc20/transfers?limit=20&start=0&toAddress=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&start_timestamp=1672513200000&end_timestamp=&confirm=&filterTokenValue=1

// 3 Все переводы trx, trc10
// https://apilist.tronscanapi.com/api/new/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7&filterTokenValue=1
// https://shastapi.tronscan.org/api/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=1

// txs
// https://apilist.tronscanapi.com/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw
//    https://nileapi.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w
//   https://shastapi.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w

// ----------------------------------------------------------------------------------------------------

// trx
//  https://apilist.tronscanapi.com/api/trx/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&filterTokenValue=0
// https://nileapi.tronscan.org/api/new/trx/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=0
//    https://shastapi.tronscan.org/api/trx/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=0

// nileapi - redirect

// sort +
// limit +
// start +
// address +
// filterTokenValue=0 +
// start_timestamp +
// end_timestamp +

// trc10
//  https://apilist.tronscanapi.com/api/trc10/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TCqSJ3kMp79VGmGtKCbA94s6UExSgQmQpz&filterTokenValue=0
// https://nileapi.tronscan.org/api/new/trc10/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TWXmq3nt8q7Y6vFrsAVSaBQQr8hkJFRU56&filterTokenValue=0
//    https://shastapi.tronscan.org/api/trc10/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=0

// nileapi - redirect

// sort + -timestamp
// limit +
// start +
// address +
// filterTokenValue=0 +
// start_timestamp +
// end_timestamp +
// tokens + token id

// trc20
//  https://apilist.tronscanapi.com/api/filter/trc20/transfers?limit=20&start=0&sort=-timestamp&count=true&filterTokenValue=0&relatedAddress=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw
// https://nileapi.tronscan.org/api/new/filter/trc20/transfers?limit=20&start=0&sort=-timestamp&count=true&filterTokenValue=0&relatedAddress=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w
//    https://shastapi.tronscan.org/api/filter/trc20/transfers?limit=20&start=0&sort=-timestamp&count=true&filterTokenValue=0&relatedAddress=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w

// nileapi - redirect

// sort -
// relatedAddress +
// limit + max 20
// start +
// filterTokenValue=0 +
// start_timestamp +
// end_timestamp +

// ----------------------------------------------------------------------------------------------------

// token assets overview
// https://apilist.tronscanapi.com/api/account/token_asset_overview?address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw

// ----------------------------------------------------------------------------------------------------

// Get account info
// https://apilist.tronscanapi.com/api/accountv2?address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw
//    https://nileapi.tronscan.org/api/accountv2?address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w
//   https://shastapi.tronscan.org/api/accountv2?address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w

// ----------------------------------------------------------------------------------------------------

// Get blocks
// https://apilist.tronscanapi.com/api/block
//    https://nileapi.tronscan.org/api/block
//   https://shastapi.tronscan.org/api/block

// ----------------------------------------------------------------------------------------------------
// Get tx info
// https://apilist.tronscanapi.com/api/transaction-info?hash=aa205d68dbcba1c1b220379834fd567a89813c3283abe03262173a83e41e1d2a

// ----------------------------------------------------------------------------------------------------

export interface TronScanTrc20TransferInfo {
  /**
   * @description Icon url
   * @example 'https://static.tronscan.org/production/logo/usdtlogo.png'
   */
  icon_url: string;
  /**
   * @description Token symbol
   * @example 'USDT'
   */
  symbol: string;
  /**
   * @description Token level
   * @example '2'
   */
  level: string;
  /**
   * @description To address
   * @example 'TCz47XgC9TjCeF4UzfB6qZbM9LTF9s1tG7'
   */
  to_address: string;
  /**
   * @description Token contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Transfer type
   * @example 'Transfer'
   */
  type: string;
  /**
   * @description Token decimals count
   * @example 6
   */
  decimals: number;
  /**
   * @description Token name
   * @example 'Tether USD'
   */
  name: string;
  /**
   * @description Token VIP status
   * @example true
   */
  vip: boolean;
  /**
   * @description Token type
   * @example 'trc20'
   */
  tokenType: string;
  /**
   * @description From address
   * @example 'TEqPbhNc57UUEBFTm7h8MighHRqvbCJckd'
   */
  from_address: string;
  /**
   * @description Amount
   * @example '9500000000'
   */
  amount_str: string;
  /**
   * @description Status
   * @example 0
   */
  status: number;
}

export interface TronScanConfirmNodeItem {
  /**
   * @description Node address
   * @example 'TTW663tQYJTTCtHh6DWKAfexRhPMf2DxQ1'
   */
  address: string;
  /**
   * @description Node name
   * @example 'TRONALLIANCE'
   */
  name: string;
  /**
   * @description Block id
   * @example 62280528
   */
  block: number;
  /**
   * @description Node site url
   * @example 'http://tronalliance.org'
   */
  url: string;
}

export interface TronScanContractMap {
  [key: string]: boolean;
}

export interface TronScanAddressTag {
  [key: string]: string;
}

export interface TronScanFrozen {
  /**
   * @description Total
   * @example 0
   */
  total: number;
  /**
   * @description Balances
   * @example []
   */
  balances: any[];
}

export interface TronScanPermissionKey {
  /**
   * @description Address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  address: string;
  /**
   * @description Weight
   * @example 1
   */
  weight: number;
}

export interface TronScanPermission {
  /**
   * @description Keys list
   */
  keys: TronScanPermissionKey[];
  /**
   * @description Threshold
   * @example 1
   */
  threshold: number;
  /**
   * @description Permission name
   * @example 'owner'
   */
  permission_name: string;
  /**
   * @description Permission id
   * @example 2
   */
  id?: number;
  /**
   * @description Operations
   * @example '7fff1fc0033ec30f000000000000000000000000000000000000000000000000'
   */
  operations?: string;
  /**
   * @description Permission type
   * @example 'Active'
   */
  type?: string;
}

export interface TronScanRepresentative {
  /**
   * @description Last withdraw time
   * @example 0
   */
  lastWithDrawTime: number;
  /**
   * @description Allowance
   * @example 0
   */
  allowance: number;
  /**
   * @description Enabled
   * @example false
   */
  enabled: boolean;
  /**
   * @description Url
   * @example ''
   */
  url: string;
}

export interface TronScanBandwidth {
  /**
   * @description Remaining energy
   * @example 0
   */
  energyRemaining: number;
  /**
   * @description Total energy limit
   * @example 90000000000
   */
  totalEnergyLimit: number;
  /**
   * @description Total energy weight
   * @example 7202050690
   */
  totalEnergyWeight: number;
  /**
   * @description Net used
   * @example 0
   */
  netUsed: number;
  /**
   * @description Storage limit
   * @example 0
   */
  storageLimit: number;
  /**
   * @description Storage percentage
   * @example 0
   */
  storagePercentage: number;
  /**
   * @description Assets
   * @example {}
   */
  assets: {};
  /**
   * @description Net percentage
   * @example 0
   */
  netPercentage: number;
  /**
   * @description Storage used
   * @example 0
   */
  storageUsed: number;
  /**
   * @description Storage remaining
   * @example 0
   */
  storageRemaining: number;
  /**
   * @description Free net limit
   * @example 600
   */
  freeNetLimit: number;
  /**
   * @description Energy used
   * @example 0
   */
  energyUsed: number;
  /**
   * @description Free net remaining
   * @example 600
   */
  freeNetRemaining: number;
  /**
   * @description Net limit
   * @example 0
   */
  netLimit: number;
  /**
   * @description Net remaining
   * @example 0
   */
  netRemaining: number;
  /**
   * @description Energy limit
   * @example 0
   */
  energyLimit: number;
  /**
   * @description Free net used
   * @example 0
   */
  freeNetUsed: number;
  /**
   * @description Total net weight
   * @example 38771757741
   */
  totalNetWeight: number;
  /**
   * @description Free net percentage
   * @example 0
   */
  freeNetPercentage: number;
  /**
   * @description Energy percentage
   * @example 0
   */
  energyPercentage: number;
  /**
   * @description Total net limit
   * @example 43200000000
   */
  totalNetLimit: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanBlockSimple {
  /**
   * @description Block number
   * @example 61993118
   */
  number: number;
  /**
   * @description Block hash
   * @example "0000000003b1f09eee9215c44771cde1a74d3dfb0be40149ec06af353e5f6360"
   */
  hash: string;
  /**
   * @description Block size
   * @example 64113
   */
  size: number;
  /**
   * @description Block timestamp
   * @example 1716622713000
   */
  timestamp: number;
  /**
   * @description ???
   * @example "2p6xdKFSc4ApzVHtBbK4ef47SXDzVm4TUJMca2DWKbZaC64NKK"
   */
  txTrieRoot: string;
  /**
   * @description Parent block hash
   * @example 0000000003b1f09d0b747aa65d452822b201a6731d2e7fa012a171d0a3d71934"
   */
  parentHash: string;
  /**
   * @description Witness id
   * @example 0
   */
  witnessId: number;
  /**
   * @description Witness address
   * @example "TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH"
   */
  witnessAddress: string;
  /**
   * @description ???
   * @example 268
   */
  nrOfTrx: number;
  /**
   * @description Witness name
   * @example "Binance Staking"
   */
  witnessName: string;
  /**
   * @description Version
   * @example "29"
   */
  version: string;
  /**
   * @description Fee
   * @example 401.97948
   */
  fee: number;
  /**
   * @description Block confirmation status
   * @example false
   */
  confirmed: boolean;
  /**
   * @description Confirmations count
   * @example 1
   */
  confirmations: number;
  /**
   * @description Net usage
   * @example 77531
   */
  netUsage: number;
  /**
   * @description Energy usage
   * @example 3016939
   */
  energyUsage: number;
  /**
   * @description Block reward
   * @example 16
   */
  blockReward: number;
  /**
   * @description Vote reward
   * @example 160
   */
  voteReward: number;
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
}

// ----------------------------------------------------------------------------------------------------

export enum TronScanTokenShow {
  OnlyWhitelist = '0',
  All = '1',
  ExcludeBlacklist = '2'
}

export enum TronScanTokenVerifier {
  All = 'all',
  WithoutAuto = ''
}

export enum TronScanSort {
  TimestampDesc = '-timestamp',
  TimestampAsc = '+timestamp',
  BalanceDesc = '-balance',
  BalanceAsc = '+balance'
}

export enum TronScanOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum TronScanTokenFilter {
  All = 'all',
  Trc10 = 'trc10',
  Trc20 = 'trc20',
  Trc721 = 'trc721',
  Trc1155 = 'trc1155',
  Top = 'top'
}

export enum TronScanTokenSort {
  Marketcap = 'marketcap',
  PriceInTrx = 'priceInTrx',
  Gain = 'gain',
  Volume24hInTrx = 'volume24hInTrx',
  HolderCount = 'holderCount'
}

export interface TronScanPaginationOptions {
  /**
   * @description Start number. Default 0
   * @example 0
   */
  start?: number;
  /**
   * @description Number of items per page. Default depends on request type
   * @example 10
   */
  limit?: number;
}

export interface TronScanTimestampOptions {
  /**
   * @description Start time in milliseconds
   * @example 1715518463913
   */
  start_timestamp?: number;
  /**
   * @description End time
   * @example 1715518681609
   */
  end_timestamp?: number;
}

// ----------------------------------------------------------------------------------------------------

interface TronScanRiskInfo {
  /**
   * @description Risk status
   */
  risk: boolean;
}

interface TronScanContractInfo extends TronScanRiskInfo {
  /**
   * @description Is token or not
   * @example true
   */
  isToken: true;
  /**
   * @description Token tag
   * @example 'USDT Token'
   */
  tag1: string;
  /**
   * @description Token homepage
   * @example 'https://tron.network/usdt'
   */
  tag1Url: string;
  /**
   * @description Token name
   * @example 'TetherToken'
   */
  name: string;
  /**
   * @description VIP status
   * @example true
   */
  vip: boolean;
}

interface TronScanTransfersCommonResponse {
  /**
   * @description Tx total count
   * @example 1
   */
  total: number;
  /**
   * @description Range total
   * @example 1
   */
  rangeTotal: number;
  /**
   * @description Whole chain tx count
   * @example 7616229376
   */
  wholeChainTxCount?: number;
  /**
   * @description Key - address, value - is contract or not
   */
  contractMap?: TronScanContractMap;
  /**
   * @description Contract info. Key - address, value - contract info
   */
  contractInfo?: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Time interval
   * @example -1
   */
  timeInterval?: number;
  /**
   * @description Normal address info (key - address, value - risk status object)
   */
  normalAddressInfo?: {
    [key: string]: TronScanRiskInfo;
  };
}

// ----------------------------------------------------------------------------------------------------

interface TronScanContractData {
  /**
   * @description Owner address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  owner_address: string;
  /**
   * @description Amount
   * @example 40000000
   */
  amount?: number;
  /**
   * @description To address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  to_address?: string;
  /**
   * @description Data
   * @example 'a9059cbb00000000000000000000004170cc6193c14df8c49f6fe0b7e2a92af871a36f140000000000000000000000000000000000000000000000000000000002faf080'
   */
  data?: string;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address?: string;

  /**
   * @description Asset name (trc10 token id)
   * @example '1005023'
   */
  asset_name?: string;
  /**
   * @description Token info
   */
  tokenInfo?: TronScanTokenInfo;
}

interface TronScanCost {
  /**
   * @description Net fee
   * @example 0
   */
  net_fee: number;
  /**
   * @description Energy penalty total
   * @example 35245
   */
  energy_penalty_total: number;
  /**
   * @description Energy usage
   * @example 0
   */
  energy_usage: number;
  /**
   * @description Fee
   * @example 27255900
   */
  fee: number;
  /**
   * @description Energy fee
   * @example 27255900
   */
  energy_fee: number;
  /**
   * @description Energy usage total
   * @example 64895
   */
  energy_usage_total: number;
  /**
   * @description Origin energy usage
   * @example 0
   */
  origin_energy_usage: number;
  /**
   * @description Net usage
   * @example 345
   */
  net_usage: number;

  /**
   * @description Net fee cost
   * @example 1000
   */
  net_fee_cost?: number;
  /**
   * @description Date created
   * @example 1717485309
   */
  date_created?: number;
  /**
   * @description Energy fee cost
   * @example 420
   */
  energy_fee_cost?: number;
  /**
   * @description Multi sign fee
   * @example 0
   */
  multi_sign_fee?: number;
  /**
   * @description Memo fee
   * @example 0
   */
  memoFee?: number;
  /**
   * @description Account create fee
   * @example 0
   */
  account_create_fee?: number;
}

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

interface TronScanTokenInfo extends TronScanTokenInfoCommon {
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

interface TronScanTokenBalanceInfo extends TronScanTokenInfoCommon {
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

interface TronScanTriggerInfo {
  /**
   * @description Method
   * @example 'transfer(address _to,uint256 _value)'
   */
  method: string;
  /**
   * @description Data
   * @example 'a9059cbb00000000000000000000004170cc6193c14df8c49f6fe0b7e2a92af871a36f140000000000000000000000000000000000000000000000000000000002faf080'
   */
  data?: string;
  /**
   * @description Parameters
   * @example { _value: '50000000'; _to: 'TLFdXCKeKk8bnr3FQKmFU9aBo2LjQh5SCG'; }
   */
  parameter: { [key: string]: string };
  /**
   * @description Method id
   * @example 'a9059cbb'
   */
  methodId: string;
  /**
   * @description Method name
   * @example 'transfer'
   */
  methodName?: string;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Call value
   * @example 0
   */
  call_value: number;
}

interface TronScanTxCore {
  /**
   * @description Block id
   * @example 59866678
   */
  block: number;
  /**
   * @description Contract return string
   * @example 'SUCCESS'
   */
  contractRet: string;
  /**
   * @description Does the tx confirmed
   * @example true
   */
  confirmed: boolean;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Tx risk status
   * @example false
   */
  riskTransaction: boolean;
}

interface TronScanTxCommon extends TronScanTxCore {
  /**
   * @description Data string
   * @example ''
   */
  data: string;
  /**
   * @description Id
   * @example ''
   */
  id: string;
  /**
   * @description Cheat status
   * @example false
   */
  cheatStatus: boolean;
  /**
   * @description Tx timestamp
   * @example 1710332385000
   */
  timestamp: number;
}

export interface TronScanTxSimple extends TronScanTxCommon {
  /**
   * @description Amount in sun
   * @example 40_000_000
   */
  amount: number;
  /**
   * @description Token name
   * @example '_'
   */
  tokenName: string;
  /**
   * @description Tx hash string
   * @example '6e46100d26498887d23e8184399d899823936269354e6ca760c44870745cf83e'
   */
  transactionHash: string;
  /**
   * @description From address
   * @example 'TUpT7q7C4kJnQpMUTdmCgTi5sm4dKoxy8m'
   */
  transferFromAddress: string;
  /**
   * @description To address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  transferToAddress: string;
}

export interface TronScanTxNative extends TronScanTxCommon {
  /**
   * @description Hash
   * @example '7149fb4f3b19115e21af263dfcea210f89f077d9909f5321ecb9d536f2fa61eb'
   */
  hash: string;
  /**
   * @description Owner address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  ownerAddress: string;
  /**
   * @description To address list
   * @example ['TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t']
   */
  toAddressList: string[];
  /**
   * @description To address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  toAddress: string;
  /**
   * @description Contract type
   * @example 31
   */
  contractType: number;
  /**
   * @description Tx revert status
   * @example false
   */
  revert: boolean;
  /**
   * @description Contract data
   */
  contractData: TronScanContractData;
  /**
   * @description Smart calls
   * @example ''
   */
  SmartCalls: string;
  /**
   * @description Events
   * @example ''
   */
  Events: string;
  /**
   * @description Fee
   * @example ''
   */
  fee: string;
  /**
   * @description Result string
   * @example 'SUCCESS'
   */
  result: string;
  /**
   * @description Amount in sun
   * @example '0'
   */
  amount: string;
  /**
   * @description Tx cost
   */
  cost: TronScanCost;
  /**
   * @description Token type
   * @example 'trc10'
   */
  tokenType: string;
  /**
   * @description Trigger info
   */
  trigger_info?: TronScanTriggerInfo;
}

export interface TronScanTxToken extends TronScanTxCore {
  /**
   * @description Tx id
   * @example 'eeb22aac707cae38a908d324515a5f69a9db4bb00a3523ef5eeff4709b37f338'
   */
  transaction_id: string;
  /**
   * @description Tx status
   * @example 0
   */
  status: number;
  /**
   * @description Block timestamp
   * @example 1710235950000
   */
  block_ts: number;
  /**
   * @description From address
   * @example 'TUpT7q7C4kJnQpMUTdmCgTi5sm4dKoxy8m'
   */
  from_address: string;
  /**
   * @description From address tag
   */
  from_address_tag: {};
  /**
   * @description To address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  to_address: string;
  /**
   * @description To address tag
   */
  to_address_tag: {};
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Token amount
   * @example '50000000'
   */
  quant: string;
  /**
   * @description Final result string
   * @example 'SUCCESS'
   */
  finalResult: string;
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
  /**
   * @description Contract type
   * @example 'trc20'
   */
  contract_type: string;
  /**
   * @description From address is contract status
   * @example false
   */
  fromAddressIsContract: boolean;
  /**
   * @description To address is contract status
   * @example false
   */
  toAddressIsContract: boolean;
}

export interface TronScanAccountShortInfo {
  /**
   * @description Account address
   * @example 'TP5L7DNf36B8coYU852X59yCDaaz2jBWAS'
   */
  address: string;
  /**
   * @description Address tag logo
   * @example ''
   */
  addressTagLogo: string;
  /**
   * @description Account balance in sun
   * @example 43465907950
   */
  balance: number;
  /**
   * @description Account power
   * @example 0
   */
  power: number;
  /**
   * @description Total account transaction count
   * @example 37
   */
  totalTransactionCount: number;
  /**
   * @description Latest operation time
   * @example 1668184674000
   */
  latestOperationTime: number;
  /**
   * @description Update time
   * @example 1668184674000
   */
  updateTime: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountListOptions extends TronScanPaginationOptions {
  sort?: TronScanSort;
}

export interface TronScanAccountListResponse {
  /**
   * @description Account number in all system
   * @example 233_885_735
   */
  account_number: number;
  /**
   * @description Last 24h account change
   * @example 220815
   */
  last_24h_account_change: number;
  /**
   * @description Total
   * @example 10000
   */
  total: number;
  /**
   * @description Account balance info list
   */
  data: TronScanAccountShortInfo[];

  contractMap: TronScanContractMap;
  /**
   * @description Range total
   * @example 233885735
   */
  rangeTotal: number;
  /**
   * @description Contract info
   */
  contractInfo?: {
    [key: string]: TronScanContractInfo;
  };
  normalAddressInfo?: {
    [key: string]: TronScanRiskInfo;
  };
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTransactionsListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Wallet address
   * @example 'TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w'
   */
  address: string;
}

export interface TronScanTransactionsListResponse extends TronScanTransfersCommonResponse {
  data: TronScanTxNative[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrxTrc10TransferListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Address , like contract address
   * @example 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7'
   */
  address: string;
  /**
   * @description Block number
   * @example 0
   */
  block?: number;
}

export interface TronScanTrxTrc10TransfersResponse extends TronScanTransfersCommonResponse {
  /**
   * @description Tx array
   */
  data: TronScanTxSimple[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc20Trc721TransferListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Contract address
   * @example 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT'
   */
  contract_address?: string;
  /**
   * @description Whether to return confirmed transfers only. Default: true
   * @example true
   */
  confirm?: boolean;
  /**
   * @description Account address
   * @example 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT'
   */
  relatedAddress?: string;
}

export interface TronScanTrc20Trc721TransfersResponse extends TronScanTransfersCommonResponse {
  token_transfers: TronScanTxToken[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTokenListOptions extends TronScanPaginationOptions {
  address: string;

  hidden?: number;

  show?: number;

  sortType?: number;

  sortBy?: number;
}

export interface TronScanTokenListResponse extends TronScanTransfersCommonResponse {
  data: TronScanTokenBalanceInfo[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrxTransfersOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  address?: string;
  sort?: TronScanSort;
}

export interface TronScanTrxTransfersResponse extends TronScanTransfersCommonResponse {
  data: TronScanTxSimple[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc10TransfersOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  address?: string;
  tokens?: string;
  sort?: TronScanSort;
  // filterTokenValue=0 +
}

export interface TronScanTrc10TransfersResponse extends TronScanTransfersCommonResponse {
  data: TronScanTxSimple[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc20TransfersOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  relatedAddress?: string;
  contract_address?: string;
  // filterTokenValue=0 +
}

export interface TronScanTrc20TransfersResponse extends TronScanTransfersCommonResponse {
  token_transfers: TronScanTxToken[];
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
  balance: 12744104;
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

export interface TronScanGetVotedListOptions extends TronScanPaginationOptions {
  /**
   * @description Account address to be used when querying the voter list of a SR
   * @example 'TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF'
   */
  candidate?: string;
  /**
   * @description Account address to be used when querying the voted list of a voter
   * @example 'TRzQrtxrEJbSbQNwAsgAHkBMxTX47yNmjo'
   */
  voter?: string;
}

export interface TronScanVoteInfo {
  /**
   * @description Vote timestamp
   * @example '2024-08-17T00:04:07.000+0000'
   */
  timestamp: string;
  /**
   * @description Voter address
   * @example 'TRzQrtxrEJbSbQNwAsgAHkBMxTX47yNmjo'
   */
  voterAddress: string;
  /**
   * @description Candidate address
   * @example 'TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF'
   */
  candidateAddress: string;
  /**
   * @description Votes
   * @example 400000000
   */
  votes: number;
  /**
   * @description Candidate url
   * @example 'http://cryptochain.network'
   */
  candidateUrl: string;
  /**
   * @description Candidate name
   * @example 'CryptoChain'
   */
  candidateName: string;
  /**
   * @description Candidate total votes
   * @example 1327388132
   */
  candidateTotalVotes: number;
  /**
   * @description Voter available votes
   * @example 0
   */
  voterAvailableVotes: number;
}

export interface TronScanVotedListResponse {
  /**
   * @description Total
   * @example 5206
   */
  total: number;
  /**
   * @description Total votes
   * @example 1327388132
   */
  totalVotes: number;
  /**
   * Votes info list
   */
  data: TronScanVoteInfo[];
}

// ----------------------------------------------------------------------------------------------------

export enum TronScanResourceType {
  BandwidthAndEnergy = 0,
  Bandwidth = 1,
  Energy = 2
}

export enum TronScanStakeType {
  FreezeToYourself = 1,
  FreezeToOthers = 2,
  FreezeToYourselfByOthers = 3
}

interface TronScanResourceInfoCommon {
  /**
   * @description Receiver address
   * @example 'TWSRE85rP7FydZKjHmmZgCYF5Dbw8AB91J'
   */
  receiverAddress: string;
  /**
   * @description Expire time
   * @example 1687418520000
   */
  expireTime: number;
  /**
   * @description Owner address
   * @example 'TKNAHSPfXULFvhYz5YdYcXYitE9xhSkbyY'
   */
  ownerAddress: string;
}

export interface TronScanGetAccountResourcesListOptions extends TronScanPaginationOptions {
  /**
   * @description Account address
   * @example 'TWSRE85rP7FydZKjHmmZgCYF5Dbw8AB91J'
   */
  address: string;
  /**
   * @description Resource type:
   * * 0: return the data of Bandwidth and Energy;
   * * 1: return only the data of Bandwidth;
   * * 2: return only the data of Energy.
   */
  resourceType?: TronScanResourceType;
  /**
   * @description Stake type:
   * * 1-Freeze for yourself;
   * * 2-Freeze for others;
   */
  type?: TronScanStakeType;
}

export interface TronScanResourceInfo extends TronScanResourceInfoCommon {
  /**
   * @description Hash
   * @example '0f62535aac5a4481ae2551b68615ad6f59b94cf7789409c5b0e9554012cf784c'
   */
  hash: string;
  /**
   * @description Block
   * @example 43780046
   */
  block: number;
  /**
   * @description Timestamp
   * @example 1661918766000
   */
  timestamp: number;
  /**
   * @description Resource
   * @example 'ENERGY'
   */
  resource: string;
  /**
   * @description Frozen balance
   * @example 10000000
   */
  frozenBalance: number;
  /**
   * @description Resource value
   * @example '103.794414'
   */
  resourceValue: string;
}

export interface TronScanAccountResourcesListResponse {
  /**
   * @description Total
   * @example 1
   */
  total: number;
  /**
   * @description Range total
   * @example 1
   */
  rangeTotal: number;
  /**
   * @description Resources list
   */
  data: TronScanResourceInfo[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountResourcesStake2ListOptions extends TronScanGetAccountResourcesListOptions {}

export interface TronScanResourceInfoStake2 extends TronScanResourceInfoCommon {
  /**
   * @description Balance
   * @example 2000000
   */
  balance: number;
  /**
   * @description Resource type
   * @example 1
   */
  resource: number;
  /**
   * @description Lock balance
   * @example 0
   */
  lockBalance: number;
  /**
   * @description Lock resource value
   * @example 0
   */
  lockResourceValue: number;
  /**
   * @description Resource value
   * @example 20.76
   */
  resourceValue: number;
  /**
   * @description Operation time
   * @example 1687159323000
   */
  operationTime: number;
}

export interface TronScanAccountResourcesStake2ListResponse {
  total: number;
  rangeTotal: number;
  contractMap: TronScanContractMap;
  contractInfo: {
    [key: string]: TronScanContractInfo;
  };
  normalAddressInfo: {
    [key: string]: TronScanRiskInfo;
  };
  data: TronScanResourceInfoStake2[];
}

// ----------------------------------------------------------------------------------------------------

export enum TronScanAggregationType {
  Project = 'project',
  Token = 'token'
}

export enum TronScanTransferType {
  Mobile = 'mobile'
}

export interface TronScanGetApprovalListOptions extends TronScanPaginationOptions {
  /**
   * @description Address
   * @example 'TRX6Q82wMqWNbCCiLqejbZe43wk1h1zJHm'
   */
  address: string;
  /**
   * @description Aggregation type. By **project** or **token**
   * @example 'project'
   */
  type?: TronScanAggregationType;
  /**
   * @description Used when requesting mobile data, transfer=mobile
   * @example 'mobile'
   */
  transfer?: TronScanTransferType;
  /**
   * @description Used when requesting mobile data, the parameter specifies the associated ID, which works together with the type parameter.
   * When type=project, the field value indicates the specified project_id.
   * When type=token, the field value indicates the specified token_id.
   */
  relatedId?: string;
}

export interface TronScanApprovalListResponse {
  total: number;
  data: any[];
  contractMap: TronScanContractMap;
  rangeTotal: number;
  contractInfo: {
    [key: string]: TronScanContractInfo;
  };
  normalAddressInfo: {
    [key: string]: TronScanRiskInfo;
  };
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetBlocksListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Super representative address
   */
  producer?: string;
}

export interface TronScanBlockListResponse extends TronScanTransfersCommonResponse {
  data: TronScanBlockSimple[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTxDetailByHashOptions {
  /**
   * @description Transaction hash
   * @example '3194a00c5cf427a931b908453588b2ca3f661dafa3860b76a6362d08b3b08583'
   */
  hash: string;
}

export interface TronScanTxDetailByHashResponse {
  /**
   * @description Contract return string (TronScanTxCore)
   * @example 'SUCCESS'
   */
  contractRet: string;
  /**
   * @description Data string
   * @example ''
   */
  data: string;
  /**
   * @description Contract type
   * @example 1
   */
  contractType: number;
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
  /**
   * @description Tx confirmations count
   * @example 1
   */
  confirmations: number;
  /**
   * @description Trigger info
   */
  trigger_info?: TronScanTriggerInfo;
  /**
   * @description To address
   * @example 'THW4LBiJuwPZ1E4LakyhKLUPP1mMTxqigZ'
   */
  toAddress: string;
  /**
   * @description Owner address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  ownerAddress: string;
  /**
   * @description Tx timestamp
   * @example 1710332385000
   */
  timestamp: number;
  /**
   * @description Tx risk status
   * @example false
   */
  riskTransaction: boolean;
  /**
   * @description Block id
   * @example 59866678
   */
  block: number;
  /**
   * @description Hash
   * @example '7149fb4f3b19115e21af263dfcea210f89f077d9909f5321ecb9d536f2fa61eb'
   */
  hash: string;
  /**
   * @description Contract data
   */
  contractData: TronScanContractData;
  /**
   * @description Does the tx confirmed
   * @example true
   */
  confirmed: boolean;

  /**
   * @description Contract map
   */
  contract_map: TronScanContractMap;
  /**
   * @description Contract info
   */
  contractInfo?: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Cheat status
   * @example 0
   */
  cheat_status: number;
  /**
   * @description Some info ???
   * @example {}
   */
  info: {};
  /**
   * @description Normal address info
   */
  normalAddressInfo?: {
    [key: string]: TronScanRiskInfo;
  };
  /**
   * @description Tx cost
   */
  cost: TronScanCost;
  /**
   * @description Not level
   * @example 1
   */
  noteLevel: number;
  /**
   * @description Address tag
   */
  addressTag: TronScanAddressTag;
  /**
   * @description ???
   * @example []
   */
  signature_addresses: any[];
  /**
   * @description Confirm node list
   */
  srConfirmList: TronScanConfirmNodeItem[];
  /**
   * @description Internal txs ???
   * @example {}
   */
  internal_transactions: {};

  /**
   * @description Event count
   * @example 1
   */
  event_count?: number;
  /**
   * @description Project name
   * @example ''
   */
  project?: string;
  /**
   * @description Transfers info array
   */
  trc20TransferInfo?: TronScanTrc20TransferInfo[];
  /**
   * @description Transfers all list
   */
  transfersAllList?: TronScanTrc20TransferInfo[];
  /**
   * @description Trigger contract type
   * @example 500
   */
  triggerContractType?: number;
  /**
   * @description Fee limit
   * @example 50000000
   */
  fee_limit?: number;
  /**
   * @description Token transfer info
   */
  tokenTransferInfo?: TronScanTrc20TransferInfo;
  /**
   * @description Contract type
   * @example 'trc20'
   */
  contract_type?: string;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanCheckAccountSecurityOptions {
  /**
   * @description Account address
   * @example 'TT2T17KZhoDu47i2E4FWxfG79zdkEWkU9N'
   */
  address: string;
}

export interface TronScanCheckAccountSecurityResponse {
  /**
   * @description Account sent advertising frequently or not
   * @example false
   */
  send_ad_by_memo: boolean;
  /**
   * @description Account has fraud transactions or not
   * @example false
   */
  has_fraud_transaction: boolean;
  /**
   * @description Account is the creator of fraud tokens or not
   * @example false
   */
  fraud_token_creator: boolean;
  /**
   * @description Account is in black list of stable coin
   * @example false
   */
  is_black_list: boolean;
}

// ----------------------------------------------------------------------------------------------------

export enum BlackListType {
  NotRecognized = 0,
  HasBlackList = 1,
  DoNotHaveBlacklist = 2
}

export enum IncreaseTotalSupply {
  NotRecognized = 0,
  IncreaseAllowed = 1,
  IncreaseNotAllowed = 2
}

export enum TokenLevel {
  Unknown = '0',
  Neutral = '1',
  Ok = '2',
  Suspicious = '3',
  Unsafe = '4'
}

export interface TronScanCheckTokenSecurityOptions {
  /**
   * @description Token ID for TRC10 or token address for TRC20/TRC721/TRC1155
   * @example 'TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn'
   */
  address: string;
}

export interface TronScanCheckTokenSecurityResponse {
  /**
   * @description Token is issued by a well-known institution or not（it is in vip token list or not）
   * @example true
   */
  is_vip: boolean;
  /**
   * @description token's contract has blacklist or not:
   * * 0-not recognized;
   * * 1-has black list;
   * * 2-do not have backlist.
   * @example 2
   */
  black_list_type: BlackListType;
  /**
   * @description Can increase token's total supply:
   * * 0-not recognized;
   * * 1-increase allowed;
   * * 2-increase not allowed.
   * @example 1
   */
  increase_total_supply: IncreaseTotalSupply;
  /**
   * @description Token level:
   * * 0-Unknown;
   * 1-Neutral;
   * 2-Ok;
   * 3-Suspicious;
   * 4-Unsafe.
   * @example '2'
   */
  token_level: TokenLevel;
  /**
   * @description Name or symbol contains url or not
   * @example false
   */
  has_url: boolean;
  /**
   * @description Is token on sun.io
   * @example true
   */
  swap_token: boolean;
  /**
   * @description Token liquidity，unit is dollar
   * @example '3329110.837197'
   */
  sun_liquidity: string;
  /**
   * @description Token's contract is open source or not
   * @example false
   */
  open_source: boolean;
  /**
   * @description Token's contract has proxy contract or not
   * @example false
   */
  is_proxy: boolean;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanCheckUrlSecurityOptions {
  /**
   * @description Target url
   * @example 'www.google.com.hk'
   */
  url: string;
}

export interface TronScanCheckUrlSecurityResponse {
  /**
   * @description Whether it is a risk URL
   * @example false
   */
  cheat_url: boolean;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanCheckTxsSecurityOptions {
  /**
   * @description Transaction hashes, separated with commas
   * @example '573fbca36c91193ef2385ff34ab96264f5ce84dd1a8aeef50e21cf46d9178945,fc72dedf9de595db345664a84cb5b9b07017c75989ec71bd0cc45da44bbd2e1a'
   */
  hashes: string;
}

export interface TronScanCheckTxsSecurityResponse {
  [key: string]: {
    /**
     * @description Whether it is a risk token
     * @example false
     */
    riskToken: boolean;
    /**
     * @description Whether the transfer amount is 0
     * @example false
     */
    zeroTransfer: boolean;
    /**
     * @description Whether it is a risk address
     * @example false
     */
    riskAddress: boolean;
    /**
     * @description Whether it is an attack from an address with the same ending characters as that of the user's address
     * @example true
     */
    sameTailAttach: boolean;
    /**
     * @description Whether it is a risk transaction
     * @example true
     */
    riskTransaction: boolean;
  };
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanCheckMultiSignSecurityOptions {
  /**
   * @description Account address
   * @example 'THSiB9MT2sCnAUgnYs9euMCY9aiZCD4HB5'
   */
  address: string;
}

export interface TronScanCheckMultiSignSecurityResponse {
  /**
   * @description Account, which owner permissions are granted
   * @example ['TKNAHSPfXULFvhYz5YdYcXYitE9xhSkbyY']
   */
  multiSignOwnerPermissionAddress: string[];
  /**
   * @description Account, which active permissions are granted
   * @example ['TKNAHSPfXULFvhYz5YdYcXYitE9xhSkbyY']
   */
  multiSignActivePermissionAddress: string[];
  /**
   * @description Account multi-sign status
   * @example true
   */
  multiSign: boolean;
  /**
   * @description Owner permission detail
   */
  ownerPermission: TronScanPermission;
  /**
   * @description Active permission detail
   */
  activePermissions: TronScanPermission[];
  /**
   * @description Account, which witness permissions are granted
   * @example []
   */
  multiSignWitnessPermissionAddress: string[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanRiskApprove {
  /**
   * @description Amount
   * @example '1'
   */
  amount: string;
  /**
   * @description Unlimited status
   * @example false
   */
  unlimited: boolean;
  /**
   * @description To address
   * @example 'TKNAHSPfXULFvhYz5YdYcXYitE9xhSkbyY'
   */
  to_address: string;
  /**
   * @description Contract address
   * @example 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf'
   */
  contract_address: string;
  /**
   * @description From address
   * @example 'THSiB9MT2sCnAUgnYs9euMCY9aiZCD4HB5'
   */
  from_address: string;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Project options
   */
  project: {
    /**
     * @description Project id
     * @example 'TKNAHSPfXULFvhYz5YdYcXYitE9xhSkbyY'
     */
    id: string;
  };
  /**
   * @description Project id
   * @example 'TKNAHSPfXULFvhYz5YdYcXYitE9xhSkbyY'
   */
  project_id: string;
  /**
   * @description Project sort
   * @example 2147483647
   */
  project_sort: number;
  /**
   * @description Operate time
   * @example 1689221733000
   */
  operate_time: number;
}

export interface TronScanCheckAccountAuthSecurityOptions {
  /**
   * @description Account address
   * @example 'THSiB9MT2sCnAUgnYs9euMCY9aiZCD4HB5'
   */
  address: string;
}

export interface TronScanCheckAccountAuthSecurityResponse {
  /**
   * @description Number of authorized risk contracts
   * @example 0
   */
  approveRiskContractCount: number;
  /**
   * @description Number of Authorized Items
   * @example 1
   */
  approveProjectCount: number;
  /**
   * @description Number of authorized risk accounts
   * @example 1
   */
  approveRiskAccountCount: number;
  /**
   * @description Risk Authorization List
   * @example []
   */
  riskApprove: TronScanRiskApprove[];
  /**
   * @description Number of Authorized Tokens
   * @example 1
   */
  approveTokenCount: number;
  /**
   * @description Number of Authorized Address
   * @example 1
   */
  approveAddressCount: number;
  /**
   * @description Number of authorized risk addresses(approveRiskContractCount + approveRiskAccountCount)
   * @example 1
   */
  approveRiskAddressCount: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanTokenRiskInfo {
  /**
   * @description Token type
   * @example 'trc20'
   */
  type: string;
  /**
   * @description Contract address
   * @example 'TDH3sxmwyFZUknf2Kgk8sWd5jzo31ocTw3'
   */
  contract: string;
  /**
   * @description Project name
   * @example 'SunSwap'
   */
  project: string;
  /**
   * @description Symbol
   * @example 'S-REEF-TRX'
   */
  symbol: string;
  /**
   * @description Name
   * @example 'SUNSWAP-REEF-TRX'
   */
  name: string;
  /**
   * @description Logo
   * @example ''
   */
  logo: string;
  /**
   * @description Decimals count
   * @example 6
   */
  decimals: number;
  /**
   * @description Reputation
   * @example '1'
   */
  reputation: string;
  /**
   * @description Price info
   * @example ''
   */
  price: string;
  /**
   * @description Total supply
   * @example 0
   */
  'total supply': number;
  /**
   * @description Token holders
   * @example 0
   */
  'token holders': number;
  /**
   * @description Total transfers
   * @example 2
   */
  'total transfers': number;
  /**
   * @description 24h transfers count
   * @example 0
   */
  '24h transfers': number;
  /**
   * @description Occurrences
   * @example 1
   */
  occurrences: number;
  /**
   * @description Aggregators list
   * @example ['TronScan']
   */
  aggregators: string[];
}

export interface TronScanGetAllTokensOptions extends TronScanPaginationOptions {}

export interface TronScanGetAllTokensResponse {
  /**
   * @description Total
   * @example 132922
   */
  total: number;
  /**
   * @description Page size
   * @example 2
   */
  page_size: number;
  /**
   * @description Tokens list
   */
  data: TronScanTokenRiskInfo[];
}

// ----------------------------------------------------------------------------------------------------

export enum TronScanAccountAthTokenType {
  TRC20 = 1,
  TRC721 = 2,
  ALL = 3,
  TRC1155 = 4
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

export enum AnalyticType {
  Balance = 0,
  Transfer = 1,
  EnergyConsumption = 2,
  BandwidthConsumption = 3,
  Transaction = 4
}

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
