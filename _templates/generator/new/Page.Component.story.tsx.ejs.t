---
to: "<%= isPage ? `src/components/${filePath}/${fileName}Container/${fileName}Container.stories.tsx` : null %>"
---
import type { Meta, StoryObj } from '@storybook/react'

import { <%= fileName %>Container } from './<%= fileName %>Container'

const meta = {
  component: <%= fileName %>Container,
} as Meta<typeof <%= fileName %>Container>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    
  }
}
