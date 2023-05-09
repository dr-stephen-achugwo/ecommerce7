---
to: "<%= isComponent ? `src/components/${filePath}/${fileName}/${fileName}.stories.tsx` : null %>"
---
import type { Meta, StoryObj } from '@storybook/react'

import { <%= fileName %> } from './<%= fileName %>'

const meta = {
  component: <%= fileName %>,
} as Meta<typeof <%= fileName %>>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    
  }
}