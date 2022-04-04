import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Cart = () => {
  return (
    <Box sx={{ pt: 8, pb: 6, minHeight: '90vh' }} component="main">
      <Container maxWidth="md">
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Carrito
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Cart
