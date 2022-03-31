import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import ItemListContainer from '../components/List'

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Bienvenidos
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
        <Box sx={{ pt: 4 }}>
          <Divider light />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ pt: 6 }}>
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="text.secondary"
          >
            Nuestras Ofertas
          </Typography>
        </Box>
        <Box sx={{ pt: 4, pb: 6 }}>
          <ItemListContainer />
        </Box>
      </Container>
    </>
  )
}

export default Home
