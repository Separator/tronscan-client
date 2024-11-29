import { TronScanContractSort } from './params';
import { TronScanPaginationOptions } from './tronscan';

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
  status: {
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
  };
}
