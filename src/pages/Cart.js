import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import { CartEmpty, CartList } from '../components/Cart'

import { CartContext } from '../context/CartContext'
import { country, province, city } from '../data/address'

const Cart = () => {
  const { cart, total, setTotal, priceFormat, cartTotal, TAX_RATE, clear } =
    useContext(CartContext)

  useEffect(() => setTotal(priceFormat(cartTotal(cart))), [cart])

  return (
    <>
      <Box
        sx={{
          minHeight: { xs: 'calc(100vh - 110px)', md: 'calc(100vh - 123px)' },
          display: 'flex',
        }}
        component="main"
      >
        <Container>
          <Box
            sx={{
              height: '100%',
            }}
          >
            {cart.length <= 0 ? (
              <CartEmpty />
            ) : (
              <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{}}>
                  <Grid item xs={12} md={7} sx={{ pt: 6 }}>
                    <Box component="form" noValidate autoComplete="off">
                      <Box
                        sx={{
                          mr: { xs: 0, md: 4 },
                          p: 5,
                          backgroundColor: '#f5f5f5',
                          width: 'auto',
                          borderRadius: 1,
                        }}
                      >
                        <Typography
                          component="h6"
                          variant="h5"
                          align="left"
                          color="text.primary"
                          gutterBottom
                          sx={{ mb: 2 }}
                        >
                          Información de Contacto
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          sx={{ backgroundColor: '#fff', mb: 2 }}
                          fullWidth
                        />
                        <Typography
                          component="h6"
                          variant="h5"
                          align="left"
                          color="text.primary"
                          gutterBottom
                          sx={{ mt: 2, mb: 2 }}
                        >
                          Dirección de envío
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          label="Nombre"
                          variant="outlined"
                          sx={{
                            backgroundColor: '#fff',
                            mb: 2,
                            mr: { xs: '0', md: '1%' },
                            width: { xs: '100%', md: '49%' },
                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Apellido"
                          variant="outlined"
                          sx={{
                            backgroundColor: '#fff',
                            mb: 2,
                            ml: { xs: '0', md: '1%' },
                            width: { xs: '100%', md: '49%' },
                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Dirección"
                          variant="outlined"
                          sx={{ backgroundColor: '#fff', mb: 2 }}
                          fullWidth
                        />
                        <Autocomplete
                          disablePortal
                          id="combo-city"
                          options={city}
                          variant="outlined"
                          sx={{ backgroundColor: '#fff', mb: 2 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Ciudad" />
                          )}
                          fullWidth
                        />
                        <Autocomplete
                          disablePortal
                          id="combo-country"
                          options={country}
                          variant="outlined"
                          sx={{
                            backgroundColor: '#fff',
                            mb: 2,
                            mr: { xs: '0', md: '1%' },
                            width: { xs: '100%', md: '33%' },
                            display: 'inline-flex',
                          }}
                          renderInput={(params) => (
                            <TextField {...params} label="País" />
                          )}
                        />
                        <Autocomplete
                          disablePortal
                          id="combo-province"
                          options={province}
                          variant="outlined"
                          sx={{
                            backgroundColor: '#fff',
                            mb: 2,
                            mr: { xs: '0', md: '1%' },
                            width: { xs: '100%', md: '33%' },
                            display: 'inline-flex',
                          }}
                          renderInput={(params) => (
                            <TextField {...params} label="Provincia" />
                          )}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Código Postal"
                          variant="outlined"
                          sx={{
                            backgroundColor: '#fff',
                            mb: 2,
                            width: { xs: '100%', md: '32%' },
                          }}
                        />
                        <Stack>
                          <Button
                            variant="contained"
                            sx={{
                              width: { xs: '100%', md: 'auto' },
                            }}
                            startIcon={<RocketLaunchOutlinedIcon />}
                          >
                            Terminar la Compra
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5} sx={{ pt: 6 }}>
                    <>
                      <div>
                        {cart.map(({ item, qty }) => (
                          <CartList key={item.id} item={item} qty={qty} />
                        ))}
                      </div>
                      <Stack sx={{ p: 2, pl: 9 }}>
                        <Grid>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                              mb: 2,
                            }}
                          >
                            <div>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                component={'span'}
                              >
                                Impuesto país
                              </Typography>{' '}
                              😡
                            </div>
                            <div>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {TAX_RATE * 100}%
                              </Typography>
                            </div>
                          </Box>
                        </Grid>
                        <Grid>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                              mb: 2,
                            }}
                          >
                            <div>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Subtotal
                              </Typography>
                            </div>
                            <div>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                ${total}
                              </Typography>
                            </div>
                          </Box>
                        </Grid>
                        <Grid>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                              fontWeight: 'bold',
                            }}
                          >
                            <div>Total</div>
                            <div>
                              $
                              {priceFormat(
                                Number(total) * TAX_RATE + Number(total)
                              )}
                            </div>
                          </Box>
                        </Grid>
                      </Stack>
                      <Stack
                        sx={{
                          p: 2,
                          mt: 2,
                          borderTop: '1px solid #f0f0f0',
                        }}
                      >
                        <Button
                          variant="outlined"
                          onClick={clear}
                          sx={{
                            width: { xs: '100%', md: 'auto' },
                            mb: 2,
                          }}
                        >
                          Vaciar carrito
                        </Button>
                        <Button
                          variant="contained"
                          component={Link}
                          to={'/'}
                          sx={{
                            width: { xs: '100%', md: 'auto' },
                          }}
                          startIcon={<ShoppingCartOutlinedIcon />}
                        >
                          Continuar Comprando
                        </Button>
                      </Stack>
                    </>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Cart
