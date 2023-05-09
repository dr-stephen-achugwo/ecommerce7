---
to: "<%= isPage ? `src/components/${filePath}/${fileName}Container/${fileName}Container.test.tsx` : null %>"
---
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { <%= fileName %>Container } from './<%= fileName %>Container'

import { renderSetup } from 'test/helper'

describe('<%= fileName %>Container', () => {
  it('should render correctly', () => {
    renderSetup(<<%= fileName %>Container />)  
    
    expect(screen.getByText('')).toBeInTheDocument()
  })
})
