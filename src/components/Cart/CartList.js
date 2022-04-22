import { useContext } from 'react'

import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import Divider from '@mui/material/Divider'

import { CartContext } from '../../context/CartContext'

const CartList = ({ item, qty }) => {
  const {
    removeItem,
    priceFormat,
    priceRow,
    setProdMessage,
    handleClickSnackbar,
  } = useContext(CartContext)

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              handleClickSnackbar()
              setProdMessage({
                name: item.title,
                action: 'warning',
              })
              removeItem(item.id)
            }}
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
                component="h6"
                color="text.primary"
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
              <span>${priceFormat(priceRow(qty, item.price))}</span>
            </Box>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default CartList
