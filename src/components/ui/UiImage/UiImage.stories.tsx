import type { Meta, StoryObj } from '@storybook/react'

import { UiImage } from './UiImage'

const meta = {
  component: UiImage,
} as Meta<typeof UiImage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    alt: 'alt',
    height: 500,
    priority: false,
    src: '/brand2.jpg',
    type: 'default',
    width: 500,
  },
}
