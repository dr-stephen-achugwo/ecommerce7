import type { Dispatch, SetStateAction } from 'react'
import { memo } from 'react'
import type { ReadonlyDeep } from 'type-fest'

import { Border, UiButton } from 'components/ui'
import { useLocale } from 'lib/hooks/common'
import { useGetColorAndSize } from 'lib/hooks/items'
import type { Detail } from 'lib/type/Type'

type Props = {
  detail: ReadonlyDeep<Detail>
  setIsSoldOut: Dispatch<SetStateAction<boolean>>
  setVariantId: Dispatch<SetStateAction<string>>
}

export const ColorAndSize = memo(({ detail, setIsSoldOut, setVariantId }: Props): JSX.Element => {
  const { colorState, colors, setColorState, setSizeState, sizeState, sizes } = useGetColorAndSize(
    detail,
    setIsSoldOut,
    setVariantId,
  )
  const { t } = useLocale()

  return (
    <>
      <div>{t.color}</div>
      <Border />
      <div className="flex py-4">
        {colors.map((color) => (
          <UiButton
            button={{
              ariaLabel: `${color}色を選択する`,
              color,
              colorState,
              handleClick: (): void => {
                setColorState(color)
              },
              isCheckMark: colorState === color,
              type: 'circle',
            }}
            key={color}
          />
        ))}
      </div>
      <div>{t.size}</div>
      <Border />
      <div className="flex py-4">
        {sizes.map((size) => (
          <UiButton
            button={{
              ariaLabel: `${size}サイズを選択する`,
              handleClick: (): void => {
                setSizeState(size)
              },
              isChoose: sizeState === size,
              type: 'circle',
            }}
            key={size}
          >
            {size}
          </UiButton>
        ))}
      </div>
    </>
  )
})

ColorAndSize.displayName = 'ColorAndSize'
