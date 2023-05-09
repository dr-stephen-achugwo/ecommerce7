import dynamic from 'next/dynamic'
import { memo, useCallback, useMemo, useState } from 'react'
import type { ReadonlyDeep } from 'type-fest'

import { ColorAndSize } from 'components/items'
import { Prose } from 'components/layouts'
import { type SquareButton, UiButton } from 'components/ui'
import { fetchKeys } from 'lib/fetchKeys'
import { addLineItems } from 'lib/helper/shopify'
import { useCart, useGetCurrency, useLocale, useMutate } from 'lib/hooks/common'
import type { Detail } from 'lib/type/Type'

const CmsContent = dynamic(
  async () => {
    const mod = await import('components/common')
    return mod.CmsContent
  },
  { ssr: false },
)

type Props = { detail: ReadonlyDeep<Detail> }

export const ItemDetail = memo(({ detail }: Props): JSX.Element => {
  const [isSoldOut, setIsSoldOut] = useState(false)
  const [variantId, setVariantId] = useState('')
  const { cart } = useCart()
  const { getCurrency } = useGetCurrency()
  const { t } = useLocale()
  const { descriptionHtml, price, title } = detail
  const localePrice = getCurrency(price)

  const { isMutating, trigger } = useMutate(fetchKeys.cart, async () =>
    addLineItems({ itemId: variantId }, cart, {
      toastErrMsg: t.messageAddItemErr,
      toastMsg: t.messageAddItem,
    }),
  )

  const handleClick = useCallback(async (): Promise<void> => {
    await trigger()
  }, [trigger])

  const button = useMemo(
    () =>
      ({
        ariaLabel: 'バッグに入れる',
        handleClick,
        isLoading: isMutating,
        isReverse: true,
        size: 'large',
        type: 'square',
      } satisfies SquareButton),
    [isMutating, handleClick],
  )

  const soldOutButton = useMemo(
    () =>
      ({
        ariaLabel: t.ariaItemDetailSoldOutButton,
        size: 'large',
        type: 'square',
      } satisfies SquareButton),
    [t.ariaItemDetailSoldOutButton],
  )

  return (
    <div className="flex w-1/2 flex-col sm:w-full">
      <Prose>
        <p>{title}</p>
        <p>{localePrice}</p>
        <ColorAndSize detail={detail} setIsSoldOut={setIsSoldOut} setVariantId={setVariantId} />
        <CmsContent html={descriptionHtml} />
        {isSoldOut ? (
          <UiButton button={soldOutButton}>{t.itemDetailSoldOut}</UiButton>
        ) : (
          <UiButton button={button}>{t.itemDetailAddToCart}</UiButton>
        )}
      </Prose>
    </div>
  )
})

ItemDetail.displayName = 'ItemDetail'
