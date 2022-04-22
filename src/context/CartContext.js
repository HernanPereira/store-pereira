import { createContext, useState, useEffect } from 'react'
import { priceFormat, priceRow, cartTotal, TAX_RATE } from '../helpers/cartCalc'

import { useLocalStorage } from '../components/hooks/useLocalStorage'

const CartContext = createContext([])

const CartProvider = ({ children }) => {
  const [cartLocal, setCartLocal] = useLocalStorage('Cart', [])
  const [orders, setOrders] = useLocalStorage('Orders', [])
  const [cart, setCart] = useState(cartLocal)
  const [qty, setQty] = useState(0)
  const [total, setTotal] = useState(0)

  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(!open)

  const [openMessage, setOpenMessage] = useState(false)
  const handleClickSnackbar = () => setOpenMessage(true)
  const handleCloseSnackbar = () => setOpenMessage(false)

  const [prodMessage, setProdMessage] = useState({
    name: '',
    action: 'info', // Add: success, Remove: warning, Order: info
  })

  /*
  CART functions
  */
  const addItem = (item, qty) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { item, qty }])
      setCartLocal([...cart, { item, qty }])
    } else {
      updateQtyInCart(item.id, qty)
    }
  }

  const removeItem = (id) => {
    const cartUpdated = cart.filter(({ item }) => item.id !== id)
    setCart(cartUpdated)
    setCartLocal(cartUpdated)
  }
  const clear = () => {
    setCart([])
    setCartLocal([])
  }
  const isInCart = (id) => cart.some(({ item }) => id === item.id)
  const findInCart = (id) => cart.findIndex(({ item }) => id === item.id)

  const updateQtyInCart = (id, newQty) => {
    const index = findInCart(id)
    if (index !== -1) {
      const item = cart[index]
      const updatedItem = { ...item, qty: item.qty + newQty }
      const updatedArray = [...cart]
      updatedArray[index] = updatedItem
      setCart(updatedArray)
      setCartLocal(updatedArray)
    }
  }

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
    toggleDrawer,
    open,
    priceFormat,
    priceRow,
    total,
    setTotal,
    cartTotal,
    TAX_RATE,
    orders,
    setOrders,
    openMessage,
    handleClickSnackbar,
    handleCloseSnackbar,
    prodMessage,
    setProdMessage,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider }
