import type { Meta, StoryObj } from '@storybook/react'

import { Sun } from './Sun'

const meta = {
  component: Sun,
} as Meta<typeof Sun>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
