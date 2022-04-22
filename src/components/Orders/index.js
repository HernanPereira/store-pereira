import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'

const OrderDetails = ({ handleClose, viewOrder }) => {
  const { id } = viewOrder
  const { total, date } = viewOrder.data
  const { name, surname, email, address, cp, province, country } =
    viewOrder.data.buyer

  return (
    <>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <Typography sx={{ flex: 1 }} variant="h6" component="div">
            ID de la compra: {id}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <List sx={{ ml: 1 }}>
        <ListSubheader sx={{ lineHeight: '1rem', mt: 4 }}>
          Mis Datos
        </ListSubheader>
        {/* {<pre>{JSON.stringify(viewOrder, null, 2)}</pre>} */}

        <ListItem>
          <ListItemText
            primary={`${name} ${surname} (${email})`}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Dirección:{' '}
                </Typography>
                {address && `${address}, `}
                {province && `${province}, `}
                {country && country}
                {cp && ` (CP: ${cp})`}
              </>
            }
          />
        </ListItem>
        <Divider />

        <ListSubheader sx={{ lineHeight: '1rem', mt: 4 }}>
          Mis Productos
        </ListSubheader>

        {viewOrder.data.items.map((prod) => (
          <div key={prod.id}>
            <ListItem>
              <ListItemText
                primary={prod.title}
                secondary={`Cantidad: ${prod.qty}, Precio por unidad: $${prod.price}`}
              />
            </ListItem>
            <Divider />
          </div>
        ))}

        <ListSubheader sx={{ lineHeight: '1rem', mt: 4 }}>
          Más info
        </ListSubheader>

        <ListItem>
          <ListItemText
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Fecha:{' '}
                </Typography>
                {date.toDate().toLocaleString('en-GB', {
                  timeZone: 'America/Buenos_Aires',
                })}
                <br />
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Total:{' '}
                </Typography>
                {`$${total}`}
              </>
            }
          />
        </ListItem>
      </List>
    </>
  )
}

export default OrderDetails
