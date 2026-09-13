const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

/** Converts any western digits in a string/number to Persian digits. */
export function toPersianDigits(value) {
  return String(value).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[Number(d)])
}

/** Formats a whole-number toman price with thousands separators and Persian digits. */
export function formatPrice(price) {
  const withSeparators = Number(price).toLocaleString('en-US')
  return toPersianDigits(withSeparators)
}

/** Formats an item count as Persian text, e.g. "۱۲ محصول" / "بدون محصول". */
export function formatProductCount(count) {
  if (count === 0) return 'بدون محصول'
  return `${toPersianDigits(count)} محصول`
}
