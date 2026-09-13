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
    slug: 'volum-220v-general-purpose',
    title: 'ولوم 220 ولت همه کاره',
    shortDescription: 'مناسب کارهای روزمره',

    details: `خط اول توضیحات
    
    خط دوم توضیحات
    خط سوم
    خط چهارم
    خط پنجم
    
    خط ششم`,

    price: 500000,

    availability: 'موجود',

    categoryId: 1,

    images: [
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-1.jpg',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-2.jpg',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-3.jpg',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-4.jpg',
      '/images/products/volum-220v-general-purpose/volum-220v-general-purpose-5.jpg',
    ],

    createdAt: '2026-08-30',
  },
]
