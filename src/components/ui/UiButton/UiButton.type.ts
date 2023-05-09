import type { Color } from 'lib/type/Type'

type ButtonSize = 'large' | 'small'

type Button = {
  ariaLabel?: string
  handleClick?: () => Promise<void> | void
  isDisabled?: boolean
  isLoading?: boolean
  isUnfocus?: boolean
}

export type DefaultButton = Button & { className?: string; type: 'default' }

export type CircleButton = Button & {
  color?: Color
  colorState?: Color
  isCheckMark?: boolean
  isChoose?: boolean
  isReverse?: boolean
  size?: ButtonSize
  type: 'circle'
}

export type SquareButton = Button & { isReverse?: boolean; size?: ButtonSize; type: 'square' }
