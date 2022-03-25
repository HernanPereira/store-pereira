import { useState, useEffect } from 'react'

import { getProduct } from '../../helpers/getAllProducts'
import ItemDetail from './ItemDetail'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const ItemDetailContainer = () => {
  const [data, setData] = useState(null)
  const [prod, setProd] = useState(0)

  const getData = async (prod) => {
    try {
      const res = await getProduct(prod)
      setData(res)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => {
    getData(prod)
  }, [getData])

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ pt: 4, pb: 2, textAlign: 'center' }}>
          <TextField
            sx={{ minWidth: 280 }}
            id="outlined-number"
            label="Cambiar Detalle (ID Product: de 0 a 19)"
            type="number"
            autoComplete="current-password"
            InputProps={{ inputProps: { min: 0, max: 19 } }}
            onChange={(e) => {
              setProd(e.target.value)
            }}
          />
        </Box>
        <Box sx={{ pt: 4, pb: 6 }}>
          <ItemDetail detail={data} />
        </Box>
      </Container>
    </>
  )
}

export default ItemDetailContainer
