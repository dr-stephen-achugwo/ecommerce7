import { screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { describe, expect, it, vi } from 'vitest'

import { ColorAndSize } from './ColorAndSize'

import { renderSetup } from 'test/helper'
import { detail } from 'test/mock/testData'

vi.mock('next/router', () => require('next-router-mock'))

const setIsSoldOut = vi.fn()
const setVariantId = vi.fn()

describe('ColorAndSize', () => {
  it('should render correctly', () => {
    mockRouter.locale = 'ja'

    renderSetup(<ColorAndSize detail={detail} setIsSoldOut={setIsSoldOut} setVariantId={setVariantId} />)

    expect(screen.getByText('Color')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'White色を選択する' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Black色を選択する' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Grey色を選択する' })).toBeInTheDocument()
    expect(screen.getByText('Size')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Lサイズを選択する' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Mサイズを選択する' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sサイズを選択する' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Fサイズを選択する' })).toBeInTheDocument()
  })
})
