import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/Detail/ItemDetailContainer'

import ItemListContainer from './components/List'

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <ItemListContainer />
        <ItemDetailContainer />
      </main>
    </>
  )
}

export default App
