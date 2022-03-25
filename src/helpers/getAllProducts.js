import allProducts from '../data/products'

const getAllProducts = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(allProducts), 2000))

const getProduct = (id = 0) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(allProducts[id]), 2000)
  )

export { getAllProducts, getProduct }
