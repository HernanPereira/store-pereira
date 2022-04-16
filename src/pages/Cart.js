import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { CartEmpty, CartList } from '../components/Cart'

import { CartContext } from '../context/CartContext'

import Form from '../components/Cart/Form'

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
              <>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container sx={{}}>
                    <Grid item xs={12} md={7} sx={{ pt: 6 }}>
                      <Form
                        cart={cart}
                        total={Number(
                          priceFormat(Number(total) * TAX_RATE + Number(total))
                        )}
                      />
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
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Cart
