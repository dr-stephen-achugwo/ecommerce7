import type { Cart } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

export const getCurrentQuantity = (cartState: ReadonlyDeep<Cart>, itemId: string): number =>
  cartState.lineItems.find((lineItem) => lineItem.variant.id === itemId)?.quantity ?? 0
