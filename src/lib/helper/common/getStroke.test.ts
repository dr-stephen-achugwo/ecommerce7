import { describe, expect, it } from 'vitest'

import { getStroke } from './getStroke'

describe('getStroke', () => {
  describe('theme is dark', () => {
    it('color is Black', () => {
      expect(getStroke('dark', 'Black')).toBe('white')
    })

    it('color is White', () => {
      expect(getStroke('dark', 'White')).toBe('currentColor')
    })

    it('color is Ivory', () => {
      expect(getStroke('dark', 'Ivory')).toBe('currentColor')
    })

    it('undefined', () => {
      expect(getStroke('dark', undefined)).toBe('currentColor')
    })
  })

  describe('theme is light', () => {
    it('color is Black', () => {
      expect(getStroke('light', 'Black')).toBe('currentColor')
    })

    it('color is White', () => {
      expect(getStroke('light', 'White')).toBe('black')
    })

    it('color is Ivory', () => {
      expect(getStroke('light', 'Ivory')).toBe('black')
    })

    it('undefined', () => {
      expect(getStroke('light', undefined)).toBe('currentColor')
    })
  })

  describe('other case', () => {
    it('color is Black', () => {
      expect(getStroke(undefined, 'Black')).toBe('currentColor')
    })

    it('color is White', () => {
      expect(getStroke(undefined, 'White')).toBe('black')
    })

    it('undefined', () => {
      expect(getStroke(undefined, undefined)).toBe('currentColor')
    })
  })
})
