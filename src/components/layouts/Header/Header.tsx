import { memo, useMemo } from 'react'

import { DarkMode } from 'components/common'
import { CartLink, ContentWrapper } from 'components/layouts'
import type { NextLink } from 'components/ui'
import { UiLink } from 'components/ui'
import { config } from 'lib/config'
import { useLocale } from 'lib/hooks/common'
import { useFocusItem } from 'lib/hooks/state'
import { paths } from 'lib/paths'

export const Header = memo((): JSX.Element => {
  const { resetFocusItem } = useFocusItem()
  const { t } = useLocale()

  const titleLink = useMemo(() => {
    const nextLink: NextLink = {
      ariaLabel: 'トップページを表示する',
      handleClick: resetFocusItem,
      href: paths.root,
      label: config.title,
      type: 'next',
    }
    return nextLink
  }, [resetFocusItem])

  const itemsLink = useMemo(() => {
    const nextLink: NextLink = {
      ariaLabel: '商品一覧ページを表示する',
      handleClick: resetFocusItem,
      href: paths.root,
      label: t.headerItems,
      type: 'next',
    }
    return nextLink
  }, [resetFocusItem, t.headerItems])

  const aboutLink = useMemo(() => {
    const nextLink: NextLink = {
      ariaLabel: 'アバウトページを表示する',
      handleClick: resetFocusItem,
      href: paths.about,
      label: t.headerAbout,
      type: 'next',
    }
    return nextLink
  }, [resetFocusItem, t.headerAbout])

  return (
    <header className="fireFoxBackdropFilter bg-opacity/30 sticky top-0 z-50 py-5 backdrop-blur-lg">
      <ContentWrapper>
        <div className="flex justify-between">
          <UiLink link={titleLink} />
          <div className="flex">
            <UiLink link={itemsLink} />
            {/* eslint-disable-next-line @shopify/jsx-no-hardcoded-content */}
            <div className="px-2">/</div>
            <UiLink link={aboutLink} />
            {/* eslint-disable-next-line @shopify/jsx-no-hardcoded-content */}
            <div className="px-2">/</div>
            <DarkMode />
          </div>
          <CartLink />
        </div>
      </ContentWrapper>
    </header>
  )
})

Header.displayName = 'Header'
