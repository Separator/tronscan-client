import { TronScanTokenInfo } from './token-info';
import { BlackListType, IncreaseTotalSupply, TokenLevel } from './params';
import { TronScanPaginationOptions, TronScanPermission } from './tronscan';

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
