import { NavLink, Link } from 'react-router-dom'

import React, { useState } from 'react'
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
import ContactWidget from './ContactWidget'

import { getCategories } from '../../helpers/getAllProducts'

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const categoryArr = getCategories()
  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)

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
              {categoryArr.map(({ id, title }) => (
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={NavLink}
                  key={id}
                  to={`/category/${id}`}
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
                {categoryArr.map(({ id, title }) => (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Button component={NavLink} to={`/category/${id}`}>
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

            <ContactWidget />
            <CartWidget />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default NavBar
