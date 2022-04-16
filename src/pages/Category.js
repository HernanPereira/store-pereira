import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

import { getCategoryBySlug } from '../helpers/getData'
import ItemListContainer from '../components/List'

const Category = () => {
  const { slug } = useParams()
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const getName = async () => {
    try {
      const name = await getCategoryBySlug(slug)
      !name && navigate('/NotFound')
      setName(name)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => getName(), [slug])

  return (
    <Box sx={{ pt: 8, pb: 6, minHeight: '90vh' }} component="main">
      <Box>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {!name ? (
            <Skeleton sx={{ m: '0 auto', width: { xs: '50%', md: '25%' } }} />
          ) : (
            <>{name}</>
          )}
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ pt: 8, pb: 6 }}>
          <ItemListContainer category={slug} />
        </Box>
      </Container>
    </Box>
  )
}

export default Category
