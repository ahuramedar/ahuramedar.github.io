import { categories } from '../data/categories'
import { products } from '../data/products'

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id) || null
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getProductsByCategoryId(categoryId) {
  return products.filter((p) => p.categoryId === categoryId)
}

export function getLatestProducts(count = 10) {
  return [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, count)
}

/** Case/diacritic-agnostic-enough substring search across title, description, and category. */
export function searchProducts(query, list = products) {
  const q = query.trim()
  if (!q) return []
  return list.filter((p) => {
    const category = getCategoryById(p.categoryId)
    const haystack = `${p.title} ${p.shortDescription} ${category ? category.title : ''}`
    return haystack.includes(q)
  })
}
