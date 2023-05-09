import type { Meta, StoryObj } from '@storybook/react'

import { CheckMark } from './CheckMark'

const meta = {
  component: CheckMark,
} as Meta<typeof CheckMark>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Black',
  },
}
