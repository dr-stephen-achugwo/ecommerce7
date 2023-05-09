---
to: "<%= isFunction ? `src/lib/helper/${filePath}/${fileName}.test.ts` : null %>"
---
import { describe, expect, it } from 'vitest'

import { <%= fileName %> } from './<%= fileName %>'

describe('<%= fileName %>', () => {
  it('', () => {
    expect(<%= fileName %>()).toBe()
  })
})
