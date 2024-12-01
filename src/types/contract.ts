import { TronScanContractSort } from './params';
import { TronScanTokenInfo } from './token-info';
import { TronScanContractInfo, TronScanContractMap, TronScanPaginationOptions } from './tronscan';

export interface TronScanContractInfoStatus {
  /**
   * @description Status code
   * @example 0
   */
  code: number;
  /**
   * @description Status message
   * @example 'SUCCESS'
   */
  message: string;
}

export interface TronScanTopContractInfo {
  /**
   * @description Contract tag
   * @example 'USDT Token'
   */
  tag1: string;
  /**
   * @description Tag url
   * @example 'https://tron.network/usdt'
   */
  tag1Url: string;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract: string;
  /**
   * @description Percentage
   * @example 0.974989808098288
   */
  percentage: number;
  /**
   * @description Contract name
   * @example 'TetherToken'
   */
  name: string;
  /**
   * @description Risk
   * @example false
   */
  risk: boolean;
  /**
   * @description Triggers
   * @example 2520725
   */
  triggers: number;
  /**
   * @description Public tag desc
   * @example ''
   */
  publicTagDesc: string;
}

export interface TronScanContractTrc20Info {
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
   * @example '61759992182314303'
   */
  total_supply: string;
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
   * @description Issue addr
   * @example 'THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC'
   */
  issuer_addr: string;
  /**
   * @description Home page
   * @example 'https://tron.network/usdt'
   */
  home_page: string;
  /**
   * @description Token desc
   * @example 'USDT is the official stablecoin issued by Tether on the TRON network.'
   */
  token_desc: string;
  /**
   * @description Holders count
   * @example '57070722'
   */
  holders_count: string;
  /**
   * @description Link to github
   * @example ''
   */
  git_hub: string;
  /**
   * @description Decimals count
   * @example '6'
   */
  decimals: string;
  /**
   * @description Name
   * @example 'Tether USD'
   */
  name: string;
  /**
   * @description Issue time
   * @example '2019-04-16 12:41:20'
   */
  issue_time: string;
  /**
   * @description White paper
   * @example 'https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf'
   */
  white_paper: string;
  /**
   * @description Email
   * @example ''
   */
  email: string;
  /**
   * @description Social media list json
   * @example '[{"method":"Facebook","link":""},{"method":"Twitter","link":"https://twitter.com/Tether_to"},{"method":"Telegram","link":""},{"method":"Reddit","link":""},{"method":"Steem","link":""},{"method":"Medium","link":""},{"method":"Linkedin","link":""},{"method":"Wechat","link":""},{"method":"Weibo","link":""}]'
   */
  social_media: string;
  /**
   * @description Status
   * @example '1'
   */
  status: string;
  /**
   * @description Token type
   * @example 'trc20'
   */
  token_type: string;
}

export interface TronScanContractListItem {
  /**
   * @description Contract address
   * @example 'TK5qKN9xJoLfCzZPG6Mj642WQtvbiHCTMx'
   */
  address: string;
  /**
   * @description Contract name
   * @example ''
   */
  name: string;
  /**
   * @description Contract verify status
   * @example 0
   */
  verify_status: number;
  /**
   * @description Contract balance
   * @example 1703724
   */
  balance: number;
  /**
   * @description Contract trx count
   * @example 136419999
   */
  trxCount: number;
  /**
   * @description Contract creation date
   * @example 1562839428000
   */
  date_created: number;
  /**
   * @description Contract license
   * @example ''
   */
  license: string;
  /**
   * @description Contract compile version
   * @example ''
   */
  compile_version: string;
  /**
   * @description Contract compile settings
   * @example ''
   */
  compile_settings: string;
  /**
   * @description Contract verify time
   * @example 0
   */
  verify_time: number;
  /**
   * @description Contract tag url
   * @example ''
   */
  tag1Url: string;
  /**
   * @description Risk
   * @example false
   */
  risk: boolean;
  /**
   * @description Contract tag
   * @example ''
   */
  tag1: string;
  /**
   * @description Public tag desc
   * @example ''
   */
  publicTagDesc: string;
  /**
   * @description Contract vip status
   * @example false
   */
  vip: boolean;
  /**
   * @description Contract trc20 info
   */
  trc20token?: TronScanContractTrc20Info;
}

export interface TronScanContractInfoCreator {
  /**
   * @description Address
   * @example 'TRX6Q82wMqWNbCCiLqejbZe43wk1h1zJHm'
   */
  address: string;
  /**
   * @description Address is contract
   * @example false
   */
  address_is_contract: boolean;
  /**
   * @description Tx hash
   * @example '1836ff59e1f9c46dd1682ede7824d08db922ba10162b7f69feefd76fd83c017f'
   */
  txHash: string;
  /**
   * @description Token balance
   * @example 0
   */
  token_balance: number;
  /**
   * @description Consume user resource percent
   * @example 0
   */
  consume_user_resource_percent: number;
  /**
   * @description Energy remaining
   * @example 0
   */
  energy_remaining: number;
  /**
   * @description Energy limit
   * @example 0
   */
  energy_limit: number;
}

export interface TronScanContractInfoStatusItem {
  /**
   * @description Address
   * @example 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S'
   */
  address: string;
  /**
   * @description Balance
   * @example 24770077347
   */
  balance: number;
  /**
   * @description Verify status
   * @example 2
   */
  verify_status: number;
  /**
   * @description Is proxy status
   * @example false
   */
  is_proxy: boolean;
  /**
   * @description Proxy implementation
   * @example ''
   */
  proxy_implementation: string;
  /**
   * @description Old proxy implementation
   * @example ''
   */
  old_proxy_implementation: string;
  /**
   * @description Balance in usd
   * @example 0
   */
  balanceInUsd: number;
  /**
   * @description Trx count
   * @example 929563
   */
  trxCount: number;
  /**
   * @description Date created
   * @example 1621864512000
   */
  date_created: number;
  /**
   * @description Call value
   * @example 0
   */
  call_value: number;
  /**
   * @description Call token value
   * @example 0
   */
  call_token_value: number;
  /**
   * @description Call token id
   * @example 0
   */
  call_token_id: number;
  /**
   * @description Call token info
   */
  call_token_info: {
    tokenInfo: TronScanTokenInfo;
  };
  /**
   * @description Name
   * @example 'SunToken'
   */
  name: string;
  /**
   * @description Description
   * @example ''
   */
  description: string;
  /**
   * @description Tag
   * @example 'SUN Token'
   */
  tag1: string;
  /**
   * @description Tag url
   * @example 'https://sun.io/'
   */
  tag1Url: string;
  /**
   * @description Vip status
   * @example true
   */
  vip: boolean;
  /**
   * @description Feedback risk
   * @example false
   */
  feedbackRisk: boolean;
  /**
   * @description Announcement
   * @example ''
   */
  announcement: string;
  /**
   * @description License
   * @example '1'
   */
  license: string;
  /**
   * @description Blue tag
   * @example ''
   */
  blueTag: string;
  /**
   * @description Blue tag url
   * @example ''
   */
  blueTagUrl: string;
  /**
   * @description Grey tag
   * @example ''
   */
  greyTag: string;
  /**
   * @description Red tag
   * @example ''
   */
  redTag: string;
  /**
   * @description Public tag
   * @example 'SUN Token'
   */
  publicTag: string;
  /**
   * @description Public tag desc
   * @example ''
   */
  publicTagDesc: string;
  /**
   * @description Creator info
   */
  creator: TronScanContractInfoCreator;
  /**
   * @description Audit report url
   * @example ''
   */
  auditReportUrl: string;
  /**
   * @description Audit dep
   * @example ''
   */
  auditDep: string;
  /**
   * @description Audit date
   * @example ''
   */
  auditDate: string;
  /**
   * @description Method map
   * @example { a9059cbb: 'transfer(address,uint256)' }
   */
  methodMap: {
    [key: string]: string;
  };
  /**
   * @description Energy factor
   * @example 0
   */
  energy_factor: number;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Balance with tokens
   * @example 120330.659523898
   */
  balanceWithTokens: number;
  /**
   * @description Balance with token in usd
   * @example 24620.703615111
   */
  balanceWithTokensInUsd: number;
}

export interface TronScanContractEventListItem {
  /**
   * @description Block number
   * @example 67432802
   */
  block_number: number;
  /**
   * @description Block timestamp
   * @example 1732948485000
   */
  block_timestamp: number;
  /**
   * @description Caller contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  caller_contract_address: string;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Event index
   * @example 0
   */
  event_index: number;
  /**
   * @description Event name
   * @example 'Transfer'
   */
  event_name: string;
  /**
   * @description Result with topic
   */
  result_with_topic: {
    /**
     * @description Index
     */
    index: { param: string; value: string }[];
    /**
     * @description Topic
     * @example 'ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
     */
    topic: string;
    /**
     * @description Data in arr
     */
    dataInArr: { param: string; value: string }[];
  };
  /**
   * @description Result
   */
  result: {
    [key: string]: string;
  };
  /**
   * @description Result type
   */
  result_type: {
    /**
     * @description From
     * @example 'address'
     */
    from: string;
    /**
     * @description To
     * @example 'address'
     */
    to: string;
    /**
     * @description Value
     * @example 'uint256'
     */
    value: string;
  };
  /**
   * @description Event
   * @example 'Transfer(address indexed from, address indexed to, uint256 value)'
   */
  event: string;
  /**
   * @description Tx id
   * @example 'e80602a1f026d190b0c90cbd10feea08aba36c7189e070946a74caedd6662a87'
   */
  transaction_id: string;
}

export interface TronScanContractEventItem {
  /**
   * @description Owner address
   * @example 'TEh2ggBb6bU97odubkYjgYMX5t25yYzEGe'
   */
  owner_address: string;
  /**
   * @description Block
   * @example 67432802
   */
  block: number;
  /**
   * @description Hash
   * @example 'e80602a1f026d190b0c90cbd10feea08aba36c7189e070946a74caedd6662a87'
   */
  hash: string;
  /**
   * @description Date created
   * @example 1732948485000
   */
  date_created: number;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Token id
   * @example 0
   */
  token_id: number;
  /**
   * @description Token value
   * @example 0
   */
  token_value: number;
  /**
   * @description Call value
   * @example 0
   */
  call_value: number;
  /**
   * @description Data
   * @example 'a9059cbb0000000000000000000000411924312f5d44981888849edccb7d03e84a9c7359000000000000000000000000000000000000000000000000000000001d9f9e40'
   */
  data: string;
  /**
   * @description Confirmed status
   * @example false
   */
  confirmed: boolean;
  /**
   * @description Method
   * @example 'transfer(address _to,uint256 _value)'
   */
  method: string;
  /**
   * @description Parameters
   * @example '{"0":"TCG9FXaLB9kc25pxBzruEGv6KS2isJxqRc","1":"497000000","_value":"497000000","_to":"TCG9FXaLB9kc25pxBzruEGv6KS2isJxqRc"}'
   */
  parameter: string;
  /**
   * @description Day
   * @example '2024-11-30'
   */
  day: string;
}

export interface TronScanGetContractEnergyStatisticsItem {
  /**
   * @description Day
   * @example 1732838400000
   */
  day: number;
  /**
   * @description Total energy
   * @example 5970142
   */
  total_energy: number;
  /**
   * @description Energy
   * @example 4260456
   */
  energy: number;
  /**
   * @description 0
   */
  contract_supplied: number;
  /**
   * @description Trx
   * @example 1709686
   */
  trx: number;
}

export interface TronScanContractCallStatisticsTopAddressItem {
  /**
   * @description Address
   * @example 'TDqSquXBgUCLYvYC4XZgrprLK589dkhSCf'
   */
  address: string;
  /**
   * @description Address tag
   * @example 'Binance-Hot 7'
   */
  addressTag?: string;
  /**
   * @description Count
   * @example 1087
   */
  count: number;
}

export interface TronScanContractCallStatisticsTopMethodsItem {
  /**
   * @description Times
   * @example 12416
   */
  times: number;
  /**
   * @description Method id
   * @example 'a9059cbb'
   */
  methodId: string;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetContractsListOptions extends TronScanPaginationOptions {
  /**
   * @description Search by contract name, contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  search?: string;
  /**
   * @description Sort fields. **-trxCount**, **-balance**, **-timestamp**. Default: **-trxCount**
   */
  sort?: TronScanContractSort;
  /**
   * @description Whether to show only open source contracts
   * @example false
   */
  'open-source-only'?: boolean;
  /**
   * @description Whether to show only verified contracts
   * @example false
   */
  'verified-only'?: boolean;
}

export interface TronScanGetContractsListResponse {
  /**
   * @description Total
   * @example 10000
   */
  total: number;
  /**
   * @description Top contracts list
   */
  triggerTop7: TronScanTopContractInfo[];
  /**
   * @description Contracts list
   */
  data: TronScanContractListItem[];
  /**
   * @description Contract count
   * @example 5615168
   */
  contractCount: number;
  /**
   * @description Range total
   * @example 5615168
   */
  rangeTotal: number;
  /**
   * @description Contract count last 24h
   * @example 7056
   */
  contractCount24h: number;
  /**
   * @description Update time
   * @example 1732852800000
   */
  updateTime: number;
  /**
   * @description Total trigger
   * @example 2585386
   */
  totalTrigger: number;
  /**
   * @description Verify contract count
   * @example 127898
   */
  verifyContractCount: number;
  /**
   * @description Verify contract count 24h
   * @example 36
   */
  verifyContractCount24h: number;
  /**
   * @description Status
   */
  status: TronScanContractInfoStatus;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetContractDetailInformationOptions {
  /**
   * @description Contract address
   * @example 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S'
   */
  contract?: string;
}

export interface TronScanGetContractDetailInformationResponse {
  /**
   * @description Type
   * @example 'null'
   */
  type: string;
  /**
   * @description Count
   * @example 0
   */
  count: number;
  /**
   * @description Status
   */
  status: TronScanContractInfoStatus;
  /**
   * @description Data list
   */
  data: TronScanContractInfoStatusItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetContractEventInformationOptions {
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contractAddress: string;
  /**
   * @description Hash list
   * @example []
   */
  hashList?: string[];
  /**
   * @description Limit
   */
  limit?: number;
  /**
   * @description Fields list
   * @example 'hash,method'
   */
  fields?: string;
}

export interface TronScanGetContractEventInformationResponse {
  /**
   * @description Event list items
   */
  event_list: TronScanContractEventListItem[];
  /**
   * @description Event list
   */
  list: TronScanContractEventItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetContractEnergyStatisticsOptions {
  /**
   * @description Contract address
   * @example 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S'
   */
  address?: string;
}

export interface TronScanGetContractEnergyStatisticsResponse {
  /**
   * @description Total
   * @example 1000
   */
  total: number;
  /**
   * @description Total energy
   * @example 6013077583
   */
  totalEnergy: number;
  /**
   * @description Data list
   */
  data: TronScanGetContractEnergyStatisticsItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetContractCallStatisticsOptions {
  /**
   * @description Contract address
   * @example 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S'
   */
  contract_address: string;
}

export interface TronScanGetContractCallStatisticsResponse {
  /**
   * @description Recent call times
   * @example 13240
   */
  recentCallTimes: number;
  /**
   * @description Time long
   * @example 1732924800000
   */
  timeLong: number;
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
   * @description Top address
   */
  topAddress: TronScanContractCallStatisticsTopAddressItem[];
  /**
   * @description Total address
   * @example 3091
   */
  totalAddress: number;
  /**
   * @description Total call times
   * @example 929932
   */
  totalCallTimes: number;
  /**
   * @description Top methods list
   */
  topMethods: TronScanContractCallStatisticsTopMethodsItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetContractUniqueAddressesNumberPerDayOptions {
  /**
   * @description Contract address
   * @example 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S'
   */
  address?: string;
  /**
   * @description Start timestamp
   * @example 1621900800000
   */
  start_timestamp?: number;
  /**
   * @description End timestamp
   * @example 1621987200000
   */
  end_timestamp?: number;
}

export interface TronScanGetContractUniqueAddressesNumberPerDayResponse {
  /**
   * @description Total
   * @example 2
   */
  total: number;
  /**
   * @description Total caller amount
   * @example 143
   */
  totalCallerAmount: number;
  /**
   * @description Data list
   */
  data: { amount: number; day: number }[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetContractCallsNumberPerDayOptions {
  /**
   * @description Contract address
   * @example 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S'
   */
  address: string;
  /**
   * @description Start time, accurate to seconds (in milliseconds)
   * @example 1621900800000
   */
  start_timestamp?: number;
  /**
   * @description End time, accurate to seconds (in milliseconds)
   * @example 1621987200000
   */
  end_timestamp?: number;
}

export interface TronScanGetContractCallsNumberPerDayResponse {
  /**
   * @description Total
   * @example 2
   */
  total: number;
  /**
   * @description Total amount
   * @example 166
   */
  totalAmount: number;
  /**
   * @description Data list
   */
  data: { amount: number; day: number }[];
}
