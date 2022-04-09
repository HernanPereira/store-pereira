const TAX_RATE = 0.35

const priceFormat = (num) => `${num.toFixed(2)}`
const priceRow = (qty, unit) => qty * unit
const cartTotal = (cart) => cart.reduce((a, v) => a + v.qty * v.item.price, 0)

export { priceFormat, priceRow, cartTotal, TAX_RATE }
