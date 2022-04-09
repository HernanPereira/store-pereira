import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { CartContext } from '../../context/CartContext'

const CartEmpty = () => {
  const { toggleDrawer, open } = useContext(CartContext)

  return (
    <Grid container sx={{ p: 2, pt: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 58 }} />
        <Typography sx={{ m: 1 }} variant="h6" component="div">
          Tu Carrito está vacio 🥺
        </Typography>
        <Stack>
          <Button
            variant="contained"
            component={Link}
            to={'/'}
            sx={{
              width: { xs: '100%', md: 'auto' },
              mt: 2,
            }}
            onClick={() => {
              open && toggleDrawer(false)
            }}
          >
            Comenzar a comprar
          </Button>
        </Stack>
      </Box>
    </Grid>
  )
}

export default CartEmpty
