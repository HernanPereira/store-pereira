import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// import ItemCount from '../Detail/ItemCount'

const Item = ({ item, onAdd }) => {
  const { id, title, category, description, price, image, imageHover, stock } =
    item

  return (
    <Card align="center">
      <Link to={`/item/${id}`} className="img-hover">
        <CardMedia
          component="img"
          sx={{ minHeight: 460 }}
          image={image}
          alt={title}
          className="main-image"
        />
        <CardMedia
          component="img"
          sx={{ minHeight: 460 }}
          image={imageHover}
          alt={title}
          className="hover-image"
        />
      </Link>
      <CardContent>
        <Button
          component={Link}
          to={`/category/${category.slug}`}
          sx={{ ml: -1 }}
        >
          {category.title}
        </Button>
        <Typography
          component={Link}
          to={`/item/${id}`}
          variant="h5"
          color="text.primary"
          noWrap
          gutterBottom
          sx={{ display: 'block', textDecoration: 'none' }}
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
          variant="h6"
          color="text.primary"
          gutterBottom
        >
          ${price}{' '}
          {/* {category
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')} */}
        </Typography>

        <Typography sx={{ mt: 1.5, fontSize: 14 }} color="text.secondary">
          Stock: {stock} {stock <= 1 ? 'product' : 'products'}
        </Typography>

        {/* <Stack>
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </Stack> */}

        <Stack sx={{ mt: 2 }}>
          <Button variant="contained" component={Link} to={`/item/${id}`}>
            Ver detalle
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Item
