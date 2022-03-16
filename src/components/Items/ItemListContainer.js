import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ItemListContainer = ({ heading, greeting }) => {
  return (
    <>
      <Container maxWidth="md">
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {heading}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {greeting}
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default ItemListContainer
