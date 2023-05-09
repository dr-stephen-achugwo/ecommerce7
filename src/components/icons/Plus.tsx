import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { memo } from 'react'

import { useLocale } from 'lib/hooks/common'

export const Plus = memo((): JSX.Element => {
  const { t } = useLocale()

  // eslint-disable-next-line react/forbid-component-props
  return <PlusSmallIcon aria-label={t.ariaPlusIcon} className="w-6 h-6" role="img" />
})

Plus.displayName = 'Plus'
