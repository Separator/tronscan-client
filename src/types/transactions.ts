import { TronScanTokenInfo } from './token-info';
import { TronScanDbVersion, TronScanSort, TronScanTxDirection, TronScanTxDirectionSecond } from './params';
import {
  TronScanContractData,
  TronScanContractInfo,
  TronScanContractMap,
  TronScanCost,
  TronScanPaginationOptions,
  TronScanRiskInfo,
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

export interface TronScanTxTokenCommon {
  /**
   * @description Tx id
   * @example 'eeb22aac707cae38a908d324515a5f69a9db4bb00a3523ef5eeff4709b37f338'
   */
  transaction_id: string;
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
  from_address_tag: {
    /**
     * @description From address tag
     * @example ''
     */
    from_address_tag?: string;
    /**
     * @description From address tag logo
     * @example ''
     */
    from_address_tag_logo?: string;
  };
  /**
   * @description To address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  to_address: string;
  /**
   * @description To address tag
   */
  to_address_tag: {
    /**
     * @description To address tag
     * @example ''
     */
    to_address_tag?: string;
    /**
     * @description To address tag logo
     * @example ''
     */
    to_address_tag_logo?: string;
  };
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
   * @description Contract type
   * @example 'trc20'
   */
  contract_type: string;
  /**
   * @description Final result string
   * @example 'SUCCESS'
   */
  finalResult: string;
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
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
}

export interface TronScanTxToken extends TronScanTxCore, TronScanTxTokenCommon {
  /**
   * @description Tx status
   * @example 0
   */
  status: number;
}

export interface TronScanTokenTxItem extends TronScanTxTokenCommon {
  /**
   * @description Trigger info
   */
  trigger_info: TronScanTriggerInfo;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Block
   * @example 52002410
   */
  block: number;
  /**
   * @description Approval amount
   * @example '0'
   */
  approval_amount: string;
  /**
   * @description Event type
   * @example 'Transfer'
   */
  event_type: string;
  /**
   * @description token id
   * @example '8027030016865780586704000000'
   */
  token_id: string;
  /**
   * @description Confirmed
   * @example true
   */
  confirmed: boolean;
  /**
   * @description Contract returns
   * @example 'SUCCESS'
   */
  contractRet: string;
}

export interface TronScanTokenListItem {
  /**
   * @description Token id
   * @example '_'
   */
  token_id: string;
  /**
   * @description Call value
   * @example 0
   */
  call_value: number;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
}

export interface TronScanInternalTxListForAddressOrBlockItem {
  /**
   * @description From address
   * @example 'TYN6Wh11maRfzgG7n5B6nM5VW1jfGs9chu'
   */
  from: string;
  /**
   * @description To address
   * @example 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7'
   */
  to: string;
  /**
   * @description Block number
   * @example 67524129
   */
  block: number;
  /**
   * @description Hash
   * @example '0d32414258401404bc2a5b3e0ecda5585ece18df90ce7327df421d4b9e44e6d5'
   */
  hash: string;
  /**
   * @description Internal hash
   * @example 'cb797e781c8cd31fd613e7d90876867bb857862b2092d34a9af58d16a95adb18'
   */
  internal_hash: string;
  /**
   * @description Timestamp
   * @example 1733222589000
   */
  timestamp: number;
  /**
   * @description Rejected
   * @example false
   */
  rejected: boolean;
  /**
   * @description Confirmed
   * @example false
   */
  confirmed: boolean;
  /**
   * @description Result
   * @example 'FAIL'
   */
  result: string;
  /**
   * @description Revert
   * @example false
   */
  revert: boolean;
  /**
   * @description Note
   * @example 'call'
   */
  note: string;
  /**
   * @description Token list
   */
  token_list: TronScanTokenListItem;
  /**
   * @description Value info list
   */
  valueInfoList: TronScanTokenListItem[];
  /**
   * @description Token id
   * @example '_'
   */
  token_id: string;
  /**
   * @description Call value
   * @example 0
   */
  call_value: number;
  /**
   * @description Vote detail
   */
  voteDetail: any[];
  /**
   * @description Vote to address
   */
  voteToAddress: any[];
  /**
   * @description Vote count
   * @example 0
   */
  voteCount: number;
}

export interface TronScanAccountTransactionDataItem {
  /**
   * @description Amount
   * @example '15528415451787870000000000'
   */
  amount: string;
  /**
   * @description Status
   * @example 0
   */
  status: number;
  /**
   * @description Approval amount
   * @example '0'
   */
  approval_amount: string;
  /**
   * @description Block timestamp
   * @example 1697615424000
   */
  block_timestamp: number;
  /**
   * @description Block
   * @example 55661322
   */
  block: number;
  /**
   * @description From
   * @example 'TV6MuMXfmLbBqPZvBHdwFsDnQeVfnmiuSi'
   */
  from: string;
  /**
   * @description To
   * @example 'TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb'
   */
  to: string;
  /**
   * @description Hash
   * @example '38c8436fca621dddb12a0f156ac3385eecabf82bf39118fb6bc8c4783333ed88'
   */
  hash: string;
  /**
   * @description Contract address
   * @example 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4'
   */
  contract_address: string;
  /**
   * @description Confirmed
   * @example 1
   */
  confirmed: number;
  /**
   * @description Contract type
   * @example 'TriggerSmartContract'
   */
  contract_type: string;
  /**
   * @description Contract type
   * @example 31
   */
  contractType: number;
  /**
   * @description Revert
   * @example 0
   */
  revert: number;
  /**
   * @description Contract ret
   * @example 'SUCCESS'
   */
  contract_ret: string;
  /**
   * @description Final result
   * @example 'SUCCESS'
   */
  final_result: string;
  /**
   * @description Event type
   * @example 'Transfer'
   */
  event_type: string;
  /**
   * @description Issue address
   * @example 'TRX6Q82wMqWNbCCiLqejbZe43wk1h1zJHm'
   */
  issue_address: string;
  /**
   * @description Decimals
   * @example 18
   */
  decimals: number;
  /**
   * @description Token name
   * @example 'TrueUSD'
   */
  token_name: string;
  /**
   * @description Id
   * @example 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4'
   */
  id: string;
  /**
   * @description Direction
   * @example 1
   */
  direction: number;
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

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc1155TransferListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Account address. When the parameter is specified, TRC1155 transfers of the specified address are returned
   */
  relatedAddress?: string;
  /**
   * @description Download format. If format = **csv**, the transfer data can be downloaded
   */
  format?: string;
  /**
   * @description Block number
   */
  block?: number;
  /**
   * @description Filter transfers by status.
     - 0 - return confirmed transfers only;
     - 1 - return unconfirmed transfers only;
     - 0,1 - return all transfers.
   */
  confirm?: string;
  /**
   * @description 
      - **in**: transfer-in; 
      - **out**: transfer-out; 
      - **all**: transfer-in + transfer-out transactions.
   */
  direction?: TronScanTxDirection;
  /**
   * @description Contract address
   */
  contract_address?: string;

  // filterTokenValue=0 +
}

export interface TronScanGetTrc1155TransferListResponse {
  /**
   * @description Total
   * @example 366
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
   * @example 366
   */
  rangeTotal: number;
  /**
   * @description Token transfers list
   */
  token_transfers: TronScanTokenTxItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetInternalTxListForAddressOrBlockOptions extends TronScanPaginationOptions {
  /**
   * @description Specific address. At least one of the address, block, and contract parameters must be specified
   * @example 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7'
   */
  address: string;
  /**
   * @description Contract address
   */
  contract?: string;
  /**
   * @description Block number
   */
  block?: number;
}

export interface TronScanGetInternalTxListForAddressOrBlockResponse {
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
   * @description Data list
   */
  data: TronScanInternalTxListForAddressOrBlockItem[];
  /**
   * @description Contract info
   */
  contractInfo: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Range total
   * @example 11498837
   */
  rangeTotal: number;
  /**
   * @description Normal address info
   */
  normalAddressInfo: {
    [key: string]: TronScanRiskInfo;
  };
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountTransactionDataOptions extends TronScanPaginationOptions {
  /**
   * @description TRC20 token address
   * @example 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4'
   */
  trc20Id: string;
  /**
   * @description Address
   * @example 'TV6MuMXfmLbBqPZvBHdwFsDnQeVfnmiuSi'
   */
  address: string;
  /**
   * @description Tx direction.  
   *  - **0**: all. 
      - **1**: transfer-out. 
      - **2**: transfer-in
   */
  direction?: TronScanTxDirectionSecond;
  /**
   * @description Whether to include approval transfers. 
      - **1**: include. 
      - **0**: exclude
   */
  db_version?: TronScanDbVersion;
  /**
   * @description Sort by creation time. Valid values: **true** / **false**
   */
  reverse?: boolean;
}

export interface TronScanGetAccountTransactionDataResponse {
  /**
   * @description Contract map
   */
  contractMap: TronScanContractMap;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Page size
   * @example 1
   */
  page_size: number;
  /**
   * @description Code
   * @example 200
   */
  code: number;
  /**
   * @description Data list
   */
  data: TronScanAccountTransactionDataItem[];
}

// ----------------------------------------------------------------------------------------------------
