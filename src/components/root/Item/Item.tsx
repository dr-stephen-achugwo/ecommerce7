import { memo, useCallback, useMemo } from 'react'
import type { ReadonlyDeep } from 'type-fest'

import type { ImageHeight, ImageWidth, NextLink } from 'components/ui'
import { Heading, Section, UiImage, UiLink } from 'components/ui'
import { useFocus, useGetCurrency } from 'lib/hooks/common'
import { useFocusItem } from 'lib/hooks/state'
import { paths } from 'lib/paths'
import type { ItemType } from 'lib/type/Type'

type Props = { focused: boolean; item: ReadonlyDeep<ItemType>; priority: boolean }

export const Item = memo(({ focused, item, priority }: Props): JSX.Element => {
  const { itemRef } = useFocus(focused)
  const { setFocusItem } = useFocusItem()
  const { getCurrency } = useGetCurrency()

  const { id: itemId, images, price, title } = item
  const localePrice = getCurrency(price)
  const imageHeight: ImageHeight = 500
  const imageWidth: ImageWidth = 500

  const handleClick = useCallback((): void => {
    setFocusItem(itemId)
  }, [itemId, setFocusItem])

  const link = useMemo(() => {
    const nextLink: NextLink = {
      ariaLabel: `${title}のページを表示する`,
      handleClick,
      href: `${paths.items}/${itemId}`,
      label: (
        <>
          <UiImage
            alt={title || 'Item Image'}
            height={imageHeight}
            priority={priority}
            src={images[0] ?? ''}
            type="zoom"
            width={imageWidth}
          />
          <div className="text-left">
            <Section>
              <Heading>{title}</Heading>
              <p>{localePrice}</p>
            </Section>
          </div>
        </>
      ),
      type: 'next',
    }
    return nextLink
  }, [handleClick, images, itemId, localePrice, priority, title])

  return <UiLink link={link} ref={itemRef} />
})

Item.displayName = 'Item'
