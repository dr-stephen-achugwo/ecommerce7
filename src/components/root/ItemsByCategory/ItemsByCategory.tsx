import { memo } from 'react'
import type { ReadonlyDeep } from 'type-fest'

import { Item } from 'components/root'
import { Border, Heading, Section } from 'components/ui'
import { useFocus, useLocale } from 'lib/hooks/common'
import { useCategory, useFocusItem } from 'lib/hooks/state'
import type { ItemType } from 'lib/type/Type'

type Props = { items: ReadonlyDeep<ItemType[]> }

export const ItemsByCategory = memo(({ items }: Props): JSX.Element => {
  const { categoryState } = useCategory()
  const { headingRef } = useFocus(false)
  const { focusItem } = useFocusItem()
  const { t } = useLocale()

  const components: Record<string, JSX.Element> = {
    ALL: (
      <Section>
        <Heading headingRef={headingRef}>{t.all}</Heading>
        <Border />
        <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-1">
          {[...items].reverse().map((item, i) => (
            <Item focused={focusItem === item.id} item={item} key={item.id} priority={i === 0 || i === 1} />
          ))}
        </div>
      </Section>
    ),
    'NEW ARRIVAL': (
      <Section>
        <Heading headingRef={headingRef}>{t.newArrival}</Heading>
        <Border />
        <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-1">
          {items
            .slice(-10)
            .reverse()
            .map((item, i) => (
              <Item focused={focusItem === item.id} item={item} key={item.id} priority={i === 0 || i === 1} />
            ))}
        </div>
      </Section>
    ),
  }

  return (
    components[categoryState] ?? (
      <Section>
        <Heading headingRef={headingRef}>{categoryState}</Heading>
        <Border />
        <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-1">
          {[...items]
            .reverse()
            .map(
              (item, i) =>
                item.productType === categoryState && (
                  <Item focused={focusItem === item.id} item={item} key={item.id} priority={i === 0 || i === 1} />
                ),
            )}
        </div>
      </Section>
    )
  )
})

ItemsByCategory.displayName = 'ItemsByCategory'
