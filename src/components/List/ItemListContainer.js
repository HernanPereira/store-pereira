import { useState, useEffect } from 'react'

import getAllProducts from '../../helpers/getAllProducts'
import ItemList from './ItemList'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ItemListContainer = ({ heading, greeting }) => {
  const [products, setProducts] = useState(null)

  const getData = async () => {
    try {
      const data = await getAllProducts()
      setProducts(data)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => getData(), [])

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ pt: 8, pb: 2 }}>
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
          {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ pt: 8, pb: 6 }}>
          <ItemList items={products} />
        </Box>
      </Container>
    </>
  )
}

export default ItemListContainer
