import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getProduct } from '../../helpers/getData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ id }) => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const getProductFirebase = async (id) => {
    try {
      const res = await getProduct(id)
      !res && navigate('/NotFound')
      setData(res)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => getProductFirebase(id), [])

  return <ItemDetail detail={data} />
}

export default ItemDetailContainer
