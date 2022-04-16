import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

import ItemListContainer from '../components/List'

const Home = () => {
  return (
    <Box sx={{ pb: 6, minHeight: '400px' }} component="main">
      <Box>
        <CardMedia
          component="img"
          height="360"
          sx={{}}
          image={
            'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1822,c_limit/7a537b7e-4220-4cb8-82f7-5ed4177e3a70/site-oficial-de-nike.jpg'
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
