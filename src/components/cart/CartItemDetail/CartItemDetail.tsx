import dynamic from 'next/dynamic'
import { memo, useCallback, useMemo } from 'react'
import type { LineItem } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

import { Minus, Plus } from 'components/icons'
import { type DefaultButton, Spacer, UiButton } from 'components/ui'
import { fetchKeys } from 'lib/fetchKeys'
import { getColorAndSize } from 'lib/helper/cart'
import { updateLineItems } from 'lib/helper/shopify'
import { usePlusOrMinus } from 'lib/hooks/cart'
import { useGetCurrency, useLocale, useMutate } from 'lib/hooks/common'
import { useCheckoutId } from 'lib/hooks/state'

const Loading = dynamic(async () => import('components/ui/Loading/Loading'))

type Props = { lineItem: ReadonlyDeep<LineItem> }

export const CartItemDetail = memo(({ lineItem }: Props): JSX.Element => {
  const { checkoutId } = useCheckoutId()
  const { getCurrency } = useGetCurrency()
  const { t } = useLocale()
  const { isMinus, isPlus, minus, plus } = usePlusOrMinus()
  const { id, quantity, title, variant } = lineItem
  const cartItemId = `${id}`
  const { price, selectedOptions } = variant
  const localePrice = getCurrency(price)
  const subtotal = getCurrency(`${(+price || 0) * quantity}`)
  const height = '24'
  const width = '24'

  const { isMutating: isPlusLodaing, trigger: plusTrigger } = useMutate(fetchKeys.cart, async () =>
    updateLineItems({ cartItemId, quantity: quantity + 1 }, checkoutId, {
      toastErrMsg: t.messageChangeQuantityErr,
      toastMsg: t.messageChangeQuantity,
    }),
  )

  const { isMutating: isMinusLodaing, trigger: minusTrigger } = useMutate(fetchKeys.cart, async () =>
    updateLineItems({ cartItemId, quantity: quantity - 1 }, checkoutId, {
      toastErrMsg: t.messageChangeQuantityErr,
      toastMsg: t.messageChangeQuantity,
    }),
  )

  const isLoadingPlus = isPlus && isPlusLodaing
  const isLoadingMinus = isMinus && isMinusLodaing

  const handleClickPlus = useCallback(async (): Promise<void> => {
    plus()
    await plusTrigger()
  }, [plus, plusTrigger])

  const handleClickMinus = useCallback(async (): Promise<void> => {
    minus()
    await minusTrigger()
  }, [minus, minusTrigger])

  const plusButton = useMemo(
    () =>
      ({
        ariaLabel: '個数を1つ増やす',
        handleClick: handleClickPlus,
        isDisabled: isLoadingPlus,
        type: 'default',
      } satisfies DefaultButton),
    [isLoadingPlus, handleClickPlus],
  )

  const minusButton = useMemo(
    () =>
      ({
        ariaLabel: '個数を1つ減らす',
        handleClick: handleClickMinus,
        isDisabled: isLoadingMinus,
        type: 'default',
      } satisfies DefaultButton),
    [isLoadingMinus, handleClickMinus],
  )

  return (
    <>
      <p>{title}</p>
      <div>{getColorAndSize(selectedOptions, 'Color')}</div>
      <div>{getColorAndSize(selectedOptions, 'Size')}</div>
      <p>{localePrice}</p>
      <div className="flex">
        <p>{t.cartItemDetailQuantity}</p>
        <UiButton button={minusButton}>
          {isLoadingMinus ? <Loading height={height} width={width} /> : <Minus />}
        </UiButton>
        <div className="px-3">{quantity}</div>
        <UiButton button={plusButton}>{isLoadingPlus ? <Loading height={height} width={width} /> : <Plus />}</UiButton>
      </div>
      <p>
        {t.cartItemDetailSubtotal}
        {subtotal}
      </p>
      <Spacer />
    </>
  )
})

CartItemDetail.displayName = 'CartItemDetail'
