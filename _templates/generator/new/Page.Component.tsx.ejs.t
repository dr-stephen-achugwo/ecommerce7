---
to: "<%= isPage ? `src/components/${filePath}/${fileName}Container/${fileName}Container.tsx` : null %>"
---
import { memo } from 'react'

import s from './<%= fileName %>Container.module.css'

import { ContentWrapper, PageSeo } from 'components/layouts'
import { Border, Heading } from 'components/ui'
import { config } from 'lib/config'
import { useLocale } from 'lib/hooks/common'

type Props = {
  
}

export const <%= fileName %>Container = memo(({}: Props): JSX.Element => {
  const { t } = useLocale()

  return (
     <>
      <PageSeo description="<%= fileName %>" ogImageUrl={config.defaultOGImage} path="/<%= filePath %>" title="<%= fileName %>" />
      <div className="pt-2" />
      <ContentWrapper>
        <Heading isAutoFocus>{t.<%= filePath %>}</Heading>
        <Border />
        <div className={s.<%= filePath %>Container} />
      </ContentWrapper>
    </>
  )
})

<%= fileName %>Container.displayName = '<%= fileName %>Container'
