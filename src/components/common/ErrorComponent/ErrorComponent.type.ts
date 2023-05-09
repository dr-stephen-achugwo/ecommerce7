type Link = {
  href: string
}

export type ErrorComponentWithNextLink = Link & {
  type: 'next'
}
export type ErrorComponentWithAnchor = Link & {
  type: 'anchor'
}

export type ErrorComponentWithReload = {
  type: 'reload'
}
