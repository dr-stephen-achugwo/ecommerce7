import type { Meta, StoryObj } from '@storybook/react'

import { Minus } from './Minus'

const meta = {
  component: Minus,
} as Meta<typeof Minus>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
