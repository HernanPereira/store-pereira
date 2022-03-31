import { useParams } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import ItemDetailContainer from '../components/Detail/ItemDetailContainer'

const Details = () => {
  const { id } = useParams()
  return (
    <Container maxWidth="lg">
      <Box>
        <ItemDetailContainer id={id} />
      </Box>
    </Container>
  )
}

export default Details
