import type { Cart } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

export const getCartItemId = (cartState: ReadonlyDeep<Cart>, itemId: string): string => {
  const cartItemId = cartState.lineItems.find((lineItem) => lineItem.variant.id === itemId)?.id
  return cartItemId !== undefined && cartItemId !== 0 && cartItemId !== '' ? `${cartItemId}` : ''
}
