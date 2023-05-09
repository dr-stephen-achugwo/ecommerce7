import { memo, useMemo } from 'react'

import type { ErrorComponentWithAnchor } from 'components/common'
import ErrorComponent from 'components/common/ErrorComponent/ErrorComponent'
import { config } from 'lib/config'

export const Maintenance = memo((): JSX.Element => {
  const link = useMemo(
    () =>
      ({
        href: config.siteURL.twitter,
        type: 'anchor',
      } satisfies ErrorComponentWithAnchor),
    [],
  )

  return (
    <div className="py-12 text-center">
      <ErrorComponent
        ariaLabel="ツイッターを表示する"
        label="Twitterへ"
        link={link}
        message="詳細はTwitterをご確認ください。"
        title="メンテナンス"
      />
    </div>
  )
})

Maintenance.displayName = 'Maintenance'

export default Maintenance
