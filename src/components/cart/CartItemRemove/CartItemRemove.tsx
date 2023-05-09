import { memo, useCallback, useMemo } from 'react'

import { type SquareButton, UiButton } from 'components/ui'
import { fetchKeys } from 'lib/fetchKeys'
import { removeLineItems } from 'lib/helper/shopify'
import { useLocale, useMutate } from 'lib/hooks/common'
import { useCheckoutId } from 'lib/hooks/state'

type Props = { cartItemId: string }

export const CartItemRemove = memo(({ cartItemId }: Props): JSX.Element => {
  const { checkoutId } = useCheckoutId()
  const { t } = useLocale()

  const { isMutating, trigger } = useMutate(fetchKeys.cart, async () =>
    removeLineItems({ cartItemId }, checkoutId, {
      toastErrMsg: t.messageRemoveItemErr,
      toastMsg: t.messageRemoveItem,
    }),
  )

  const handleClick = useCallback(async (): Promise<void> => {
    await trigger()
  }, [trigger])

  const button = useMemo(
    () =>
      ({
        ariaLabel: 'バッグから商品を削除する',
        handleClick,
        isLoading: isMutating,
        isReverse: true,
        size: 'small',
        type: 'square',
      } satisfies SquareButton),
    [isMutating, handleClick],
  )

  return <UiButton button={button}>{t.cartItemRemoveButton}</UiButton>
})

CartItemRemove.displayName = 'CartItemRemove'
