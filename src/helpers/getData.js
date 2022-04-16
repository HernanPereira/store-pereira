import {
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
} from 'firebase/firestore'
import db from '../services/firebase'

/* -- Get Categories to Nav -- */
const getCategories = async () => {
  const items = collection(db, 'category')
  const categories = await getDocs(items)

  const cat = []
  categories.docs.map((category) =>
    cat.push({
      id: category.id,
      ...category.data(),
    })
  )
  return cat
}

/* -- Get All Products and by Category -- */
const getProducts = async (category) => {
  const prod = []

  const q = !category
    ? collection(db, 'products')
    : query(collection(db, 'products'), where('category.slug', '==', category))

  const products = await getDocs(q)

  products.docs.map((product) =>
    prod.push({
      id: product.id,
      ...product.data(),
    })
  )

  return prod
}

/* -- Get Product Detail -- */
const getProduct = async (id) => {
  const item = doc(db, 'products', id)
  const product = await getDoc(item)

  return product.exists() && { id: product.id, ...product.data() }
}

/* -- Get Categories by Slug -- */
const getCategoryBySlug = async (slug) => {
  const q = query(collection(db, 'category'), where('slug', '==', slug))
  const category = await getDocs(q)

  let title = ''
  category.forEach((doc) => (title = doc.data().title))

  return title
}

/* -- Get Order  -- */
const getOrder = async (id) => {
  const q = doc(db, 'orders', id)

  const res = await getDoc(q)
  return res.exists() && { id, data: res.data() }
}

/* -- Create an Order  -- */
const sendOrder = async (newOrder) => {
  const order = newOrder
  const orderCollection = collection(db, 'orders')
  const id = await addDoc(orderCollection, order).then(({ id }) => id)

  return id
}

/* -- Update Product Quantity -- */
const updateProductQty = async (id, qty) => {
  const batch = writeBatch(db)

  const item = doc(db, 'products', id)
  const prod = await getDoc(item)
  const { stock } = prod.data()
  const newStock = stock - qty

  batch.update(item, { stock: newStock })
  await batch.commit()
}

/* -- Update Products Quantity by Order -- */
const updateProduct = async (items) => {
  await Promise.all(
    items.map(async (item) => await updateProductQty(item.id, item.qty))
  )
}

export {
  getCategories,
  getProducts,
  getProduct,
  getCategoryBySlug,
  getOrder,
  sendOrder,
  updateProduct,
}
