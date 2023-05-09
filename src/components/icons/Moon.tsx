import { MoonIcon } from '@heroicons/react/24/outline'
import { memo } from 'react'

import { useLocale } from 'lib/hooks/common'

export const Moon = memo((): JSX.Element => {
  const { t } = useLocale()

  // eslint-disable-next-line react/forbid-component-props
  return <MoonIcon aria-label={t.ariaMoonIcon} className="w-6 h-6" role="img" />
})

Moon.displayName = 'Moon'
