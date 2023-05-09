/* eslint-disable react/no-unused-prop-types */
import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'
import { forwardRef, memo } from 'react'

import { CheckMark } from 'components/icons'
import type { CircleButton, DefaultButton, SquareButton } from 'components/ui'
import { cn, getButtonClass } from 'lib/helper/common'

const Loading = dynamic(async () => import('components/ui/Loading/Loading'))

type Props = {
  button: CircleButton | DefaultButton | SquareButton
  children?: ReactNode
}

// eslint-disable-next-line react/no-multi-comp
export const UiButton = memo(
  forwardRef<HTMLButtonElement, Props>(({ button, children }, ref): JSX.Element => {
    const { ariaLabel, handleClick, isDisabled, isLoading, isUnfocus, type } = button
    const isReverse = type !== 'default' && button.isReverse
    const isCheckMark = type === 'circle' && button.isCheckMark
    const colorState = type === 'circle' ? button.colorState : undefined
    const className = type === 'default' ? button.className : undefined
    const buttonClass = getButtonClass(button)

    return (
      <button
        aria-label={ariaLabel}
        className={cn(className, buttonClass)}
        disabled={isDisabled ?? isLoading}
        onClick={handleClick}
        ref={ref}
        tabIndex={isUnfocus === true ? -1 : 0}
        type="button"
      >
        {isCheckMark === true ? (
          <CheckMark color={colorState} />
        ) : isLoading === true ? (
          <Loading reverse={isReverse} />
        ) : (
          children
        )}
      </button>
    )
  }),
)

UiButton.displayName = 'UiButton'
