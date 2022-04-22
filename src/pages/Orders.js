import { useState, useEffect, useContext, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'

import sluglify from '../helpers'

import OrderDetails from '../components/Orders'

import { getOrder } from '../helpers/getData'
import { CartContext } from '../context/CartContext'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Orders = () => {
  const [data, setData] = useState([])
  const [viewOrder, setViewOrder] = useState({})
  const { orders } = useContext(CartContext)

  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const getOrderFirebase = async () => {
    try {
      const res = await Promise.all(
        orders.map(async (order) => await getOrder(order))
      )
      setData(res)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  const getOrderByID = (id) => {
    const res = data.find((or) => or.id === id)
    setViewOrder(res)
  }

  useEffect(() => {
    getOrderFirebase()
  }, [])

  return (
    <Box sx={{ pt: 8, pb: 6, minHeight: '90vh' }} component="main">
      <Container maxWidth="lg">
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Mis Compras
          </Typography>

          {data.length < 1 ? (
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Aun no tienes ordenes de compra
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="Tabla de ordenes">
                <TableHead>
                  <TableRow>
                    <TableCell>ID de la compra</TableCell>
                    <TableCell>Fecha de la compra</TableCell>
                    <TableCell>Productos</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {data.map((order) => (
                    <TableRow
                      key={order.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell>
                        <Button
                          variant="text"
                          onClick={() => {
                            handleClickOpen()
                            getOrderByID(order.id)
                          }}
                        >
                          {order.id}
                        </Button>
                      </TableCell>
                      <TableCell>
                        {order.data.date.toDate().toLocaleDateString('en-GB', {
                          timeZone: 'America/Buenos_Aires',
                        })}
                      </TableCell>
                      <TableCell>
                        {order.data.items.map((item) => {
                          const slug = sluglify(item.title)

                          return (
                            <Typography
                              key={item.id}
                              component={Link}
                              to={`/item/${slug}`}
                              state={{ id: item.id }}
                              variant="body2"
                              color="text.primary"
                              noWrap
                              gutterBottom
                              sx={{
                                display: 'block',
                                textDecoration: 'none',
                              }}
                            >
                              {item.title}
                            </Typography>
                          )
                        })}
                      </TableCell>
                      <TableCell align="right">
                        <strong>${order.data.total}</strong>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Container>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <OrderDetails handleClose={handleClose} viewOrder={viewOrder} />
      </Dialog>
    </Box>
  )
}

export default Orders
