import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './components/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <ItemListContainer
          heading="Welcome"
          greeting="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </main>
    </>
  )
}

export default App
