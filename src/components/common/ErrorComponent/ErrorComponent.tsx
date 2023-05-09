import { memo, useMemo } from 'react'
import { match } from 'ts-pattern'

import { LinkButton } from 'components/common'
import type {
  AnchorLinkButton,
  ErrorComponentWithAnchor,
  ErrorComponentWithNextLink,
  ErrorComponentWithReload,
  NextLinkButton,
  ReloadLinkButton,
} from 'components/common'
import { ContentWrapper } from 'components/layouts'
import { Heading, Spacer } from 'components/ui'

type Props = {
  ariaLabel: string
  label: string
  link: ErrorComponentWithAnchor | ErrorComponentWithNextLink | ErrorComponentWithReload
  message: string
  title: string
}

const ErrorComponent = memo(({ ariaLabel, label, link, message, title }: Props): JSX.Element => {
  const linkButton = useMemo(
    () =>
      match(link)
        .with(
          { type: 'next' },
          (next) =>
            ({
              ariaLabel,
              href: next.href,
              label,
              type: 'next',
            } satisfies NextLinkButton),
        )
        .with(
          { type: 'anchor' },
          (anchor) =>
            ({
              ariaLabel,
              href: anchor.href,
              label,
              type: 'anchor',
            } satisfies AnchorLinkButton),
        )
        .with(
          { type: 'reload' },
          () =>
            ({
              ariaLabel,
              label,
              type: 'reload',
            } satisfies ReloadLinkButton),
        )
        .exhaustive(),
    [ariaLabel, label, link],
  )

  return (
    <ContentWrapper>
      <p className="text-9xl font-bold leading-tight">{title}</p>
      <Heading isAutoFocus>{message}</Heading>
      <Spacer />
      <LinkButton linkButton={linkButton} />
    </ContentWrapper>
  )
})

ErrorComponent.displayName = 'ErrorComponent'

export default ErrorComponent
