import allProducts from '../data/products'

/*
Get products All or by Category
*/
const getAllProducts = (searchCategory) => {
  const getByCategory = allProducts.filter((item) => {
    return item.category.id === Number(searchCategory) ? item : null
  })

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      !searchCategory ? resolve(allProducts) : resolve(getByCategory)
    }, 2000)
  )
}

/*
Get by product ID
*/
const getProduct = (id = 0) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(allProducts[id]), 2000)
  )

/*
Get categories for menu
*/
const getCategories = () => {
  const filteredArr = allProducts.reduce((acc, current) => {
    const x = acc.find((item) => item.category.id === current.category.id)
    return !x ? acc.concat([current]) : acc
  }, []).map(item => item.category)

  return filteredArr
}


/*
Get category name
*/
const getCategoryName = (categoryId) => {
  const grayWizard = allProducts.find(
    (item) => item.category.id === Number(categoryId)
  )

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(grayWizard.category.title), 2000)
  })
}

export { getAllProducts, getProduct, getCategories, getCategoryName }
