import { screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { describe, expect, it } from 'vitest'

import { UiLink } from './UiLink'
import type { NextLink } from './UiLink.type'

import { renderSetup, userEventSetup } from 'test/helper'

const link: NextLink = {
  ariaLabel: 'ariaLabel',
  href: '/href',
  label: 'label',
  type: 'next',
}

describe('UiLink', () => {
  it('next/link test', async () => {
    const user = userEventSetup()

    renderSetup(<UiLink link={link} />)

    await user.click(screen.getByRole('link', { name: 'ariaLabel' }))
    expect(mockRouter.asPath).toEqual('/href')
  })
})
