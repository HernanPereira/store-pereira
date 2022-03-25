import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import ItemCount from './ItemCount'
import onAdd from '../../helpers/onAdd'

const ItemDetail = ({ detail }) => {
  const { title, category, description, price, image, stock } = detail || {}

  return (
    <>
      {!detail ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Card sx={{ pt: 6, pb: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} align="center">
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 300 }}
                  image={image}
                  alt={title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="overline" display="block" gutterBottom>
                    {category}
                  </Typography>

                  <Typography
                    component="h5"
                    variant="h5"
                    color="text.primary"
                    gutterBottom
                  >
                    {title}
                  </Typography>

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

                  <Stack>
                    <ItemCount
                      stock={stock}
                      initial={1}
                      onAdd={onAdd}
                      text={'Comprar Ahora'}
                    />
                  </Stack>

                  <Typography
                    sx={{ mt: 1.5, fontSize: 14 }}
                    color="text.secondary"
                    align="center"
                  >
                    Stock: {stock} {stock <= 1 ? 'product' : 'products'}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Box>
        </Card>
      )}
    </>
  )
}

export default ItemDetail
