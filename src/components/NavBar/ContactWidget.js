import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const ContactWidget = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        color="inherit"
        aria-label="contatct"
        component={NavLink}
        to={'/contact'}
        className="contact"
      >
        <EmailOutlinedIcon />
      </IconButton>
    </Box>
  )
}

export default ContactWidget
