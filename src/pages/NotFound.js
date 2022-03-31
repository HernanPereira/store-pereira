import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'

const NotFound = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Page NotFound
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
    </>
  )
}

export default NotFound
