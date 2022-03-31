import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { getCategoryName } from '../helpers/getAllProducts'
import ItemListContainer from '../components/List'

const Category = () => {
  const { id } = useParams()
  const [name, setName] = useState('')

  const getName = async () => {
    try {
      const name = await getCategoryName(id)
      setName(name)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => getName(), [id])

  return (
    <>
      <Box>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ textTransform: 'capitalize' }}
        >
          {name}
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ pt: 8, pb: 6 }}>
          <ItemListContainer category={id} />
        </Box>
      </Container>
    </>
  )
}

export default Category
