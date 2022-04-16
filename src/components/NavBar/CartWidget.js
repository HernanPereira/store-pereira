import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ClearIcon from '@mui/icons-material/Clear'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

import { CartContext } from '../../context/CartContext'

import { CartDrawer } from '../Cart'

const CartWidget = () => {
  const { qty, open, toggleDrawer } = useContext(CartContext)
  const { pathname } = useLocation()

  return (
    <>
      <Tooltip sx={{}} title="Mi carrito" arrow>
        <IconButton
          color="inherit"
          aria-label="cart"
          sx={{
            pointerEvents: pathname === '/cart' && 'none',
          }}
          onClick={toggleDrawer}
        >
          <Badge color="secondary" badgeContent={qty}>
            <ShoppingBagOutlinedIcon />
          </Badge>
        </IconButton>
      </Tooltip>

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
              Mi Carrito
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
