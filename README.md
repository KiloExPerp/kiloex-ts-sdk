# Kilo TS SDK

## Introduction
The Kilo SDK provides a set of TypeScript interfaces and functions for interacting with the Kilo protocol. allowing users to manage their positions, orders, and trade history on supported chains.

## Installation
To install the SDK, you can use npm:

```bash
npm install kilo-ts-sdk
```

## Documentation

Full documentation and instructions, visit: [Kiloex Docs](https://xxxx).

## Getting started

### Initialization

```javascript
import { create, ChainId } from 'kilo-ts-sdk';
const kiloClient = create(ChainId.BSC);
```

### Functions

#### Supported Chains
Get a list of supported chains:
```javascript
import { supportedChains } from 'kilo-ts-sdk';
const chains = supportedChains();
```
***
#### Supported Products by Chain
Get all supported products for a specific chain:
```javascript
const products = await kiloClient.supportedProductsByChain(chainId);
```
***
#### Get Products Info
Retrieve information about specific products:

```javascript
const productIds = [1, 2, 3]; // Example product IDs
const productsInfo = await kiloClient.getProductsInfo(productIds);
```
***
#### Get Product Prices
Retrieve prices of specific products:
```javascript
const productPrices = await kiloClient.getProductPrices(productIds);
```
***
#### Set Approve
Set approval for a spender:
```javascript
const spender = '0x456def...'; // Example spender address
const isApproved = await kiloClient.setApprove(walletAddress, spender);
```
***
#### Increase Position
Increase a position:
```javascript
const walletAddress = '0x123abc...'; // Example wallet address
const type = 'Market'; // Example trade type
const position = {
    // Example position data
};
const transactionReceipt = await kiloClient.increasePosition(walletAddress, type, position);
```
***
#### Close Position
Close a position:
```javascript
const positionToClose = {
    // Example position data
};
const transactionReceipt = await kiloClient.closePosition(walletAddress, positionToClose);
```
***
#### Update Position Margin
Update the margin of a position:
```javascript
const positionToUpdate = {
    // Example position data
};
const transactionReceipt = await kiloClient.updatePositionMargin(walletAddress, positionToUpdate);
```
***
#### Cancel Order
Cancel a buy/sell limit order:
```javascript
const orderIndex = 123; // Example order index
const transactionReceipt = await kiloClient.cancelOrder(walletAddress, 'Increase', orderIndex);
```
***
#### Update Order
Update a limit order:
```javascript
const orderToUpdate = {
    // Example order data
};
const transactionReceipt = await kiloClient.updateOrder(walletAddress, orderToUpdate);
```

***
#### Get All Positions
Retrieve all positions associated with a wallet address:
```javascript
const positions = await kiloClient.getAllPositions(walletAddress);
```
***
#### Get All Orders
Retrieve all orders associated with a wallet address:
```javascript
const orders = await kiloClient.getAllOrders(walletAddress);
```
***
#### Get Trades History
Retrieve trade history associated with a wallet address:
```javascript
const tradeHistory = await kiloClient.getTradesHistory(walletAddress);
```
***


### Quote and Candlestick
We using pyth network as our Oracle, So you can get price and candlestick history  from the pyth network, we use this too

https://benchmarks.pyth.network/docs#/TradingView/tradingview_streaming_route_v1_shims_tradingview_streaming_get 