import { memo, useMemo } from 'react'

import { type NextLink, UiLink } from 'components/ui'
import { useCart, useLocale } from 'lib/hooks/common'
import { useFocusItem } from 'lib/hooks/state'
import { paths } from 'lib/paths'

export const CartLink = memo((): JSX.Element => {
  const { quantity } = useCart()
  const { resetFocusItem } = useFocusItem()
  const { t } = useLocale()

  const link = useMemo(
    () =>
      ({
        ariaLabel: 'バッグを表示する',
        handleClick: resetFocusItem,
        href: paths.cart,
        label: `${t.cartLinkButton}(${quantity})`,
        type: 'next',
      } satisfies NextLink),
    [quantity, resetFocusItem, t.cartLinkButton],
  )

  return <UiLink link={link} />
})

CartLink.displayName = 'CartLink'
