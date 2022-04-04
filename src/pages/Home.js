import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

import ItemListContainer from '../components/List'

const Home = () => {
  return (
    <Box sx={{ pb: 6 }} component="main">
      <Box>
        <CardMedia
          component="img"
          sx={{ mt: -6 }}
          image={
            'https://cf-images.us-east-1.prod.boltdns.net/v1/jit/72451143001/be3f34d0-190a-4f23-b040-6c67a4388e2f/main/1808x700/4s442ms/match/image.jpg'
          }
          alt={'home'}
        />
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ pt: 6 }}>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Nuevos diseños con un toque clásico.
          </Typography>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Nuevos Diseños
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ pt: 4, pb: 6 }}>
          <ItemListContainer />
        </Box>
      </Container>
    </Box>
  )
}

export default Home
