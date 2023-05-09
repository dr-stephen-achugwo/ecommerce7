import { memo, useMemo } from 'react'

import { type NextLink, UiLink } from 'components/ui'
import { useLocale } from 'lib/hooks/common'
import { paths } from 'lib/paths'

type Props = { productType: string }

export const Breadcrumbs = memo(({ productType }: Props): JSX.Element => {
  const { t } = useLocale()

  const link = useMemo(
    () =>
      ({
        ariaLabel: 'アイテム一覧を表示する',
        href: paths.root,
        label: t.breadcrumbsRoot,
        type: 'next',
      } satisfies NextLink),
    [t.breadcrumbsRoot],
  )

  return (
    <div className="breadcrumbs px-2 text-sm">
      <ul>
        <li>
          <UiLink link={link} />
        </li>
        <li>{productType}</li>
      </ul>
    </div>
  )
})

Breadcrumbs.displayName = 'Breadcrumbs'
