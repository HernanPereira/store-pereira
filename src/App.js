import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './components/NavBar'
// import ItemListContainer from './components/Items/ItemListContainer'

import ItemListContainer from './components/List'

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <ItemListContainer />
      </main>
    </>
  )
}

export default App
