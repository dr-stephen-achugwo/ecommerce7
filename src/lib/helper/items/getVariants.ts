import type { ProductVariant } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

import { config } from 'lib/config'
import { isColor, isSize } from 'lib/helper/common'
import type { Variant } from 'lib/type/Type'

export const getVariants = (productVariants: ReadonlyDeep<ProductVariant[]>): ReadonlyDeep<Variant>[] =>
  productVariants.flatMap((productVariant) => {
    const color = productVariant.selectedOptions.find((option) => option.name === 'Color')?.value
    const size = productVariant.selectedOptions.find((option) => option.name === 'Size')?.value

    if (color === undefined || color === '' || size === undefined || size === '') return []

    const variant: ReadonlyDeep<Variant> = {
      available: productVariant.available,
      color: isColor(color) ? color : config.defaultColor,
      id: `${productVariant.id}`,
      size: isSize(size) ? size : config.defaultSize,
    }
    return [variant]
  })
