import { useState, useContext } from 'react'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ClearIcon from '@mui/icons-material/Clear'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { CartContext } from '../../context/CartContext'

import CartDrawer from '../Cart/CartDrawer'

const CartWidget = () => {
  const { qty } = useContext(CartContext)

  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(!open)

  return (
    <>
      <IconButton color="inherit" aria-label="cart" onClick={toggleDrawer}>
        <Badge color="secondary" badgeContent={qty}>
          <ShoppingBagOutlinedIcon />
        </Badge>
      </IconButton>

      <Drawer
        anchor={'right'}
        open={open}
        onClose={toggleDrawer}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid container sx={{ p: 2, backgroundColor: '#333' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              color: '#fff',
            }}
          >
            <ClearIcon sx={{ cursor: 'pointer' }} onClick={toggleDrawer} />
            <Typography sx={{}} variant="h6" component="span">
              Tu Carrito
            </Typography>
            <Typography sx={{}} component="span">
              {qty} items
            </Typography>
          </Box>
        </Grid>

        <Box
          sx={{
            width: { xs: '100vw', sm: 420 },
            height: '100%',
            overflow: 'hidden',
          }}
          role="presentation"
        >
          <CartDrawer toggleDrawer={toggleDrawer} />
        </Box>
      </Drawer>
    </>
  )
}

export default CartWidget
