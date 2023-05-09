import type { ReactNode } from 'react'
import { memo, useMemo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import type { ErrorComponentWithReload } from 'components/common'
import ErrorComponent from 'components/common/ErrorComponent/ErrorComponent'

type Props = { children: NonNullable<ReactNode> }

const ErrorFallback = memo((): JSX.Element => {
  const link = useMemo(
    () =>
      ({
        type: 'reload',
      } satisfies ErrorComponentWithReload),
    [],
  )

  return (
    <div className="py-12 text-center">
      <ErrorComponent
        ariaLabel="ページを再読み込みする"
        label="再読み込み"
        link={link}
        message="エラーが発生しました"
        title="Sorry..."
      />
    </div>
  )
})

ErrorFallback.displayName = 'ErrorFallback'

// eslint-disable-next-line react/no-multi-comp
export const ErrorBoundaryComponent = memo(
  ({ children }: Props): JSX.Element => <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>,
)

ErrorBoundaryComponent.displayName = 'ErrorBoundaryComponent'
