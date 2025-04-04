import { TronScanWitnessType } from './params';

interface WitnessListLastBlock {
  /**
   * @description Hash
   * @example '00000000043bf1006e195f50c767c4a8100effd891bc9b9190cefb533e193862'
   */
  hash: string;
  /**
   * @description Confirmed status
   * @example true
   */
  confirmed: boolean;
  /**
   * @description Number
   * @example 71037184
   */
  number: number;
  /**
   * @description Size
   * @example 100416
   */
  size: number;
  /**
   * @description Timestamp
   * @example 1743764967000
   */
  timestamp: number;
  /**
   * @description Parent hash
   * @example '00000000043bf0ff0188f51e78c9d25bbaa00cf2d4f33aba502f62c0406ac3a2'
   */
  parentHash: string;
  /**
   * @description Witness address
   * @example 'TQopP5GM68QoqLzpz8YReDfSoCMkvwcZYd'
   */
  witnessAddress: string;
  /**
   * @description Number of trx
   * @example 415
   */
  nrOfTrx: number;
  /**
   * @description Tx trie root
   * @example '2ZkTK5u6cA64ZSso8WcPDFEUdaKdJpX8yNTGuxwxK3BburomC'
   */
  txTrieRoot: string;
  /**
   * @description Witness id
   * @example 0
   */
  witnessId: number;
}

interface WitnessListItem {
  /**
   * @description Address
   * @example 'TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH'
   */
  address: string;
  /**
   * @description Name
   * @example 'Binance Staking';
   */
  name: string;
  /**
   * @description Url
   * @example 'https://www.binance.com/en/staking'
   */
  url: string;
  /**
   * @description Producer status
   * @example true
   */
  producer: boolean;
  /**
   * @description Latest block number
   * @example 71037142
   */
  latestBlockNumber: number;
  /**
   * @description Latest slot number
   * @example 581254947
   */
  latestSlotNumber: number;
  /**
   * @description Missed total
   * @example 9028
   */
  missedTotal: number;
  /**
   * @description Produced total
   * @example 2112232
   */
  producedTotal: number;
  /**
   * @description Produced trx
   * @example 0
   */
  producedTrx: number;
  /**
   * @description Votes
   * @example 2910231000
   */
  votes: number;
  /**
   * @description Votes change
   * @example -3990
   */
  changeVotes: number;
  /**
   * @description Last cycle votes
   * @example 2910231000
   */
  lastCycleVotes: number;
  /**
   * @description Real time votes
   * @example 2910227010
   */
  realTimeVotes: number;
  /**
   * @description Brokerage
   * @example 20
   */
  brokerage: number;
  /**
   * @description Voter brokerage
   * @example 80
   */
  voterBrokerage: number;
  /**
   * @description Annualized rate
   * @example '3.540828'
   */
  annualizedRate: string;
  /**
   * @description Produce percentage
   * @example 99.5744038920264
   */
  producePercentage: number;
  /**
   * @description Version
   * @example 31
   */
  version: number;
  /**
   * @description Witness type
   * @example 1
   */
  witnessType: number;
  /**
   * @description Index
   * @example 1
   */
  index: number;
  /**
   * @description Total out of time transactions
   * @example 16412
   */
  totalOutOfTimeTrans: number;
  /**
   * @description Last week out of time transactions
   * @example 0
   */
  lastWeekOutOfTimeTrans: number;
  /**
   * @description Changed brokerage
   * @example false
   */
  changedBrokerage: boolean;
  /**
   * @description Lowest brokerage
   * @example 100
   */
  lowestBrokerage: number;
  /**
   * @description Ranking
   * @example 1
   */
  ranking: number;
  /**
   * @description Votes percentage
   * @example 7.28811713169774
   */
  votesPercentage: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanWitnessListOptions {
  witnesstype?: TronScanWitnessType;
}

export interface TronScanWitnessListResponse {
  /**
   * @description Total
   * @example 1
   */
  total: number;
  /**
   * @description Last block information
   */
  lastBlock: WitnessListLastBlock;
  /**
   * @description Data list
   * @example []
   */
  data: WitnessListItem[];
}

// ----------------------------------------------------------------------------------------------------
