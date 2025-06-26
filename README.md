![https://tronscan.org/](https://tronscan.org/static/media/logo_left.75928ad1b469e9b7f18200c4605d3396.svg)

# Tronscan client

Client for receiving blockchain data through block explorers (in particular, tronscan).  
At the moment, the number of available methods is limited to those indicated in the examples below:

## Donation

To support this project, you can send crypto to:

- **0x3F2f0098310e654040f7794AB7E44Ac48E0eaF7B**
- **TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw**

## Create client instance

```javascript
import { TronScanClient } from 'tronscan-client';

const tronScanClient = new TronScanClient({
  url: 'https://apilist.tronscanapi.com/api',
  apiKey: 'your_api_key_from_tronscan_cabinet'
});
```

## [Account section](https://docs.tronscan.org/api-endpoints/account#get-account-detail-information)

```javascript
const ADDRESS = 'tron_address';
const FROM_ADDRESS = 'from_address';
const TOKEN_ADDRESS = 'token_address';
const START_TIMESTAMP = 1514764800000;

// Get account list:
const response = await tronScanClient.getAccountList();
console.log(response.data);

// Get account detail information:
const account = await tronScanClient.getAccountDetailInformation({
  address: ADDRESS
});
console.log(account);

// Get token list:
const accountTokensList = await tronScanClient.getTokenList({
  address: ADDRESS
});
console.log(accountTokensList);

// Get the voted list:
const votedList = await tronScanClient.getVotedList({
  candidate: ADDRESS
});
console.log(votedList.data);

// Get a list of account resources:
const resourcesList = await tronScanClient.getAccountResourcesList({
  address: ADDRESS
});
console.log(resourcesList.data);

// Get a list of stake 2.0 account resources:
const resourcesStake2List = await tronScanClient.getAccountResourcesStake2List({
  address: ADDRESS
});
console.log(resourcesStake2List.data);

// Get approval list:
const approvalList = await tronScanClient.getApprovalList({
  address: ADDRESS
});
console.log(approvalList);

// Get account authorization change records:
const accountAccessChangeRecords = await tronScanClient.getAccountAuthChangeRecords({
  contract_address: TOKEN_ADDRESS,
  from_address: FROM_ADDRESS,
  to_address: ADDRESS,
  type: 'approve'
});
console.log(accountAccessChangeRecords);

// Get list of daily analytics data for an account over time:
const accountDailyAnalytics = await tronScanClient.getAccountDailyAnalytics({
  address: ADDRESS,
  start_timestamp: START_TIMESTAMP
});
console.log(accountDailyAnalytics);

// Get an account to participate in the project:
const projectParticipateInfo = await tronScanClient.getAccountParticipateProject({
  address: ADDRESS
});
console.log(projectParticipateInfo);

// Get account wallet token overview:
const tokenOverview = await tronScanClient.getAccountWalletTokenOverview({
  address: ADDRESS
});
console.log(tokenOverview);

// Find the address if exist on other chain:
const otherChainInfo = await tronScanClient.findAddressOnOtherChain({
  address: ADDRESS
});
console.log(otherChainInfo);
```

## [Contract section](https://docs.tronscan.org/api-endpoints/contract)

```javascript
const CONTRACT_ADDRESS = 'contract_address';

// Get list of contracts:
const contractsList = await tronScanClient.getListOfContracts();
console.log(contractsList);

// Get contract detail information:
const contractDetailInformation = await tronScanClient.getContractDetailInformation({
  contract: CONTRACT_ADDRESS
});
console.log(contractDetailInformation);

// Get event information of the contract:
const contractEventInfo = await tronScanClient.getContractEventInformation({
  contractAddress: CONTRACT_ADDRESS
});
console.log(contractEventInfo);

// Get contract energy statistics:
const energyStatistics = await tronScanClient.getContractEnergyStatistics({
  address: CONTRACT_ADDRESS
});
console.log(energyStatistics);

// Get contract call statistics:
const callStatistics = await tronScanClient.getContractCallStatistics({
  contract_address: CONTRACT_ADDRESS
});
console.log(callStatistics);

// Get the number of unique addresses called per day for a contract over a certain period of time:
const uniqueAddressCount = await tronScanClient.getContractUniqueAddressesNumberPerDay({
  address: CONTRACT_ADDRESS
});
console.log(uniqueAddressCount);

// Get the list of the number of calls per day of the contract:
const callsNumber = await tronScanClient.getContractCallsNumberPerDay({
  address: CONTRACT_ADDRESS
});
console.log(callsNumber);

// Get the list of daily analysis data for the contract over a period of time:
const dailyAnalytics = await tronScanClient.getContractDailyAnalyticsList({
  address: CONTRACT_ADDRESS
});
console.log(dailyAnalytics);

// Get the list of all callers of the contract and the statistics of the number of calls:
const callersList = await tronScanClient.getContractCallersList({
  address: CONTRACT_ADDRESS
});
console.log(callersList);

// Get the list of trigger transactions for a certain time period:
const triggerTransactions = await tronScanClient.getTriggerTransactionsList();
console.log(triggerTransactions);
```

## [Transactions and transfers section](https://docs.tronscan.org/api-endpoints/transactions-and-transfers)

Some of these methods may work incorrectly (tx search methods), but you can use undocumented methods like **getTrxTransfers**,
**getTrc10Transfers** or **getTrc20Transfers** instead.

```javascript
const ADDRESS = 'tron_address';
const START_TIMESTAMP = 1715855574000;
const END_TIMESTAMP = 1715855574000;
const CONTRACT_ADDRESS = 'contract_address';

// Get a list of transactions:
const response = await tronScanClient.getTransactionsList({
  address: ADDRESS
});
const txs = response.data;
console.log(txs);

// Get transaction detail information by transaction hash
const [tx] = txs;
const txDetails = await tronScanClient.getTransactionDetailByHash({
  hash: tx.hash
});
console.log(txDetails);

// Get trc20&721 transfers list:
const trc20Trc721TsList = await tronScanClient.getTrc20Trc721TransferList({
  relatedAddress: ADDRESS
});
console.log(trc20Trc721TsList);

// Get trc1155 transfer list:
const trc1155TransfersList = await tronScanClient.getTrc1155TransferList({
  relatedAddress: ADDRESS
});
console.log(trc1155TransfersList);

// Get trx&trc10 transfer list:
const trxTrx10TxList = await tronScanClient.getTrxTrc10TransferList({
  address: ADDRESS,
  start_timestamp: START_TIMESTAMP,
  end_timestamp: END_TIMESTAMP
});
console.log(trxTrx10TxList);

// Get internal transaction list for special address or block:
const internalTxList = await tronScanClient.getInternalTxListForAddressOrBlock({
  address: ADDRESS
});
console.log(internalTxList);

// Get account's transaction data:
const accountTxData = await tronScanClient.getAccountTransactionData({
  address: ADDRESS,
  trc20Id: CONTRACT_ADDRESS
});
console.log(accountTxData);

// Get transaction's statistic data:
const txStatisticsData = await tronScanClient.getTxsStatisticData();
console.log(txStatisticsData);

// Get statistic distribution data of transfer:
const distributionStatistics = await tronScanClient.getTransferDistributionStatisticData();
console.log(distributionStatistics);

// Get the eligible exchange type transactions:
const eligibleExchangeData = await tronScanClient.getEligibleExchangeTypeTransactions();
console.log(eligibleExchangeData);
```

## [Block section](https://docs.tronscan.org/api-endpoints/block)

```javascript
// Get the list of blocks or details of one block:
const blocks = await tronScanClient.getBlocks();
console.log(blocks);

// Get statistical information of blocks:
const statInfo = await tronScanClient.getBlocksStatisticalInformation();
console.log(statInfo);
```

## [Tokens section](https://docs.tronscan.org/api-endpoints/tokens)

```javascript
const TOKEN_ID = 'token_id';
const TOKEN_ADDRESS = 'token_address';
const ISSUER_ADDRESS = 'issuer_address';
const TRC1155_TOKEN_ADDRESS = 'trc1155_token_address';

// Get token list:
const tokensList = await tronScanClient.getTokensList();
console.log(tokensList);

// Get details of all TRC20/TRC721/TRC1155 tokens or specified TRC20/TRC721/TRC1155 tokens:
const tokensDetails = await tronScanClient.getTrc20Trc721Trc1155TokensDetails({
  contract: TOKEN_ADDRESS
});
console.log(tokensDetails);

// Get details of all TRC10 tokens or specified TRC10 tokens:
const allTrc10TokensDetails = await tronScanClient.getDetailsOfAllTrc10Tokens();
console.log(allTrc10TokensDetails);

// Get the holder of a TRC20/TRC721/TRC1155 token:
const tokenHolders = await tronScanClient.getTrc20Trc721Trc1155TokenHolders({
  contract_address: TOKEN_ADDRESS
});
console.log(tokenHolders);

// Get the holder of a TRC10 token:
const trc10TokenHolders = await tronScanClient.getTrc10TokenHolders({
  address: ISSUER_ADDRESS
});
console.log(trc10TokenHolders);

// Get the distribution of token amounts held by holders:
const tokenAmountDistribution = await tronScanClient.getTokenAmountDistributionByHolders({
  tokenId: TOKEN_ADDRESS
});
console.log(tokenAmountDistribution);

// Get the price information of a specific token:
const tokenPriceInfo = await tronScanClient.getSpecificTokenPriceInfo();
console.log(tokenPriceInfo);

// Get a list of priced tokens:
const pricedTokensList = await tronScanClient.getPricedTokensList();
console.log(pricedTokensList);

// Get the transfer list of one TRC721 tokenId:
const trc721TransfersList = await tronScanClient.getTransfersListOfOneTrc721TokenId({
  contract: TOKEN_ADDRESS,
  tokenId: TOKEN_ID
});
console.log(trc721TransfersList);

// Get one TRC10/TRX transfer information:
const trc10TrxTxsInfo = await tronScanClient.getOneTrc10TrxTransferInfo();
console.log(trc10TrxTxsInfo);

// Get inventory information of a TRC1155:
const trc1155InventoryInfo = await tronScanClient.getTrc1155InventoryInformation({
  contract: TRC1155_TOKEN_ADDRESS
});
console.log(trc1155InventoryInfo);

// Get the holding information of a certain tokenId in TRC1155:
const trc1155HoldingInfo = await tronScanClient.getTrc1155HoldingInformation({
  contract: TRC1155_TOKEN_ADDRESS,
  tokenId: TOKEN_ID
});
console.log(trc1155HoldingInfo);

// Get the circulation of a TRC20 token:
const trc20Circulation = await tronScanClient.getTrc20TokenCirculation({
  address: TOKEN_ADDRESS
});
console.log(trc20Circulation);

// Get inventory information of a TRC721:
const trc721InventoryInfo = await tronScanClient.getTrc721InventoryInformation({
  contract: TOKEN_ADDRESS
});
console.log(trc721InventoryInfo);
```

## [Witness section](https://docs.tronscan.org/api-endpoints/witness)

```javascript
import { TronScanWitnessType } from 'tronscan-client';

const ADDRESS = 'tron_address';

// Get the list of witnesses:
const witnessList = await tronScanClient.getWitnessList({
  witnesstype: TronScanWitnessType.Witness
});
console.log(witnessList);

// Get the list of votes for the account:
const accountVotesList = tronScanClient.getWitnessList({
  address: ADDRESS
});
console.log(accountVotesList);

// Get the list of parameters in the chain:
const chainParameters = await tronScanClient.getChainParametersList();
console.log(chainParameters);

// Get the list of proposals:
const proposals = await tronScanClient.getProposalsList();
console.log(proposals);
```

## [Wallet section](https://docs.tronscan.org/api-endpoints/wallet)

```javascript
const ADDRESS = 'tron_address';
const TRC10_TOKEN_ID = 'trc10_token_id';
const TRC20_TOKEN_ID = 'trc20_token_id';

// Get the list of trx transfers related to a specific address:
const walletTrxTxList = await tronScanClient.getWalletTrxTransfersList({
  address: ADDRESS
});
console.log(walletTrxTxList);

// Get the transfer list of a specific TRC10 token for a certain address:
const walletTrc10TxList = await tronScanClient.getWalletTrc10TransfersList({
  address: ADDRESS,
  trc10Id: TRC10_TOKEN_ID
});
console.log(walletTrc10TxList);

// Get the transfer list of a specific TRC20 token for a certain address:
const walletTrc20TxList = await tronScanClient.getWalletTrc20TransfersList({
  address: ADDRESS,
  trc20Id: TRC20_TOKEN_ID
});
console.log(walletTrc20TxList);

// Get the information of tokens held and followed in the account's web wallet:
const walletTokens = await tronScanClient.getWalletTokensInformation({
  address: ADDRESS
});
console.log(walletTokens);

// Get the amount of unfreezable TRX in address:
const unfreezableTrxAmount = await tronScanClient.getWalletUnfreezableTrxAmount({
  address: ADDRESS
});
console.log(unfreezableTrxAmount);
```

## [Security Service API section](https://docs.tronscan.org/security-service/security-service-api)

```javascript
const ADDRESS = 'tron_address';
const TOKEN_ADDRESS = 'token_address';
const TX_HASH = 'some_tx_hash';
const URL = 'www.google.com.hk';

// Check account security:
const accountSecurity = await tronScanClient.checkAccountSecurity({
  address: ADDRESS
});
console.log(accountSecurity);

// Check token security:
const tokenSecurity = await tronScanClient.checkTokenSecurity({
  address: TOKEN_ADDRESS
});
console.log(tokenSecurity);

// Check url security:
const urlSecurity = await tronScanClient.checkUrlSecurity({
  url: URL
});
console.log(urlSecurity);

// Check transactions security:
const txsSecurity = await tronScanClient.checkTransactionsSecurity({
  hashes: TX_HASH
});
console.log(txsSecurity);

// Check multi sign security:
const multiSignSecurity = await tronScanClient.checkMultiSignSecurity({
  address: ADDRESS
});
console.log(multiSignSecurity);

// Check account authorization security:
const accountAuthSecurity = await tronScanClient.checkAccountAuthSecurity({
  address: ADDRESS
});
console.log(accountAuthSecurity);

// Get all tokens in TronScan:
const tokensList = await tronScanClient.getAllTokens({
  limit: 1,
  start: 0
});
console.log(tokensList);
```

## [Undocumented methods](https://tronscan.org/#/)

You can find this method through developer tools in tronscan cabinet.

```javascript
const ADDRESS = 'tron_address';
const CONTRACT_ADDRESS = 'contract_address';

// Get only trx transfers:
const trxTransfers = await tronScanClient.getTrxTransfers({
  address: ADDRESS
});
console.log(trxTransfers);

// Get only trc10 transfers:
const trc19Transfers = await tronScanClient.getTrc10Transfers({
  address: ADDRESS
});
console.log(trc19Transfers);

// Get only trc20 transfers:
const trc20Transfers = await tronScanClient.getTrc20Transfers({
  relatedAddress: ADDRESS,
  contract_address: CONTRACT_ADDRESS
});
console.log(trc20Transfers);
```

## Supported networks table

**You must use the API key!!!**  
Just register an account on tronscan.org and generate an API key.

| **Name**        | **Block explorer**           | Block explorer API url              |
| --------------- | ---------------------------- | ----------------------------------- |
| Tronscan        | https://tronscan.org/        | https://apilist.tronscanapi.com/api |
| Tronscan Nile   | https://nile.tronscan.org/   | https://nileapi.tronscan.org/api    |
| Tronscan Shasta | https://shasta.tronscan.org/ | https://shastapi.tronscan.org/api   |
