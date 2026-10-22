# الکترونیک‌مارکت — کاتالوگ محصولات الکترونیکی

A Persian (RTL) product catalog for electronic components — Vue 3 + Vite + Vue Router + Tailwind CSS v4. Frontend-only: no backend, no cart, no checkout. Users browse, search, and contact the business to buy.

## Getting started

```bash
npm install
npm run dev
```

Then build for production with:

```bash
npm run build
```

The built files land in `dist/` and can be deployed to any static host.

## Where to edit things

| What | File |
| --- | --- |
| Site name, phone, Telegram | `src/config/site.js` |
| Categories | `src/data/categories.js` |
| Products | `src/data/products.js` |
| Logo | `src/components/icons/LogoMark.vue` (also mirrored in `public/favicon.svg`) |

### Adding a product

Append an object to the array in `src/data/products.js`. Every page (home, category, all-products, search) picks it up automatically — nothing else needs to change.

The `details` field is free-form text: write the description, specs, and notes however you like, with blank lines and line breaks — they're preserved exactly as typed on the product page.

### Product images

Products reference image paths like `/images/products/your-image.jpg`, which should be placed in `public/images/products/`. No sample images are included — until a real photo is added, the site automatically shows a neutral placeholder icon instead of a broken image, so nothing looks unfinished.

### Adding a category

Append an object to `src/data/categories.js` (`id`, `slug`, `title`, `description`). It will appear on the homepage, `/categories`, and the header/footer automatically.

## Notes

- Design system: Emerald 600 primary, Slate neutrals, full light/dark mode (toggle persists in `localStorage`).
- Discovery is intentionally limited to **search + categories** — no filters, cart, or checkout, per the brief.
- Font: Vazirmatn, loaded from Google Fonts in `index.html`.
