import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import CardMedia from '@mui/material/CardMedia'

const NotFound = () => {
  return (
    <Box sx={{ pt: 8, pb: 6, minHeight: '90vh' }} component="main">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Página no encontrada!!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            No te preocupes de ayudamos a volver a la home!!
          </Typography>
          <CardMedia
            component="img"
            sx={{
              maxWidth: 650,
              m: '0 auto',
            }}
            image={'/404.jpg'}
            alt={'404'}
          />
          <Button
            component={Link}
            to={'/'}
            variant="outlined"
            startIcon={<HomeIcon />}
          >
            Volver al Inicio
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFound
