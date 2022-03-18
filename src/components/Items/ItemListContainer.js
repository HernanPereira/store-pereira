import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import ItemCount from './ItemCount'

const onAdd = (qty) => console.log(`Agregado al carrito: ${qty} producto/s`)

const ItemListContainer = ({ heading, greeting }) => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ pt: 8, pb: 6 }}>
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
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Box>
      </Container>
    </>
  )
}

export default ItemListContainer
