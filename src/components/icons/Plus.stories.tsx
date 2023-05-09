import type { Meta, StoryObj } from '@storybook/react'

import { Plus } from './Plus'

const meta = {
  component: Plus,
} as Meta<typeof Plus>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
