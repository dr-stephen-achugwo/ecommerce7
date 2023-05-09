import { useRouter } from 'next/router'
import { memo, useCallback, useMemo } from 'react'
import { match } from 'ts-pattern'

import type { AnchorLinkButton, NextLinkButton, ReloadLinkButton } from 'components/common'
import type { AnchorLink, NextLink, SquareButton, WithoutHrefLink } from 'components/ui'
import { UiButton, UiLink } from 'components/ui'

type Props = {
  linkButton: AnchorLinkButton | NextLinkButton | ReloadLinkButton
}

export const LinkButton = memo(({ linkButton }: Props): JSX.Element => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.reload()
  }, [router])

  const button = useMemo(
    () =>
      match(linkButton)
        .with({ type: 'next' }, () => {
          const nextButton: SquareButton = {
            isUnfocus: true,
            size: 'small',
            type: 'square',
          }
          return nextButton
        })
        .with({ type: 'anchor' }, () => {
          const anchorButton: SquareButton = {
            isUnfocus: true,
            size: 'small',
            type: 'square',
          }
          return anchorButton
        })
        .with({ type: 'reload' }, () => {
          const reloadButton: SquareButton = {
            handleClick,
            isUnfocus: true,
            size: 'small',
            type: 'square',
          }
          return reloadButton
        })
        .exhaustive(),
    [linkButton, handleClick],
  )

  const link = useMemo(
    () =>
      match(linkButton)
        .with({ type: 'next' }, (next) => {
          const nextLink: NextLink = {
            ariaLabel: next.ariaLabel,
            href: next.href,
            label: <UiButton button={button}>{next.label}</UiButton>,
            type: 'next',
          }
          return nextLink
        })
        .with({ type: 'anchor' }, (anchor) => {
          const anchorLink: AnchorLink = {
            ariaLabel: anchor.ariaLabel,
            href: anchor.href,
            label: <UiButton button={button}>{anchor.label}</UiButton>,
            type: 'anchor',
          }
          return anchorLink
        })
        .with({ type: 'reload' }, (reload) => {
          const reloadLink: WithoutHrefLink = {
            ariaLabel: reload.ariaLabel,
            handleClick,
            label: <UiButton button={button}>{reload.label}</UiButton>,
            type: 'withoutHref',
          }
          return reloadLink
        })
        .exhaustive(),
    [button, linkButton, handleClick],
  )

  return <UiLink link={link} />
})

LinkButton.displayName = 'LinkButton'
