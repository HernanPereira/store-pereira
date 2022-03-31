import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const CartWidget = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        color="inherit"
        aria-label="cart"
        component={NavLink}
        to={`cart`}
        className="cart"
      >
        <Badge color="secondary" badgeContent={5}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  )
}

export default CartWidget
