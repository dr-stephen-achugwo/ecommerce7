import { describe, expect, it } from 'vitest'

import { getChooseClass } from './getChooseClass'

import s from 'components/ui/UiButton/UiButton.module.css'

describe('getChooseClass', () => {
  it('true', () => {
    expect(getChooseClass(true)).toBeUndefined()
  })

  it('false', () => {
    expect(getChooseClass(false)).toBe(s.notChoose)
  })

  it('undefined', () => {
    expect(getChooseClass(undefined)).toBeUndefined()
  })
})
