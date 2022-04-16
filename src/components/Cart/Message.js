import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const Message = () => {
  const { prodMessage, openMessage, handleCloseSnackbar } =
    useContext(CartContext)

  return (
    <Snackbar
      open={openMessage}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleCloseSnackbar}
    >
      <Alert
        onClose={handleCloseSnackbar}
        variant="filled"
        severity={prodMessage.action} // Add: success, Remove: warning, Order: info
        sx={{
          width: '100%',
        }}
      >
        {prodMessage.action === 'success' && (
          <>
            <strong>{prodMessage.name}</strong> se agregó correctamente!!
          </>
        )}
        {prodMessage.action === 'warning' && (
          <>
            <strong>{prodMessage.name}</strong> se eliminó correctamente!!
          </>
        )}
        {prodMessage.action === 'info' && <>{prodMessage.name}</>}
      </Alert>
    </Snackbar>
  )
}

export default Message
