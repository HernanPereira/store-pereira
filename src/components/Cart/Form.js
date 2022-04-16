import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Timestamp } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'

import { sendOrder, updateProduct } from '../../helpers/getData'

const Form = ({ cart, total }) => {
  const { clear, orders, setOrders } = useContext(CartContext)
  const date = new Date(Timestamp.now().seconds * 1000)
  const [orderId, setOrderId] = useState('')
  const navigate = useNavigate()

  const items = cart.map((prod) => {
    return {
      id: prod.item.id,
      title: prod.item.title,
      price: prod.item.price,
      qty: prod.qty,
    }
  })

  let newId

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    const order = {
      buyer: {
        name: data.Nombre,
        surname: data.Apellido,
        email: data.Email,
      },
      items,
      date,
      total,
    }
    newId = await sendOrder(order)
    setOrderId(newId)
    setOrders([...orders, newId])
    updateProduct(items)

    clear()
    reset()

    navigate('/orders')
  }
  // console.log(errors)

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="shop-form"
      >
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
            Información de Contacto: {orderId}
          </Typography>
          <FormGroup>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ backgroundColor: '#fff' }}
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
              fullWidth
            />
            {errors.Email?.type === 'required' && <p>Email es requerido</p>}
          </FormGroup>
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
          <FormGroup
            sx={{
              display: 'inline-flex',
              mb: 2,
              mr: { xs: '0', md: '1%' },
              width: { xs: '100%', md: '49%' },
            }}
          >
            <TextField
              label="Nombre"
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
              }}
              {...register('Nombre', { required: true, maxLength: 80 })}
            />
            {errors.Nombre?.type === 'required' && <p>Nombre es requerido</p>}
          </FormGroup>
          <FormGroup
            sx={{
              display: 'inline-flex',
              mb: 2,
              ml: { xs: '0', md: '1%' },
              width: { xs: '100%', md: '49%' },
            }}
          >
            <TextField
              label="Apellido"
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
              }}
              {...register('Apellido', { required: true, maxLength: 100 })}
            />
            {errors.Apellido?.type === 'required' && (
              <p>Apellido es requerido</p>
            )}
          </FormGroup>
          <Stack>
            <Button
              variant="contained"
              sx={{
                width: { xs: '100%', md: 'auto' },
              }}
              startIcon={<RocketLaunchOutlinedIcon />}
              type="submit"
            >
              Terminar la Compra
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Form
