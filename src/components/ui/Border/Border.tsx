import { memo } from 'react'

import s from './Border.module.css'

import { cn } from 'lib/helper/common'

export const Border = memo((): JSX.Element => <div className={cn(s.border, 'max-w-none py-1.5')} />)

Border.displayName = 'Border'
