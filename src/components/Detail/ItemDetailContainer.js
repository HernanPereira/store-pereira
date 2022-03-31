import { useState, useEffect } from 'react'

import { getProduct } from '../../helpers/getAllProducts'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ id }) => {
  const [data, setData] = useState(null)

  const getData = async (id) => {
    try {
      const res = await getProduct(id)
      setData(res)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => {
    getData(id)
  }, [])

  return <ItemDetail detail={data} />
}

export default ItemDetailContainer
