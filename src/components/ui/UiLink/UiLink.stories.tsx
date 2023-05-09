import type { Meta, StoryObj } from '@storybook/react'

import { UiLink } from './UiLink'

import { paths } from 'lib/paths'

const meta = {
  component: UiLink,
} as Meta<typeof UiLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    link: {
      ariaLabel: 'ariaLabel',
      href: `${paths.items}/test`,
      label: 'label',
      type: 'next',
    },
  },
}
