import type { ReactNode } from 'react'
import { memo } from 'react'

type Props = {
  children: NonNullable<ReactNode>
}

export const Flex = memo(
  ({ children }: Props): JSX.Element => <div className="flex flex-wrap items-center justify-between">{children}</div>,
)

Flex.displayName = 'Flex'
