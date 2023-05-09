import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { UiButton } from './UiButton'

import { renderSetup, userEventSetup } from 'test/helper'

describe('UiButton', () => {
  it('should handleClick be called', async () => {
    const user = userEventSetup()
    const handleClick = vi.fn()

    renderSetup(
      <UiButton
        button={{
          ariaLabel: 'ariaLabel',
          handleClick,
          type: 'square',
        }}
      >
        test
      </UiButton>,
    )

    await user.click(screen.getByRole('button', { name: 'ariaLabel' }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
