import Link from 'next/link'
import { forwardRef, memo } from 'react'
import { match } from 'ts-pattern'

import type { AnchorLink, NextLink, WithoutHrefLink } from 'components/ui'

type Props = {
  link: AnchorLink | NextLink | WithoutHrefLink
}

export const UiLink = memo(
  forwardRef<HTMLAnchorElement, Props>(
    ({ link }, ref): JSX.Element =>
      match(link)
        .with({ type: 'next' }, (next) =>
          next.handleClick ? (
            <Link aria-label={next.ariaLabel} href={next.href} onClick={next.handleClick} passHref ref={ref}>
              {next.label}
            </Link>
          ) : (
            <Link aria-label={next.ariaLabel} href={next.href} passHref ref={ref}>
              {next.label}
            </Link>
          ),
        )
        .with({ type: 'withoutHref' }, (withoutHref) => <a ref={ref}>{withoutHref.label}</a>)
        .with({ type: 'anchor' }, (anchor) => (
          <a href={anchor.href} ref={ref} rel="noopener noreferrer nofollow" target="_blank">
            {anchor.label}
          </a>
        ))
        .exhaustive(),
  ),
)

UiLink.displayName = 'UiLink'
