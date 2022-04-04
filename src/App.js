import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Category from './pages/Category'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<Details />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  )
}

export default App
