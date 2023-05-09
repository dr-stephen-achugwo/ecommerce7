import type { ReactNode, Ref } from 'react'
import { createElement, memo } from 'react'
import Balancer from 'react-wrap-balancer'

import { cn } from 'lib/helper/common'
import { useHeading } from 'lib/hooks/common'

type Props = {
  children: NonNullable<ReactNode>
  headingRef?: Ref<HTMLHeadingElement>
  isAutoFocus?: boolean
  isSrOnly?: boolean
}

export const Heading = memo(({ children, headingRef, isAutoFocus, isSrOnly }: Props): JSX.Element => {
  const level = useHeading()
  const heading = `h${level}`

  return createElement(
    heading,
    {
      className: cn(isSrOnly === true && 'sr-only ', 'm-0'),
      id: isAutoFocus === true ? 'head' : undefined,
      ref: headingRef,
      tabIndex: -1,
    },
    <Balancer>{children}</Balancer>,
  )
})

Heading.displayName = 'Heading'
