import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Category from './pages/Category'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'

import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CssBaseline />
        <NavBar />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:slug" element={<Details />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
