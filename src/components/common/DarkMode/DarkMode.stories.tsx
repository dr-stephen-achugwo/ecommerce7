import type { Meta, StoryObj } from '@storybook/react'

import { DarkMode } from './DarkMode'

const meta = {
  component: DarkMode,
} as Meta<typeof DarkMode>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
