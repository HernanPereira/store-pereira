import { useState } from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Skeleton from '@mui/material/Skeleton'

import ItemCount from './ItemCount'
import onAdd from '../../helpers/onAdd'

const ItemDetail = ({ detail }) => {
  const { id, title, category, description, price, rating, image, stock } =
    detail || {}

  const [showCount, setShowCount] = useState(true)

  const handleShowCount = () => {
    console.log('Show button "Finalizar compra"')
    setShowCount(false)
  }

  return (
    <>
      <Box
        sx={{
          display: { xs: 'block', md: 'grid' },
          columnGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <div>
          {!detail ? (
            <Skeleton
              variant="rectangular"
              sx={{ height: { xs: '50vh', md: 'calc(100vh - 123px)' } }}
            />
          ) : (
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                height: {
                  xs: '50vh',
                  md: 'calc(100vh - 123px)',
                },
                mb: {
                  xs: 4,
                  md: 0,
                },
              }}
            />
          )}
        </div>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
        >
          <Grid
            container
            wrap="nowrap"
            alignItems="flex-start"
            direction="column"
            justifyContent="center"
            sx={{ maxWidth: '80%' }}
          >
            {!detail ? (
              <>
                <Skeleton height={22} width="25%" sx={{ mt: 0.75, mb: 0.75 }} />
                <Skeleton height={34} width="80%" sx={{ mb: 0 }} />
                <Skeleton height={20} width="30%" sx={{ mt: -0.25, mb: 2 }} />
                <>
                  <Skeleton height={14} width="100%" sx={{ mb: 0.75 }} />
                  <Skeleton height={14} width="100%" sx={{ mb: 0.75 }} />
                  <Skeleton height={14} width="100%" sx={{ mb: 0.75 }} />
                  <Skeleton height={14} width="60%" />
                </>
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="center"
                  direction="column"
                  justifyContent="center"
                >
                  <Skeleton height={36} width={80} sx={{ mt: 3, mb: 0.75 }} />
                  <Skeleton height={58} width={120} sx={{ mt: 0, mb: 0 }} />
                  <Skeleton height={60} width={156} sx={{ mt: -0.75, mb: 1 }} />
                  <Skeleton height={20} width={120} />
                </Grid>
              </>
            ) : (
              <CardContent sx={{ p: 0 }}>
                {/* <pre>{JSON.stringify(detail, null, 2)}</pre> */}
                <Grid container alignItems="center">
                  <Button
                    component={Link}
                    to={`/category/${category.slug}`}
                    sx={{ ml: -1 }}
                  >
                    {category.title}
                  </Button>
                  <Typography variant="overline" sx={{ lineHeight: 2 }}>
                    <span>| ID: {id}</span>
                  </Typography>
                </Grid>

                <Typography component="h4" variant="h5" color="text.primary">
                  {title}
                </Typography>
                <Grid container alignItems="center" sx={{ mb: 1.5 }}>
                  <Rating
                    name="read-only"
                    size="small"
                    precision={0.1}
                    value={rating.rate}
                    readOnly
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="caption">
                    {rating.count} reviews
                  </Typography>
                </Grid>
                <Typography
                  variant="caption"
                  display="block"
                  color="text.secondary"
                  gutterBottom
                >
                  {description}
                </Typography>
                <Typography
                  component="h5"
                  variant="h5"
                  color="text.primary"
                  gutterBottom
                  align="center"
                  sx={{ mt: 4, mb: 0 }}
                >
                  ${price}
                </Typography>
                <Stack alignItems="center" sx={{ pt: 2, pb: 2 }}>
                  {showCount ? (
                    <ItemCount
                      stock={stock}
                      initial={1}
                      onAdd={onAdd}
                      handleShowCount={handleShowCount}
                      text={'Comprar Ahora'}
                    />
                  ) : (
                    <Button
                      variant="outlined"
                      component={Link}
                      to={'/cart'}
                      sx={{
                        width: { xs: '100%', md: 'auto' },
                      }}
                      startIcon={<ShoppingCartOutlinedIcon />}
                    >
                      Finalizar compra
                    </Button>
                  )}
                </Stack>

                <Typography
                  sx={{ mt: 0.5, fontSize: 14 }}
                  color="text.secondary"
                  align="center"
                >
                  Stock: {stock} {stock <= 1 ? 'product' : 'products'}
                </Typography>
              </CardContent>
            )}
          </Grid>
        </Stack>
      </Box>
    </>
  )
}

export default ItemDetail
