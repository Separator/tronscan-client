import { TronScanContractSort } from './params';
import { TronScanTokenInfo } from './token-info';
import { TronScanPaginationOptions } from './tronscan';

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
