import { MinusSmallIcon } from '@heroicons/react/24/outline'
import { memo } from 'react'

import { useLocale } from 'lib/hooks/common'

export const Minus = memo((): JSX.Element => {
  const { t } = useLocale()

  // eslint-disable-next-line react/forbid-component-props
  return <MinusSmallIcon aria-label={t.ariaMinusIcon} className="w-6 h-6" role="img" />
})

Minus.displayName = 'Minus'
