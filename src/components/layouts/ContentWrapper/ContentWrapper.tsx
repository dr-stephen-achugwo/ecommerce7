import { memo } from 'react'
import type { ReactNode } from 'react'

type Props = { children: NonNullable<ReactNode> }

export const ContentWrapper = memo(
  // eslint-disable-next-line tailwindcss/no-arbitrary-value
  ({ children }: Props): JSX.Element => <div className="my-0 mx-auto max-w-[850px] py-0 px-5">{children}</div>,
)

ContentWrapper.displayName = 'ContentWrapper'
