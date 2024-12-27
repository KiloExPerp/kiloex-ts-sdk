import { create, ChainId } from '../dist/index';
const kiloClient = create(ChainId.BSCTEST);

kiloClient
  .supportedProductsByChain(ChainId.BSCTEST)
  .then(result => {
    const cryptoInfoDiv = document.getElementById('cryptoInfo');

    // Parse the data and insert it into the div
    const productData = result[0]; // Assuming the result is an array, use the first product
    const htmlContent = `
      <p><strong>Name:</strong> ${productData.name}</p>
      <p><strong>Symbol:</strong> ${productData.symbol}</p>
      <p><strong>Base:</strong> ${productData.base}</p>
      <p><strong>Quote:</strong> ${productData.quote}</p>
      <p><strong>Borrowing Rate:</strong> ${productData.borrowingRate}</p>
      <p><strong>Max Leverage:</strong> ${productData.maxLeverage}</p>
      <p><strong>Address:</strong> ${productData.address}</p>
      <p><strong>Price Decimal:</strong> ${productData.priceDecimal}</p>
      <p><strong>Product Fee:</strong> ${productData.productFee}</p>
    `;

    // Insert the generated content into the div
    cryptoInfoDiv.innerHTML = htmlContent;
  })
  .catch(err => {});


const getAccount = () => {
  const walletAddress = document.getElementById('walletAddress')
  return walletAddress.value
}

document.getElementById('testButton').addEventListener('click', () => {
  const walletAddress = getAccount() // '0x...';
  const type = 1;
  const position = {
    tickerPrice: '0.8806',
    productId: 9,
    leverage: 2,
    isLong: true,
    margin: 50,
    point: 0.05
  };

  kiloClient
    .increasePosition(walletAddress, type, position)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('close').addEventListener('click', () => {
  const walletAddress = getAccount() // '0x...';
  const position = {
    productId: 9,
    margin: 50,
    isLong: true,
    tickerPrice: '0.356084'
  };

  kiloClient
    .closePosition(walletAddress, position)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('openOrder').addEventListener('click', () => {
  const walletAddress = getAccount()
  const type = 2;
  const position = {
    tickerPrice: '0.8',
    productId: 9,
    leverage: 2,
    isLong: true,
    margin: 50,
    point: 0.05
  };

  kiloClient
    .increasePosition(walletAddress, type, position)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('openTPSL').addEventListener('click', () => {
  const walletAddress = getAccount()
  const type = 3;
  const position = {
    tickerPrice: '0.8806',
    productId: 9,
    leverage: 2,
    isLong: true,
    margin: 50,
    point: 0.05,
    takeProfitPrice: 0.99,
    stopLossPrice: 0.7
  };

  kiloClient
    .increasePosition(walletAddress, type, position)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('OPENStopLoss').addEventListener('click', () => {
  const walletAddress = getAccount()
  const type = 4; // stop loss
  const position = {
    tickerPrice: '0.7', // stop loss price
    productId: 9, 
    leverage: 2,
    isLong: true,
    margin: 50,
    point: 0.05,
    entryPrice: '0.8596' // buy price
  };

  kiloClient
    .increasePosition(walletAddress, type, position)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('OPENTakeProfit').addEventListener('click', () => {
  const walletAddress = getAccount()
  const type = 5; // take profit
  const position = {
    tickerPrice: '2', // take profit price
    productId: 9, 
    leverage: 2,
    isLong: true,
    margin: 50,
    point: 0.05,
    entryPrice: '0.8596' // buy price
  };

  kiloClient
    .increasePosition(walletAddress, type, position)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('cancelOrder').addEventListener('click', () => {
  const walletAddress = getAccount()
  const type = 'Increase';

  kiloClient
    .cancelOrder(walletAddress, type, 10)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('cancelPosition').addEventListener('click', () => {
  const walletAddress = getAccount()
  const type = 'Increase';

  kiloClient
    .cancelPosition(walletAddress, type, 10)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('updateOrder').addEventListener('click', () => {
  const walletAddress = getAccount()
  const updateData = {
    orderIndex: 62, // order index, not productId
    margin: 50,
    leverage: 2,
    limitPrice: 0.9,
    type: 'STOP_LOSS' // 'STOP_LOSS | TAKE_PROFIT'
  };

  kiloClient
    .updateOrder(walletAddress, updateData)
    .then(result => {
      console.log('Result from async function:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('getPositionList').addEventListener('click', () => {
  const walletAddress = getAccount()
  const ids = [1, 2, 9]; // productIds

  kiloClient
    .getPositionList(walletAddress, ids)
    .then(result => {
      console.log('Result from async function:', result);
      document.getElementById('positionList').innerText = JSON.stringify(result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

