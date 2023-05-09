import type { LinkProps } from 'next/link'
import type { ReactNode } from 'react'

type Link = {
  ariaLabel: string
  label: NonNullable<ReactNode> | string
}

type Url = Pick<LinkProps, 'href'>

type LinkWithHref = Link & Url

export type NextLink = LinkWithHref & {
  handleClick?: () => void
  type: 'next'
}

export type AnchorLink = Link & { href: string; type: 'anchor' }

export type WithoutHrefLink = Link & { handleClick: () => void; type: 'withoutHref' }
