import { useState } from 'react'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [qty, setQty] = useState(stock === 0 ? stock : initial)

  const handleIncrement = () => qty < stock && setQty(qty + 1)
  const handleDecrement = () => qty > 1 && setQty(qty - 1)

  return (
    <Card sx={{ maxWidth: 275 }} align="center">
      <CardContent>
        <Typography
          component="h3"
          variant="h4"
          color="text.primary"
          gutterBottom
        >
          Remera
        </Typography>

        <Typography variant="p" color="text.secondary" paragraph>
          Lorem Ipsum passages, and more recently.
        </Typography>

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

        <Stack>
          <Button
            variant="contained"
            onClick={() => onAdd(qty)}
            disabled={stock === 0 && true}
          >
            Agregar al carrito
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ItemCount
