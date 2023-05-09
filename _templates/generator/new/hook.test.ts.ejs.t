---
to: "<%= isHook ? `src/lib/hooks/${filePath}/${fileName}.test.ts` : null %>"
---
import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { <%= fileName %> } from './<%= fileName %>'

describe('<%= fileName %>', () => {
  it('', () => {
    const { result } = renderHook(() => <%= fileName %>())
    expect(result.current.).toBe()
  })
})
