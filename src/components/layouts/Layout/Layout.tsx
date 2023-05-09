import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'
import { memo } from 'react'

import { ErrorBoundaryComponent, Footer, Header } from 'components/layouts'

const Toast = dynamic(async () => import('components/ui/Toast/Toast'))

type Props = { children: NonNullable<ReactNode> }

export const Layout = memo(
  ({ children }: Props): JSX.Element => (
    <>
      <Toast />
      <Header />
      <ErrorBoundaryComponent>{children}</ErrorBoundaryComponent>
      <Footer />
    </>
  ),
)

Layout.displayName = 'Layout'
