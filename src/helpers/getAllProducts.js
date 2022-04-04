import allProducts from '../data/shoes'

/*
Get products All or by Category
*/
const getAllProducts = (searchCategory) => {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)
  const newList = shuffle(allProducts)

  const getByCategory = allProducts.filter((item) => {
    return item.category.id === Number(searchCategory) ? item : null
  })

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      !searchCategory ? resolve(newList) : resolve(getByCategory)
    }, 2000)
  )
}

/*
Get by product ID
*/
const getProduct = (id = 0) => {
  const product = allProducts.find((item) => item.id === Number(id))

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(product), 2000)
  })
}

/*
Get categories for menu
*/
const getCategories = () => {
  const filteredArr = allProducts
    .reduce((acc, current) => {
      const x = acc.find((item) => item.category.id === current.category.id)
      return !x ? acc.concat([current]) : acc
    }, [])
    .map((item) => item.category)

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
