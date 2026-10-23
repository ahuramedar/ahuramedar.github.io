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
    slug: 'dimmer-220v',
    title: 'دیمر 220 ولت',
    shortDescription: 'مناسب کارهای روزمره',

    details: `این دیمر از طریق برق 220 ولت شهر تغذیه میکند و میتواند توسط ولوم تعبیه شده بر روی برد از ولتاژ 220 ولت به پائین را در خروجی خود با توان 1800W~2000W برقرار نماید
    
    روش استفاده محصول:
    محصول سری در مدار قرار میگیرد
    سیم آبی ورودی برق و سیم سبز خروجی است
    
    کاربرد:
    کنترل سرعت انواع موتور 
    پمپ تک فاز تا 2000وات
    کنترل روشنایی انواع لامپ های رشته ای LED بدون درایور داخلی 
    کنترل حرارت المنت های تک فاز تا 2000وات
    کنترل سرعت فرز، دریل یا هواکش و...
    
    نکات استفاده:
    مدار تحمل جریان تا 2000W را دارا میباشد ولی در صورت استفاده مداوم عمر محصول کاهش پبدا میکند و بهتر است بیش از 1800W استفاده نشود`,

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
