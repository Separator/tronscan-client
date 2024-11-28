import { TronScanPaginationOptions, TronScanTimestampOptions, TronScanTransfersCommonResponse } from './tronscan';

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

export interface TronScanGetBlocksListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Super representative address
   */
  producer?: string;
}

export interface TronScanBlockListResponse extends TronScanTransfersCommonResponse {
  data: TronScanBlockSimple[];
}
