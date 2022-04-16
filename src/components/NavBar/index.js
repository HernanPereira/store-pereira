import { NavLink, Link } from 'react-router-dom'

import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import CardMedia from '@mui/material/CardMedia'

import CartWidget from './CartWidget'
import OrderWidget from './OrderWidget'

import { getCategories } from '../../helpers/getData'

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [categories, setCategories] = useState([])

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)

  const getCategoriesFirebase = async () => {
    try {
      const data = await getCategories()
      setCategories(data)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
  useEffect(() => getCategoriesFirebase(), [])

  return (
    <>
      <AppBar position="sticky">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              to="/"
            >
              <CardMedia
                component="img"
                sx={{
                  maxWidth: 70,
                }}
                image={'/shoes.svg'}
                alt={'Store'}
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {categories.map(({ id, slug, title }) => (
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={NavLink}
                  key={id}
                  to={`/category/${slug}`}
                >
                  {title}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {categories.map(({ id, slug, title }) => (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Button component={NavLink} to={`/category/${slug}`}>
                      {title}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              to="/"
            >
              <CardMedia
                component="img"
                sx={{
                  flexGrow: 1,
                  maxWidth: 50,
                  display: { xs: 'flex', md: 'none' },
                }}
                image={'/shoes.svg'}
                alt={'title'}
              />
            </Typography>

            <OrderWidget />
            <CartWidget />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default NavBar
