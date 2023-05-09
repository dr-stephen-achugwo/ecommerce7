import type { Product } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

import type { ItemType } from 'lib/type/Type'

export const getItems = (products: ReadonlyDeep<Product[]>): ReadonlyDeep<ItemType>[] =>
  products.map((product) => ({
    id: `${product.id}`,
    images: product.images.map((image) => image.src),
    price: product.variants[0] ? product.variants[0].price : '',
    productType: product.productType,
    title: product.title,
  }))
