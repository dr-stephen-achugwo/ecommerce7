import { expect, jest } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { UiButton } from './UiButton'

const handleClick = jest.fn(() => {})

const meta = {
  component: UiButton,
} as Meta<typeof UiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Square: Story = {
  args: {
    button: { ariaLabel: 'test', type: 'square' },
    children: 'test',
  },
}

export const Circle: Story = {
  args: {
    button: { ariaLabel: 'test', type: 'circle' },
    children: 'test',
  },
}

export const CheckMark: Story = {
  args: {
    button: { ariaLabel: 'test', isCheckMark: true, type: 'circle' },
  },
}

export const Loading: Story = {
  args: {
    button: { ariaLabel: 'test', isLoading: true, type: 'square' },
  },
  parameters: { screenshot: { skip: true } },
}

export const HandleClick: Story = {
  args: {
    button: {
      ariaLabel: 'test',
      handleClick,
      type: 'square',
    },
    children: 'test',
  },
  parameters: { screenshot: { skip: true } },
}
HandleClick.play = ({ canvasElement }) => {
  const canvas = within(canvasElement)

  userEvent.click(canvas.getByRole('button', { name: 'test' }))
  expect(handleClick).toHaveBeenCalledTimes(1)
}
