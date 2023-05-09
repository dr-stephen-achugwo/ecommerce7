import { describe, expect, it } from 'vitest'

import { getDetail } from './getDetail'

import { item } from 'test/mock/item'

describe('getDetail', () => {
  it('return item', () => {
    // @ts-expect-error
    const detail = getDetail(item)
    expect(detail.descriptionHtml).toBe(
      '<p>サイズ</p>\n<p>S</p>\n<p><meta charset="utf-8"><span>着丈：<meta charset="utf-8">65cm</span></p>\n<p><span><meta charset="utf-8">身幅：49cm</span></p>\n<p><span>袖丈：59cm</span></p>\n<p>L</p>\n<p><span>着丈：73cm</span></p>\n<p><span><meta charset="utf-8">身幅：55cm</span></p>\n<p><span>袖丈：62cm</span></p>',
    )
    expect(detail.images).toStrictEqual([
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black2.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white2.jpg?v=1617433045',
    ])
    expect(detail.price).toBe('9350')
    expect(detail.title).toBe('Europe bouquet LONG-T')
    expect(detail.variants).toStrictEqual([
      {
        available: true,
        color: 'Black',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzc5MDM4Nw==',
        size: 'S',
      },
      {
        available: true,
        color: 'White',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzgyMzE1NQ==',
        size: 'S',
      },
      {
        available: true,
        color: 'Black',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzkyMTQ1OQ==',
        size: 'L',
      },
      {
        available: false,
        color: 'White',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzk1NDIyNw==',
        size: 'L',
      },
    ])
    expect(detail.productType).toBe('CUTSEW')
  })
})
