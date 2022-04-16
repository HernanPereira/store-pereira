import { useState, useEffect, useContext } from 'react'

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

import { getOrder } from '../helpers/getData'
import { CartContext } from '../context/CartContext'

const Orders = () => {
  const [data, setData] = useState([])
  const { orders } = useContext(CartContext)

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

  useEffect(() => getOrderFirebase(), [])

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
              Aun no tienes ordenes de compre
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="Tabla de ordenes">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Mis Datos</TableCell>
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
                      <TableCell>{order.id}</TableCell>
                      <TableCell>
                        {order.data.buyer.name} {order.data.buyer.surname} (
                        {order.data.buyer.email})
                      </TableCell>
                      <TableCell>
                        {order.data.items.map((item, i) => (
                          <div key={i}>
                            {item.title} (cant. {item.qty})
                          </div>
                        ))}
                      </TableCell>
                      <TableCell align="right">
                        <strong>{order.data.total}</strong>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default Orders
