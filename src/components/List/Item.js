import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import sluglify from '../../helpers/'

const Item = ({ item, onAdd }) => {
  const { id, title, category, description, price, image, image1, stock } = item
  const slug = sluglify(title)

  return (
    <>
      <Card align="center">
        <Link to={`/item/${slug}`} state={{ id }} className="img-hover">
          <CardMedia
            component="img"
            sx={{ maxHeight: 460 }}
            image={
              !image
                ? 'https://images.rbxcdn.com/94a66c6f6ac846d660449aaa0710d991'
                : image
            }
            alt={title}
            className="main-image"
          />
          <CardMedia
            component="img"
            sx={{ maxHeight: 460 }}
            image={
              !image1
                ? 'https://images.rbxcdn.com/94a66c6f6ac846d660449aaa0710d991'
                : image1
            }
            alt={title}
            className="hover-image"
          />
        </Link>
        <CardContent>
          {category.title && (
            <Button
              component={Link}
              to={`/category/${category.slug}`}
              sx={{ ml: -1 }}
            >
              {category.title}
            </Button>
          )}

          <Typography
            component={Link}
            to={`/item/${slug}`}
            state={{ id }}
            variant="h5"
            color="text.primary"
            noWrap
            gutterBottom
            sx={{ display: 'block', textDecoration: 'none' }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
              noWrap
              gutterBottom
            >
              {description}
            </Typography>
          )}

          {price && (
            <Typography
              component="h5"
              variant="h6"
              color="text.primary"
              gutterBottom
            >
              ${price}
            </Typography>
          )}

          {stock >= 0 && (
            <Typography sx={{ mt: 1.5, fontSize: 14 }} color="text.secondary">
              Stock: {stock} {stock <= 1 ? 'product' : 'products'}
            </Typography>
          )}

          <Stack sx={{ mt: 2 }}>
            <Button
              variant="contained"
              component={Link}
              to={`/item/${slug}`}
              state={{ id }}
            >
              Ver detalle
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Item
