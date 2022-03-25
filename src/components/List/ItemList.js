import Item from './Item'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

import onAdd from '../../helpers/onAdd'

const ItemList = ({ items }) => {
  return (
    <>
      {!items && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {items && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {items.slice(0, 3).map((item) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={item.id}>
                  <Item item={item} onAdd={onAdd} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      )}
    </>
  )
}

export default ItemList
