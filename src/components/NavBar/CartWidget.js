import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

const CartWidget = ({ qty = 1 }) => {
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          color="inherit"
          aria-label="cart"
          component={NavLink}
          to={'/cart'}
          className="cart"
        >
          <Badge color="secondary" badgeContent={qty}>
            <ShoppingBagOutlinedIcon />
          </Badge>
        </IconButton>
      </Box>
    </>
  )
}

export default CartWidget
