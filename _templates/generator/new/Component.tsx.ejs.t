---
to: "<%= isComponent ? `src/components/${filePath}/${fileName}/${fileName}.tsx` : null %>"
---
import { memo } from 'react'

import s from './<%= fileName %>.module.css'

type Props = {
  
}

export const <%= fileName %> = memo(({}: Props): JSX.Element => {
  return (
    <div className={s.<%= fileName[0].toLowerCase() + fileName.slice(1) %>} />
  )
})

<%= fileName %>.displayName = '<%= fileName %>'
