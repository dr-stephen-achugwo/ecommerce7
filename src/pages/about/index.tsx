import type { NextPageWithLayout } from 'next'

import { Description } from 'components/about'
import { ContentWrapper, Layout, PageSeo } from 'components/layouts'
import { Border, Heading } from 'components/ui'
import { config } from 'lib/config'
import { useLocale } from 'lib/hooks/common'
import { paths } from 'lib/paths'

const About: NextPageWithLayout = () => {
  const { t } = useLocale()

  return (
    <>
      <PageSeo description="" ogImageUrl={config.defaultOGImage} path={paths.about} title="About" />
      <div className="pt-2" />
      <ContentWrapper>
        <Heading isAutoFocus>{t.about}</Heading>
        <Border />
        <Description />
      </ContentWrapper>
    </>
  )
}

About.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default About
