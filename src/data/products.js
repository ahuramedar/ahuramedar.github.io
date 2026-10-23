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

    details: `این دیمر از طریق برق 220 ولت شهر تغذیه میکند و میتواند توسط ولوم تعبیه شده بر روی برد از ولتاژ 220 ولت به پائین را در خروجی خود با توان تا 1800W برقرار نماید
    
    روش استفاده محصول:
    محصول سری در مدار قرار میگیرد
    سیم آبی ورودی برق و سیم سبز خروجی است`,

    price: 400000,

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
