import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box'

import ItemDetailContainer from '../components/Detail/ItemDetailContainer'

const Details = () => {
  const { id } = useParams()
  return (
    <Box sx={{}} component="main">
      <ItemDetailContainer id={id} />
    </Box>
  )
}

export default Details
