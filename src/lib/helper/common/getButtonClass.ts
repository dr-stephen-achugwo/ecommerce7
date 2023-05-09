import { match } from 'ts-pattern'
import type { ReadonlyDeep } from 'type-fest'

import type { CircleButton, DefaultButton, SquareButton } from 'components/ui'
import s from 'components/ui/UiButton/UiButton.module.css'
import { cn, getChooseClass, getColorClass } from 'lib/helper/common'

export const getButtonClass = (
  button: ReadonlyDeep<CircleButton> | ReadonlyDeep<DefaultButton> | ReadonlyDeep<SquareButton>,
): string => {
  const { isLoading, type } = button
  const size = type === 'default' ? undefined : button.size
  return type === 'default'
    ? ''
    : cn(
        'whitespace-nowrap',
        isLoading === true && s.loading,
        match(size)
          .with('large', () => 'mt-5 h-11 w-full')
          .with('small', () => 'w-1/3 h-11')
          .with(undefined, () => null)
          .exhaustive(),
        match(button)
          .with({ type: 'square' }, () => cn('mr-1.5 mb-1.5', s.square, getColorClass(undefined)))
          .with({ type: 'circle' }, (circle) =>
            cn('mr-1.5 mb-1.5', s.circle, getChooseClass(circle.isChoose), getColorClass(circle.color)),
          )
          .exhaustive(),
      )
}
