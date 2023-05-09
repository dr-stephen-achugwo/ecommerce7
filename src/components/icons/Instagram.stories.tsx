import type { Meta, StoryObj } from '@storybook/react'

import { Instagram } from './Instagram'

const meta = {
  component: Instagram,
} as Meta<typeof Instagram>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
