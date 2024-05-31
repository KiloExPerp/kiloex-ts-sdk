import Big, { BigNumber } from 'bignumber.js'

export const big2decimal = (val: number | string | bigint | BigNumber, decimals = 8) => {
  return BigInt(new Big(val.toString()).times(new Big(10).pow(decimals)).toFixed(0))
}

export const decimal2Big = (val: number | string | bigint | BigNumber = 0, decimals = 8) => {
  if (!val && val != 0) return new Big(0)
  return new Big(val.toString()).div(new Big(10).pow(decimals))
}

export const big2Dec = (val: number | string | bigint | BigNumber, decimals = 8) => {
  if (!val) return new Big(0)
  return new Big(val.toString()).times(new Big(10).pow(decimals))
}

export const pow = (decimal = 8) => {
  return new Big(10).pow(decimal)
}

export const getFundingPayment = (
  isLong: boolean,
  funding: number | bigint | string,
  leverage: number | bigint | string,
  margin: number | bigint | string,
  cumulativeFunding: number | bigint | string,
) => {
  let notional = big2Dec(margin).times(big2Dec(leverage))
  let fundingChanged = new Big(
    cumulativeFunding ? big2Dec(cumulativeFunding.toString(), 12) : 0
  ).minus(big2Dec(funding, 12))
  const positive = isLong ? 1 : -1
  return new Big(positive).times(notional).times(fundingChanged).div(pow(20))
}

export const getBorrowingPayment = ({ leverage, margin, borrowing, cumulativeBorrowing }: {
  leverage: number | bigint | string,
  margin: number | bigint | string,
  borrowing: number | bigint | string,
  cumulativeBorrowing: number | bigint | string
}) => {
  const notional = big2Dec(margin).times(big2Dec(leverage))

  const borrowingChanged = big2Dec(cumulativeBorrowing, 12).minus(big2Dec(borrowing))
  return notional.times(borrowingChanged).div(pow(20))
}

export const getPnl = ({
  isLong,
  leverage,
  margin,
  price, // from position
  pnl,
  productPrice, // market price 1870.38
  histioryOrder,
}: {
  isLong: boolean
  leverage: number | bigint
  margin: number | bigint
  price: number | bigint
  pnl: number
  productPrice: number | bigint | BigNumber
  histioryOrder: boolean
}) => {
  const notional = big2Dec(margin).times(big2Dec(leverage)) // new Big(margin).times(leverage)
  const positive = isLong ? 1 : -1

  let _pnl = histioryOrder
    ? new Big(pnl).multipliedBy(pow(8))
    : new Big(positive)
        .times(notional)
        .times(big2Dec(productPrice).minus(big2Dec(price)))
        .div(big2Dec(price))
        .div(pow(8))

  let change = decimal2Big(big2Dec(_pnl)?.div(big2Dec(margin)))?.times(100) || new Big(0);
  const changeType = change.gt(0) || _pnl.gt(0) ? 'up' : change.lt(0) || _pnl.lt(0) ? 'down' : ''
  const marginRatio = big2Dec(big2Dec(margin).plus(_pnl)).div(notional).times(100).toFixed(2, 1)
  return {
    pnl: big2Dec(productPrice).isZero() ? '0' : decimal2Big(_pnl)?.toString(),
    change: change.toFixed(2, 1),
    type: changeType,
    marginRatio
  }
}

export function getLiquidationPrice({
  isLong,
  leverage,
  margin,
  price,
  funding,
  cumulativeFunding, 
  liquidationThreshold = 8000,
  borrowing,
  cumulativeBorrowing
}: {
  isLong: boolean
  leverage: number | bigint | string
  margin: number | bigint | string
  price: number | bigint | string
  funding: number | bigint | string
  cumulativeFunding: number | bigint | string
  liquidationThreshold?: number
  borrowing: number | bigint | string
  cumulativeBorrowing: number | bigint | string
}) {
  const payment = getFundingPayment(isLong, funding, leverage, margin, cumulativeFunding)
  const borrowingPayment = getBorrowingPayment({
    leverage: leverage,
    margin: margin,
    borrowing: borrowing,
    cumulativeBorrowing: cumulativeBorrowing
  })
  let liqPrice
  if (isLong) {
    liqPrice = payment
      .plus(borrowingPayment)
      .minus(big2Dec(margin).times(liquidationThreshold).div(pow(4)))
      .times(big2Dec(price).times(pow(8)))
      .plus(big2Dec(margin).times(big2Dec(leverage).times(big2Dec(price))))
      .div(big2Dec(margin).times(big2Dec(leverage)))

    liqPrice = isNaN(Number(liqPrice)) ? 0 : decimal2Big(liqPrice).toString()
  } else {
    liqPrice = big2Dec(margin)
      .times(big2Dec(leverage))
      .times(big2Dec(price))
      .minus(
        payment
          .plus(borrowingPayment)
          .minus(big2Dec(margin).times(liquidationThreshold).div(pow(4)))
          .times(big2Dec(price).times(pow(8)))
      )
      .div(big2Dec(margin).times(big2Dec(leverage)))
    liqPrice = isNaN(Number(liqPrice)) ? 0 : decimal2Big(liqPrice).toString()
  }
  return new Big(liqPrice).lte(0) ? '0' : liqPrice
}
