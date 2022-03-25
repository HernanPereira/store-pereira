import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import ItemCount from '../Detail/ItemCount'

const Item = ({ item, onAdd }) => {
  const { id, title, description, price, image, stock } = item

  return (
    <Card align="center">
      <CardMedia
        component="img"
        sx={{ height: 275, maxHeight: 275, width: 'auto' }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography
          component="h6"
          variant="h6"
          color="text.primary"
          noWrap
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="caption"
          display="block"
          color="text.secondary"
          noWrap
          gutterBottom
        >
          {description}
        </Typography>

        <Typography
          component="h5"
          variant="h5"
          color="text.primary"
          gutterBottom
        >
          ${price}
        </Typography>

        <Typography sx={{ mt: 1.5, fontSize: 14 }} color="text.secondary">
          Stock: {stock} {stock <= 1 ? 'product' : 'products'}
        </Typography>

        <Stack>
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </Stack>

        <Stack sx={{ mt: 2 }}>
          <Button
            onClick={() => console.log('Product ID: ', id)}
            variant="contained"
          >
            Ver detalle
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Item
