import type { NextPageWithLayout } from 'next'
import { useMemo } from 'react'

import type { ErrorComponentWithNextLink } from 'components/common'
import ErrorComponent from 'components/common/ErrorComponent/ErrorComponent'
import { Layout, PageSeo } from 'components/layouts'
import { config } from 'lib/config'
import { paths } from 'lib/paths'

type Props = {
  statusCode: number | undefined
}

const Error: NextPageWithLayout<Props> = ({ statusCode }) => {
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
      <PageSeo description="" ogImageUrl={config.defaultOGImage} title="Internal Server Error" />
      <div className="py-12 text-center">
        <ErrorComponent
          ariaLabel="Topページに戻る"
          label="Topへ"
          link={link}
          message="Internal Server Error..."
          title={`${statusCode ?? 'Error'}`}
        />
      </div>
    </>
  )
}

Error.getInitialProps = ({ err, res }): Promise<Props> | Props => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

Error.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default Error
