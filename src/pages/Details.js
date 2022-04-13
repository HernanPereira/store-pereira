import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box'

import ItemDetailContainer from '../components/Detail/ItemDetailContainer'

const Details = () => {
  const params = useLocation()

  return (
    <Box sx={{}} component="main">
      <ItemDetailContainer id={params.state.id} />
    </Box>
  )
}

export default Details
