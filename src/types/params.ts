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

export enum TronScanContractSort {
  TrxCountDesc = '-trxCount',
  BalanceDesc = '-balance',
  TimestampDesc = '-timestamp'
}

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

export enum TronScanAggregationType {
  Project = 'project',
  Token = 'token'
}

export enum TronScanTransferType {
  Mobile = 'mobile'
}

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

export enum TronScanAccountAthTokenType {
  TRC20 = 1,
  TRC721 = 2,
  ALL = 3,
  TRC1155 = 4
}

export enum AnalyticType {
  Balance = 0,
  Transfer = 1,
  EnergyConsumption = 2,
  BandwidthConsumption = 3,
  Transaction = 4
}

export enum TronScanJustLendFilter {
  All = 0,
  SupplyType = 1,
  BorrowType = 2
}

export enum TronScanQueryDataType {
  Balance = 0,
  TokenTransfers = 1,
  EnergyConsumption = 2,
  BandwidthConsumption = 3,
  ContractCalling = 4
}

export enum TronScanTxDirection {
  TransferIn = 'in',
  TransferOut = 'out',
  All = 'all'
}
