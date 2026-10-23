// Add new products by appending another object to this array — every
// listing page (home, category, all-products, search) reads from here
// automatically. No other file needs to change.
//
// `details` is free-form text written by the shop owner: description,
// specs, notes — whatever is useful. It is rendered as-is, with line
// breaks preserved, in a single unified section on the product page.

export const products = [
  {
    id: 1,
    slug: 'volum-220v',
    title: 'ولوم 220 ولت',
    shortDescription: 'مناسب کارهای روزمره',

    details: ``,

    price: 500000,

    availability: 'موجود',

    categoryId: 2,

    images: [
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-1.png',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-2.png',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-3.png',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-4.png',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-5.png',
    ],

    createdAt: '10/22/2026',
  },
]
