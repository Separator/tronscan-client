import { TronScanTokenInfo } from './token-info';
import { TronScanAssetType, TronScanTxDirectionThird } from './params';
import { TronScanContractMap, TronScanPaginationOptions, TronScanTimestampOptions } from './tronscan';

interface TronScanWalletTxCommon {
  /**
   * @description Amount
   * @example '40'
   */
  amount: string;
  /**
   * @description Block timestamp
   * @example 1670818821000
   */
  block_timestamp: number;
  /**
   * @description Block
   * @example 46743525
   */
  block: number;
  /**
   * @description From address
   * @example 'TSTVYwFDp7SBfZk7Hrz3tucwQVASyJdwC7'
   */
  from: string;
  /**
   * @description To address
   * @example 'TGXD5vRuCng2k8Ei51u4fmLxYzAUcJngGP'
   */
  to: string;
  /**
   * @description Tx hash
   * @example 'eb62c9a87f3be46a883459b30b58fc940dba485c44981a2cfeb5f5d7d2702745'
   */
  hash: string;
  /**
   * @description Confirmed status
   * @example 1
   */
  confirmed: number;
  /**
   * @description Contract type
   * @example 'TransferContract'
   */
  contract_type: string;
  /**
   * @description Contract type
   * @example 1
   */
  contractType: number;
  /**
   * @description Revert
   * @example 0
   */
  revert: 0;
  /**
   * @description Contract returns
   * @example 'SUCCESS'
   */
  contract_ret: string;
  /**
   * @description Issue address
   * @example ''
   */
  issue_address: string;
  /**
   * @description Decimals
   * @example 6
   */
  decimals: number;
  /**
   * @description Token name
   * @example ''
   */
  token_name: string;
  /**
   * @description Direction
   * @example 1
   */
  direction: number;
}

interface TronScanGetWalletTrxTransfersListItem extends TronScanWalletTxCommon {
  /**
   * @description Cheat status
   * @example false
   */
  cheatStatus: boolean;
  /**
   * @description Symbol
   * @example ''
   */
  symbol: string;
}

interface TronScanGetWalletTrc10TransfersListItem extends TronScanWalletTxCommon {
  /**
   * @description Id
   * @example 1002000
   */
  id: number;
  /**
   * @description Symbol
   * @example ''
   */
  symbol: string;
}

interface TronScanGetWalletTrc20TransfersListItem extends TronScanWalletTxCommon {
  /**
   * @description Tx status
   * @example 0
   */
  status: number;
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
   * @description Token id
   * @example 'TCmSR8UYWvsZkZmprGKaudTuWUZ62ycnnN'
   */
  id: string;
}

interface TronScanGetWalletTxOptionsCommon {
  /**
   * @description Query address
   * @example 'TSTVYwFDp7SBfZk7Hrz3tucwQVASyJdwC7'
   */
  address: string;
  /**
   * @description Default: 1
   *  - **1** - represents inbound transfers;
   *  - **2** - represents outbound transfers;
   *  - **0** - represents both.
   */
  direction?: TronScanTxDirectionThird;
  /**
   * @description Default: 0, which indicates to filter transfers with invalid “to” or “from” addresses out.
   * @example 1
   */
  db_version?: number;
  /**
   * @description Sort the data in a descending order.
   * Default: true
   * @example true
   */
  reverse?: boolean;
}

interface TronScanGetWalletTxResponseCommon {
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
   * @example 2
   */
  page_size: number;
  /**
   * @description Code
   * @example 200
   */
  code: number;
}

interface TronScanWalletTokensInformationItem {
  /**
   * @description Tron price in usd
   * @example '0.243201'
   */
  token_price_in_usd: string;
  /**
   * @description Frozen token value in usd
   * @example '0'
   */
  frozen_token_value_in_usd: string;
  /**
   * @description Token level
   * @example 2
   */
  level: number;
  /**
   * @description Frozen value
   * @example 0
   */
  frozen: number;
  /**
   * @description Token value
   * @example '0.000000'
   */
  token_value: string;
  /**
   * @description Token type
   * @example 0
   */
  token_type: number;
  /**
   * @description Token price
   * @example '1'
   */
  token_price: string;
  /**
   * @description Token decimal
   * @example 6
   */
  token_decimal: number;
  /**
   * @description Token value in usd
   * @example '0'
   */
  token_value_in_usd: string;
  /**
   * @description Frozen v2
   * @example 0
   */
  frozenV2: number;
  /**
   * @description Token id
   * @example '_'
   */
  token_id: string;
  /**
   * @description Token abbreviation
   * @example 'trx'
   */
  token_abbr: string;
  /**
   * @description Token balance
   * @example '0.000000'
   */
  balance: string;
  /**
   * @description Frozen v2 token value in usd
   * @example '0'
   */
  frozenV2_token_value_in_usd: string;
  /**
   * @description Token name
   * @example 'trx'
   */
  token_name: string;
  /**
   * @description Pair id
   * @example 48
   */
  pair_id: number;
  /**
   * @description VIP status
   * @example false
   */
  vip: boolean;
  /**
   * @description Token url
   * @example 'https://static.tronscan.org/production/logo/trx.png'
   */
  token_url: string;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetWalletTrxTransfersListOptions
  extends TronScanPaginationOptions,
    TronScanTimestampOptions,
    TronScanGetWalletTxOptionsCommon {
  /**
   * @description Whether to return data of TRX burning for resource consumption.
   * Default: false
   */
  fee?: boolean;
}

export interface TronScanGetWalletTrxTransfersListResponse extends TronScanGetWalletTxResponseCommon {
  /**
   * @description Txs list
   */
  data: TronScanGetWalletTrxTransfersListItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetWalletTrc10TransfersListOptions
  extends TronScanPaginationOptions,
    TronScanTimestampOptions,
    TronScanGetWalletTxOptionsCommon {
  /**
   * @description TRC10 token ID
   * @example '1002000'
   */
  trc10Id: string;
}

export interface TronScanGetWalletTrc10TransfersListResponse extends TronScanGetWalletTxResponseCommon {
  /**
   * @description Txs list
   */
  data: TronScanGetWalletTrc10TransfersListItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetWalletTrc20TransfersListOptions
  extends TronScanPaginationOptions,
    TronScanTimestampOptions,
    TronScanGetWalletTxOptionsCommon {
  /**
   * @description TRC20 token ID
   * @example 'TCmSR8UYWvsZkZmprGKaudTuWUZ62ycnnN'
   */
  trc20Id: string;
}

export interface TronScanGetWalletTrc20TransfersListResponse extends TronScanGetWalletTxResponseCommon {
  /**
   * @description Txs list
   */
  data: TronScanGetWalletTrc20TransfersListItem[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetWalletTokensInformationOptions {
  /**
   * @description Query address
   * @example 'TSTVYwFDp7SBfZk7Hrz3tucwQVASyJdwC7'
   */
  address?: string;
  /**
   * @description Asset types:
   *   - 0 - All (default);
   *   - 1 - Assets (TRX, TRC10, TRC20);
   *   - 2 - Collectibles (TRC721 and TRC1155).
   */
  asset_type?: TronScanAssetType;
}

export interface TronScanGetWalletTokensInformationResponse {
  /**
   * @description Tokens list
   */
  data: TronScanWalletTokensInformationItem[];
  /**
   * @description Tokens count
   * @example 3
   */
  count: number;
}
