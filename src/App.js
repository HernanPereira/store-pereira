import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <Container>
          <p>Store Content</p>
        </Container>
      </main>
    </>
  )
}

export default App
