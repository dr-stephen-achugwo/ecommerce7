import type { Product } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

import { getVariants } from 'lib/helper/items'
import type { Detail } from 'lib/type/Type'

export const getDetail = (product: ReadonlyDeep<Product>): ReadonlyDeep<Detail> => ({
  description: product.description,
  descriptionHtml: product.descriptionHtml,
  id: `${product.id}`,
  images: product.images.map((image) => image.src),
  price: product.variants[0] ? product.variants[0].price : '',
  productType: product.productType,
  title: product.title,
  variants: getVariants(product.variants),
})
