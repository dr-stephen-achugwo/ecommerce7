import type { ReactNode } from 'react'
import { memo } from 'react'

import { useCreateCart, useDarkMode, useFocus } from 'lib/hooks/common'

type Props = { children: NonNullable<ReactNode> }

export const Context = memo(({ children }: Props): JSX.Element => {
  useDarkMode()
  useFocus(false)
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  useCreateCart()

  return <div className="flex min-h-screen flex-col">{children}</div>
})

Context.displayName = 'Context'
