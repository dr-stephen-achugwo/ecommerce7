import { SunIcon } from '@heroicons/react/24/outline'
import { memo } from 'react'

import { useLocale } from 'lib/hooks/common'

export const Sun = memo((): JSX.Element => {
  const { t } = useLocale()

  // eslint-disable-next-line react/forbid-component-props
  return <SunIcon aria-label={t.ariaSunIcon} className="w-6 h-6" role="img" />
})

Sun.displayName = 'Sun'
