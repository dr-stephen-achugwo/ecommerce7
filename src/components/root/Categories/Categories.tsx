import { memo } from 'react'

import s from './Categories.module.css'

import { UiButton } from 'components/ui'
import { categories } from 'lib/config'
import { cn } from 'lib/helper/common'
import { useScrollCategory } from 'lib/hooks/root'
import { useCategory } from 'lib/hooks/state'

export const Categories = memo((): JSX.Element => {
  const { categoryState, setCategoryState } = useCategory()
  const { ref } = useScrollCategory()

  return (
    <div className={s.categories} ref={ref} tabIndex={-1}>
      {categories.map((category) => (
        <div
          className={cn('block w-auto shrink-0 snap-center pr-8 leading-normal', `category-${category}`)}
          key={category}
        >
          <UiButton
            button={{
              ariaLabel: `${category}を表示する`,
              // eslint-disable-next-line tailwindcss/no-arbitrary-value
              className: cn(
                'block whitespace-nowrap pt-2 text-sm',
                categoryState === category &&
                  'relative inline-block no-underline after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:bg-secondary',
              ),
              handleClick: (): void => {
                setCategoryState(category)
              },
              type: 'default',
            }}
          >
            {category}
          </UiButton>
        </div>
      ))}
    </div>
  )
})

Categories.displayName = 'Categories'
