import { createContext, useState, useEffect } from 'react'

const CartContext = createContext([])

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [qty, setQty] = useState(0)

  /*
  CART functions
  */
  const addItem = (item, qty) => {
    if (!isInCart(item.id)) setCart([...cart, { item, qty }])
  }
  const removeItem = (itemId) =>
    setCart(cart.filter(({ item }) => item.id !== itemId))

  const clear = () => setCart([])

  const isInCart = (id) => cart.some((prod) => id === prod.item.id)

  /*
  Badge Icon Quantity CART
  */
  const cartInitialValue = 0
  const sumQty = cart
    .map((item) => item.qty)
    .reduce((prev, curr) => prev + curr, cartInitialValue)

  useEffect(() => {
    setQty(sumQty)
  }, [cart])

  const data = {
    qty,
    cart,
    addItem,
    removeItem,
    clear,
    isInCart,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider }
