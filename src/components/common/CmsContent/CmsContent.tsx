import { sanitize } from 'dompurify'
import type { ReactNode } from 'react'
import { createElement, memo, useMemo } from 'react'
// @ts-expect-error
import HTMLRenderer from 'react-html-renderer'
import Balancer from 'react-wrap-balancer'

import { Section } from 'components/ui'
import { useHeading } from 'lib/hooks/common'

type Props = { html: string }

const makeHeading =
  (level: number) =>
  // eslint-disable-next-line react/display-name
  ({ children }: { children: NonNullable<ReactNode> }): JSX.Element => {
    const baseLevel = useHeading()
    const absoluteLevel = Math.min(baseLevel + level - 1, 6)
    const heading = `h${absoluteLevel}`
    return createElement(heading, undefined, <Balancer>{children}</Balancer>)
  }

// eslint-disable-next-line react/no-multi-comp
export const CmsContent = memo(({ html }: Props): JSX.Element => {
  const sanitizedHtml = sanitize(html)

  const components = useMemo(
    () => ({
      h1: makeHeading(1),
      h2: makeHeading(2),
      h3: makeHeading(3),
      h4: makeHeading(4),
      h5: makeHeading(5),
      h6: makeHeading(6),
    }),
    [],
  )

  return (
    <Section>
      <HTMLRenderer components={components} html={sanitizedHtml} />
    </Section>
  )
})

CmsContent.displayName = 'CmsContent'
