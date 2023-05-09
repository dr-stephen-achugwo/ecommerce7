import { memo, useCallback, useMemo } from 'react'
import type { Cart } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

import { type SquareButton, UiButton } from 'components/ui'
import { useGetCurrency, useLocale } from 'lib/hooks/common'

type Props = { cart: ReadonlyDeep<Cart> }

export const CartCheckout = memo(({ cart }: Props): JSX.Element => {
  const { getCurrency } = useGetCurrency()
  const { t } = useLocale()

  const { subtotalPrice, webUrl } = cart
  const total = getCurrency(subtotalPrice)

  const handleClick = useCallback((): void => {
    window.open(webUrl)
  }, [webUrl])

  const button = useMemo(
    () => ({ ariaLabel: 'お会計に進む', handleClick, type: 'square' } satisfies SquareButton),
    [handleClick],
  )

  return (
    <>
      <p className="flex flex-col justify-center py-5 text-center">
        {t.cartCheckoutTotal}
        {total}
      </p>
      <div className="flex flex-col justify-center">
        <UiButton button={button}>{t.cartCheckoutBuyNow}</UiButton>
      </div>
    </>
  )
})

CartCheckout.displayName = 'CartCheckout'
