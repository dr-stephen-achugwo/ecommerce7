import type { ReactNode } from 'react'
import { memo, useMemo } from 'react'

import { HeadingContext, useHeading } from 'lib/hooks/common'

type Props = {
  children: NonNullable<ReactNode>
}

export const Section = memo(({ children }: Props): JSX.Element => {
  const level = useHeading()
  const nextLevel = Math.min(level + 1, 6)
  const value = useMemo(() => ({ level: nextLevel }), [nextLevel])

  return <HeadingContext.Provider value={value}>{children}</HeadingContext.Provider>
})

Section.displayName = 'Section'
