---
to: "<%= isComponent ? `src/components/${filePath}/${fileName}/${fileName}.test.tsx` : null %>"
---
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { <%= fileName %> } from './<%= fileName %>'

import { renderSetup } from 'test/helper'

describe('<%= fileName %>', () => {
  it('should render correctly', () => {
    renderSetup(<<%= fileName %> />)

    expect(screen.getByText('')).toBeInTheDocument()
  })
})
