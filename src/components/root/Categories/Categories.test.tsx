import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Categories } from './Categories'

import { renderSetup } from 'test/helper'

vi.mock('next/router', () => require('next-router-mock'))

describe('Categories', () => {
  it('should render correctly', () => {
    renderSetup(<Categories />)

    expect(screen.getByLabelText('NEW ARRIVALを表示する').innerHTML).toBe('NEW ARRIVAL')
    expect(screen.getByLabelText('DRESSを表示する').innerHTML).toBe('DRESS')
    expect(screen.getByLabelText('SKIRT/PANTSを表示する').innerHTML).toBe('SKIRT/PANTS')
    expect(screen.getByLabelText('SHIRT/BLOUSEを表示する').innerHTML).toBe('SHIRT/BLOUSE')
    expect(screen.getByLabelText('CUTSEWを表示する').innerHTML).toBe('CUTSEW')
    expect(screen.getByLabelText('JACKET/OUTERWEARを表示する').innerHTML).toBe('JACKET/OUTERWEAR')
    expect(screen.getByLabelText('BAG/POUCHを表示する').innerHTML).toBe('BAG/POUCH')
    expect(screen.getByLabelText('ACCESSORYを表示する').innerHTML).toBe('ACCESSORY')
    expect(screen.getByLabelText('COSMETICを表示する').innerHTML).toBe('COSMETIC')
  })
})
