import { describe, expect, it } from 'vitest'

import { getColorAndSize } from './getColorAndSize'

const option = [
  { name: 'Color', value: 'Black' },
  { name: 'Size', value: 'S' },
]

describe('getColorAndSize', () => {
  it('color', () => {
    expect(getColorAndSize(option, 'Color')).toBe('Black')
  })

  it('size', () => {
    expect(getColorAndSize(option, 'Size')).toBe('S')
  })

  it('other case', () => {
    expect(getColorAndSize(option, 'Other')).toBe('')
  })
})
