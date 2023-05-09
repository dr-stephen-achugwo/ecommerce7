import { CheckIcon } from '@heroicons/react/24/outline'
import type { Undefinable } from 'option-t/esm/Undefinable'
import { memo } from 'react'

import { getStroke } from 'lib/helper/common'
import { useLocale } from 'lib/hooks/common'
import { useTheme } from 'lib/hooks/state'
import type { Color } from 'lib/type/Type'

type Props = { color: Undefinable<Color> }

export const CheckMark = memo(({ color }: Props): JSX.Element => {
  const { theme } = useTheme()
  const stroke = getStroke(theme, color)
  const { t } = useLocale()

  // eslint-disable-next-line react/forbid-component-props
  return <CheckIcon aria-label={t.checked} className="w-6 h-6" role="img" stroke={stroke} />
})

CheckMark.displayName = 'CheckMark'
