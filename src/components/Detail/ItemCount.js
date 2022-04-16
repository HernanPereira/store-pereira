import { useState, useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const ItemCount = ({
  stock,
  initial,
  onAdd,
  text,
  item,
  handleShowCount,
  handleClickSnackbar,
}) => {
  const [qty, setQty] = useState(stock === 0 ? stock : initial)

  const handleIncrement = () => qty < stock && setQty(qty + 1)
  const handleDecrement = () => qty > 1 && setQty(qty - 1)

  const { addItem } = useContext(CartContext)

  return (
    <div align="center" style={{ width: '100%' }}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={handleDecrement} disabled={qty <= 1 && true}>
          -
        </Button>
        <Button disabled={qty >= stock && true} sx={{ pointerEvents: 'none' }}>
          {qty}
        </Button>
        <Button onClick={handleIncrement} disabled={qty >= stock && true}>
          +
        </Button>
      </ButtonGroup>

      <Stack alignItems="center" sx={{ pt: 2 }}>
        <Button
          variant="outlined"
          onClick={() => {
            onAdd(qty)
            handleShowCount()
            handleClickSnackbar()
            addItem(item, qty)
          }}
          disabled={stock === 0 && true}
          sx={{
            width: { xs: '100%', md: 'auto' },
          }}
        >
          {!text ? 'Agregar al carrito' : text}
        </Button>
      </Stack>
    </div>
  )
}

export default ItemCount
