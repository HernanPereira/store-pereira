import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { CartContext } from '../../context/CartContext'

const CartDrawer = ({ toggleDrawer }) => {
  const { cart, clear, removeItem } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(handleTotal.toFixed(2))
  }, [cart])

  const handleTotal = cart.reduce((a, v) => {
    return a + v.qty * v.item.price
  }, 0)

  // return <pre>{JSON.stringify(cart, null, 2)}</pre>

  return (
    <>
      {cart.length === 0 ? (
        <Grid container sx={{ p: 2, pt: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 42 }} />
            <Typography sx={{ m: 2 }} variant="h6" component="div">
              Tu Carrito está vacio 🥺
            </Typography>
          </Box>
        </Grid>
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
              <div key={item.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar alt={item.title} src={item.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          component={Link}
                          to={`/item/${item.id}`}
                          color="text.primary"
                          onClick={() => toggleDrawer(false)}
                          sx={{ display: 'block', textDecoration: 'none' }}
                        >
                          {item.title}
                        </Typography>
                      </>
                    }
                    secondary={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                        component="span"
                      >
                        <span>{`${qty} x $${item.price}`}</span>
                        <span>${(qty * item.price).toFixed(2)}</span>
                      </Box>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
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
                <div>Total</div>
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
