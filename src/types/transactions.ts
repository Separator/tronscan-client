import { TronScanSort } from './params';
import { TronScanTokenInfo } from './token-info';
import {
  TronScanContractData,
  TronScanCost,
  TronScanPaginationOptions,
  TronScanTimestampOptions,
  TronScanTransfersCommonResponse,
  TronScanTriggerInfo
} from './tronscan';

/**
 * Tx info types
 */

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
