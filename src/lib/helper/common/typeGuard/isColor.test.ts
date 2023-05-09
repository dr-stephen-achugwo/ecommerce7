import { describe, expect, it } from 'vitest'

import { isColor } from './isColor'

describe('isColor', () => {
  it('must be true', () => {
    expect(isColor('Black')).toBeTruthy()
  })

  it('must be false', () => {
    expect(isColor('foo')).toBeFalsy()
  })
})
