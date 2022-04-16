import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import Tooltip from '@mui/material/Tooltip'

import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

const ContactWidget = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip sx={{}} title="Mi orden" arrow>
        <IconButton
          color="inherit"
          aria-label="order"
          component={NavLink}
          to={'/orders'}
          className="order"
        >
          <FactCheckOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default ContactWidget
