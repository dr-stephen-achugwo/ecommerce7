import type { Meta, StoryObj } from '@storybook/react'

import { Github } from './Github'

const meta = {
  component: Github,
} as Meta<typeof Github>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
