import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { CartEmpty, CartList } from './'

import { CartContext } from '../../context/CartContext'

const CartDrawer = () => {
  const { cart, clear, toggleDrawer, total, setTotal, priceFormat, cartTotal } =
    useContext(CartContext)

  useEffect(() => setTotal(priceFormat(cartTotal(cart))), [cart])

  // return <pre>{JSON.stringify(cart, null, 2)}</pre>

  return (
    <>
      {cart.length <= 0 ? (
        <CartEmpty />
      ) : (
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <List
            sx={{
              overflow: 'auto',
            }}
          >
            {cart.map(({ item, qty }) => (
              <CartList key={item.id} item={item} qty={qty} />
            ))}
          </List>
          <Stack sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
            <Grid>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  fontWeight: 'bold',
                }}
              >
                <div>Subtotal</div>
                <div>${total}</div>
              </Box>
            </Grid>
            <Button
              variant="outlined"
              onClick={clear}
              sx={{
                width: { xs: '100%', md: 'auto' },
                mb: 2,
                mt: 2,
              }}
            >
              Vaciar carrito
            </Button>
            <Button
              variant="contained"
              component={Link}
              to={'/cart'}
              sx={{
                width: { xs: '100%', md: 'auto' },
              }}
              startIcon={<ShoppingCartOutlinedIcon />}
              onClick={() => toggleDrawer(false)}
            >
              Finalizar compra
            </Button>
          </Stack>
        </Grid>
      )}
    </>
  )
}

export default CartDrawer
