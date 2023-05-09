import type { NextPageWithLayout } from 'next'
import { useMemo } from 'react'

import type { ErrorComponentWithNextLink } from 'components/common'
import ErrorComponent from 'components/common/ErrorComponent/ErrorComponent'
import { Layout, PageSeo } from 'components/layouts'
import { config } from 'lib/config'
import { paths } from 'lib/paths'

const Custom404: NextPageWithLayout = () => {
  const link = useMemo(
    () =>
      ({
        href: paths.root,
        type: 'next',
      } satisfies ErrorComponentWithNextLink),
    [],
  )

  return (
    <>
      <PageSeo description="" ogImageUrl={config.defaultOGImage} title="404 not found" />
      <div className="py-12 text-center">
        <ErrorComponent ariaLabel="Topページに戻る" label="Topへ" link={link} message="Page not found..." title="404" />
      </div>
    </>
  )
}

Custom404.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default Custom404
