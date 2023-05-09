import type { Meta, StoryObj } from '@storybook/react'

import { Twitter } from './Twitter'

const meta = {
  component: Twitter,
} as Meta<typeof Twitter>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
