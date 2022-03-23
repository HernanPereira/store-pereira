import allProducts from '../data/products'

const getAllProducts = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(allProducts), 2000))

export default getAllProducts
