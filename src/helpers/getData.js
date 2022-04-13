import {
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where,
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

export { getCategories, getProducts, getProduct, getCategoryBySlug }
