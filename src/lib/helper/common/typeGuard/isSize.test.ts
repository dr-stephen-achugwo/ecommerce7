import { describe, expect, it } from 'vitest'

import { isSize } from './isSize'

describe('isSize', () => {
  it('must be true', () => {
    expect(isSize('S')).toBeTruthy()
  })

  it('must be false', () => {
    expect(isSize('foo')).toBeFalsy()
  })
})
