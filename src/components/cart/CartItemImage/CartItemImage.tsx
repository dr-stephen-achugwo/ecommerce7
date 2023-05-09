import { memo, useCallback, useMemo } from 'react'
import type { LineItem } from 'shopify-buy'
import type { ReadonlyDeep } from 'type-fest'

import type { ImageHeight, ImageWidth, NextLink } from 'components/ui'
import { UiImage, UiLink } from 'components/ui'
import { useFocus } from 'lib/hooks/common'
import { useFocusItem } from 'lib/hooks/state'
import { paths } from 'lib/paths'

type Props = { focused: boolean; lineItem: ReadonlyDeep<LineItem>; priority: boolean }

export const CartItemImage = memo(({ focused, lineItem, priority }: Props): JSX.Element => {
  const { setFocusItem } = useFocusItem()
  const { itemRef } = useFocus(focused)

  const { id, title, variant } = lineItem
  const cartItemId = `${id}`
  const { image, product } = variant
  const { id: productId } = product
  const { altText, src } = image
  const imageHeight: ImageHeight = 500
  const imageWidth: ImageWidth = 500

  const handleClick = useCallback((): void => {
    setFocusItem(cartItemId)
  }, [cartItemId, setFocusItem])

  const link: NextLink = useMemo(
    () => ({
      ariaLabel: `${title}のページを表示する`,
      handleClick,
      href: `${paths.items}/${productId}`,
      label: (
        <UiImage
          alt={(altText ?? '') || 'Item Image'}
          height={imageHeight}
          priority={priority}
          src={src}
          type="default"
          width={imageWidth}
        />
      ),
      type: 'next',
    }),
    [altText, handleClick, priority, productId, src, title],
  )

  return <UiLink link={link} ref={itemRef} />
})

CartItemImage.displayName = 'CartItemImage'
