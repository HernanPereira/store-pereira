import { useState, useEffect } from 'react'

import { getAllProducts } from '../../helpers/getAllProducts'
import ItemList from './ItemList'

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState(null)

  const getData = async () => {
    try {
      const data = await getAllProducts(category)
      setProducts(data)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => getData(), [category])

  return <ItemList items={products} />
}

export default ItemListContainer
