import { describe, expect, it } from 'vitest'

import { getItems } from './getItems'

import { products } from 'test/mock/products'

describe('getDetail', () => {
  it('return item', () => {
    // @ts-expect-error
    expect(getItems(products)).toStrictEqual([
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MDgxNzE4NjAxNDc=',
        images: [
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black1.jpg?v=1617433045',
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black2.jpg?v=1617433045',
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white1.jpg?v=1617433045',
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white2.jpg?v=1617433045',
        ],
        price: '9350',
        productType: 'CUTSEW',
        title: 'Europe bouquet LONG-T',
      },
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MDgxNzE4NjAxNDc=',
        images: [
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black1.jpg?v=1617433045',
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black2.jpg?v=1617433045',
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white1.jpg?v=1617433045',
          'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white2.jpg?v=1617433045',
        ],
        price: '9350',
        productType: 'CUTSEW',
        title: 'Europe bouquet LONG-T',
      },
    ])
  })
})
