import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'

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
        {!name ? (
          <Box sx={{ flexGrow: 1, pt: 8 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1 }}
              sx={{ p: 0 }}
            >
              <Grid
                item
                xs={4}
                sm={4}
                md={8}
                display="flex"
                justifyContent="flex-end"
              >
                <Skeleton
                  sx={{ width: { xs: '35%', sm: '25%', md: '15%' }, mb: 1.4 }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {[...Array(6).keys()].map((item, i) => {
                return (
                  <Grid item xs={4} sm={4} md={4} key={i}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: '600px',
                        borderRadius: '5px',
                        boxShadow:
                          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                      }}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        ) : (
          <>
            <Box sx={{ pt: 8, pb: 6 }}>
              <ItemListContainer category={slug} />
            </Box>
          </>
        )}
      </Container>
    </Box>
  )
}

export default Category
