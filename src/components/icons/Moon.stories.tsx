import type { Meta, StoryObj } from '@storybook/react'

import { Moon } from './Moon'

const meta = {
  component: Moon,
} as Meta<typeof Moon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
