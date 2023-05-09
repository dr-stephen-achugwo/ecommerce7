import { memo, useMemo } from 'react'

import { Github, Instagram, Twitter } from 'components/icons'
import { ContentWrapper } from 'components/layouts'
import type { AnchorLink, NextLink } from 'components/ui'
import { Border, Heading, Section, UiLink } from 'components/ui'
import { config } from 'lib/config'
import { useLocale } from 'lib/hooks/common'
import { paths } from 'lib/paths'

export const Footer = memo((): JSX.Element => {
  const { t } = useLocale()

  const twitterLink = useMemo(() => {
    const anchorLink: AnchorLink = {
      ariaLabel: 'Twitterを表示する',
      href: config.siteURL.twitter,
      label: <Twitter />,
      type: 'anchor',
    }
    return anchorLink
  }, [])

  const instagramLink = useMemo(() => {
    const anchorLink: AnchorLink = {
      ariaLabel: 'Instagramを表示する',
      href: config.siteURL.instagram,
      label: <Instagram />,
      type: 'anchor',
    }
    return anchorLink
  }, [])

  const githubLink = useMemo(() => {
    const anchorLink: AnchorLink = {
      ariaLabel: 'Githubを表示する',
      href: config.siteURL.github,
      label: <Github />,
      type: 'anchor',
    }
    return anchorLink
  }, [])

  const termsLink = useMemo(() => {
    const nextLink: NextLink = {
      ariaLabel: '利用規約を表示する',
      href: paths.terms,
      label: t.terms,
      type: 'next',
    }
    return nextLink
  }, [t.terms])

  const privacyLink = useMemo(() => {
    const nextLink: NextLink = {
      ariaLabel: '利用プライバシーポリシー規約を表示する',
      href: paths.privacy,
      label: t.privacy,
      type: 'next',
    }
    return nextLink
  }, [t.privacy])

  const legalLink = useMemo(() => {
    const nextLink: NextLink = {
      ariaLabel: '特定商取引法に基づく表示を表示する',
      href: paths.legal,
      label: t.legal,
      type: 'next',
    }
    return nextLink
  }, [t.legal])

  return (
    <footer className="py-6">
      <ContentWrapper>
        <Section>
          {/* To make it h2 */}
          <Heading isSrOnly>{t.footer}</Heading>
          <Border />
          <nav aria-label={t.footer} className="flex flex-wrap justify-between text-center text-sm">
            <div className="flex w-1/2 items-center justify-center py-6 sm:w-full sm:pt-8 sm:pb-0">
              <UiLink link={twitterLink} />
              <div className="px-1.5" />
              <UiLink link={instagramLink} />
              <div className="px-1.5" />
              <UiLink link={githubLink} />
            </div>
            <div className="flex w-1/2 flex-col py-6 sm:w-full">
              <UiLink link={termsLink} />
              <div className="p-2" />
              <UiLink link={privacyLink} />
              <div className="p-2" />
              <UiLink link={legalLink} />
            </div>
          </nav>
          <div className="w-full text-center text-sm">
            <p>{config.copyright}</p>
          </div>
        </Section>
      </ContentWrapper>
    </footer>
  )
})

Footer.displayName = 'Footer'
