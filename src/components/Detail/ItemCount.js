import { useState } from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const ItemCount = ({ stock, initial, onAdd, text }) => {
  const [qty, setQty] = useState(stock === 0 ? stock : initial)

  const handleIncrement = () => qty < stock && setQty(qty + 1)
  const handleDecrement = () => qty > 1 && setQty(qty - 1)

  return (
    <div align="center">
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        sx={{ pt: 2, pb: 2 }}
      >
        <Button onClick={handleDecrement} disabled={qty <= 1 && true}>
          -
        </Button>
        <Button disabled color="primary">
          {qty}
        </Button>
        <Button onClick={handleIncrement} disabled={qty >= stock && true}>
          +
        </Button>
      </ButtonGroup>

      <Stack alignItems="center">
        <Button
          variant="outlined"
          onClick={() => onAdd(qty)}
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
