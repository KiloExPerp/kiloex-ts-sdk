import { create, ChainId } from '../src/index';
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

document.getElementById('testButton').addEventListener('click', () => {
  const walletAddress = '0x0';
  const type = 1;
  const position = {
    tickerPrice: '0.356084',
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
  const walletAddress = '0x0';
  const position = {
    productId: 9,
    margin: 30,
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
  const walletAddress = '0x0';
  const type = 2;
  const position = {
    tickerPrice: '0.356084',
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
  const walletAddress = '0x0';
  const type = 3;
  const position = {
    tickerPrice: '0.356084',
    productId: 9,
    leverage: 2,
    isLong: true,
    margin: 50,
    point: 0.05,
    takeProfitPrice: 0.8898
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
  const walletAddress = '0x0';
  const type = 3;
  const position = {
    tickerPrice: '0.356084',
    productId: 9,
    leverage: 2,
    isLong: true,
    margin: 50,
    point: 0.05,
    OPENStopLoss: 0.8898
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
  const walletAddress = '0x0';
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
