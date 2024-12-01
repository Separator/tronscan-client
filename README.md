![https://tronscan.org/](https://tronscan.org/static/media/logo_left.75928ad1b469e9b7f18200c4605d3396.svg)

# Tronscan client

Client for receiving blockchain data through block explorers (in particular, tronscan).  
At the moment, the number of available methods is limited to those indicated in the examples below.

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
```

## [Tokens section](https://docs.tronscan.org/api-endpoints/tokens)

```javascript

```

## [Transactions and transfers section](https://docs.tronscan.org/api-endpoints/transactions-and-transfers)

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

// Get transaction detail information by transaction hash
const [tx] = txs;
const txDetails = await tronScanClient.getTransactionDetailByHash({
  hash: tx.hash
});

// Get trx&trc10 transfer list:
const response = await tronScanClient.getTrxTrc10TransferList({
  address: ADDRESS,
  start_timestamp: START_TIMESTAMP,
  end_timestamp: END_TIMESTAMP
});
const txs = response.data;

// Get trc20&721 transfers list:
const response = await tronScanClient.getTrc20Trc721TransferList({
  relatedAddress: ADDRESS
});
const transfers = response.token_transfers;

// Get only trx transfers:
const response = await tronScanClient.getTrxTransfers({
  address: ADDRESS
});
const transfers = response.data;

// Get only trc10 transfers:
const response = await tronScanClient.getTrc10Transfers({
  address: ADDRESS
});
const transfers = response.data;

// Get only trc20 transfers:
const response = await tronScanClient.getTrc20Transfers({
  relatedAddress: ADDRESS,
  contract_address: CONTRACT_ADDRESS
});
const transfers = response.data;
```

## [Block section](https://docs.tronscan.org/api-endpoints/block)

```javascript
const response = await tronScanClient.getBlocks();
const blocks = response.data;
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

## Supported networks table

**You must use the API key!!!**  
Just register an account on tronscan.org and generate an API key.

| **Name**        | **Block explorer**           | Block explorer API url              |
| --------------- | ---------------------------- | ----------------------------------- |
| Tronscan        | https://tronscan.org/        | https://apilist.tronscanapi.com/api |
| Tronscan Nile   | https://nile.tronscan.org/   | https://nileapi.tronscan.org/api    |
| Tronscan Shasta | https://shasta.tronscan.org/ | https://shastapi.tronscan.org/api   |
