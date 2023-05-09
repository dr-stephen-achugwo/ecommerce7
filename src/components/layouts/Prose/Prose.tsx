import type { ReactNode } from 'react'
import { memo } from 'react'

type Props = { children: NonNullable<ReactNode> }

export const Prose = memo(
  ({ children }: Props): JSX.Element => <div className="prose max-w-none dark:prose-invert">{children}</div>,
)

Prose.displayName = 'Prose'
