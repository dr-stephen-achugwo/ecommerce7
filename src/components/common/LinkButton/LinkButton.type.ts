type Link = {
  ariaLabel: string
  label: string
}

type LinkWithHref = Link & {
  href: string
}

export type ReloadLinkButton = Link & { type: 'reload' }

export type AnchorLinkButton = LinkWithHref & { type: 'anchor' }

export type NextLinkButton = LinkWithHref & { type: 'next' }
