import { useState, useEffect } from 'react'

import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'

import ItemList from './ItemList'

import { getProducts } from '../../helpers/getData'

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([])

  const getProductsFirebase = async () => {
    try {
      const data = await getProducts(category)
      setProducts(data)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => {
    getProductsFirebase()
  }, [category])

  return (
    <>
      {products.length <= 0 ? (
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
        <ItemList items={products} />
      )}
    </>
  )
}

export default ItemListContainer
