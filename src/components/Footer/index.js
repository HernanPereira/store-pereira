import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222' }}>
      <Container>
        <Box sx={{ pt: 2, pb: 2, color: '#fff', height: 54 }}>
          <Typography align="center" sx={{ fontSize: 14 }}>
            &copy; Hernán Pereira
          </Typography>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
