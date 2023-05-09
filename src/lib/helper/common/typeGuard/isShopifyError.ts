/* eslint-disable @susisu/safe-typescript/no-unsafe-object-property-check */
import type { ShopifyErrType } from 'lib/type/Type'

export const isShopifyError = (err: unknown): err is ShopifyErrType =>
  typeof err === 'object' && err !== null && 'extensions' in err && 'locations' in err && 'message' in err
