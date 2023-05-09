import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'

const meta = {
  component: Heading,
} as Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
  },
}

export const Ja: Story = {
  args: {
    children:
      '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。',
  },
}
