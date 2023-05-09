import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPageWithLayout } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import type { Result } from 'option-t/esm/PlainResult'
import { useMemo } from 'react'
import { match } from 'ts-pattern'
import type { ReadonlyDeep } from 'type-fest'

import { Breadcrumbs, type ErrorComponentWithReload } from 'components/common'
import { ItemDetail, ItemImage } from 'components/items'
import { ContentWrapper, Layout, PageSeo } from 'components/layouts'
import { Border, Heading } from 'components/ui'
import { config } from 'lib/config'
import { isShopifyError } from 'lib/helper/common'
import { getDetail } from 'lib/helper/items'
import { useLocale } from 'lib/hooks/common'
import { paths } from 'lib/paths'
import { shopify } from 'lib/shopify'
import type { Detail } from 'lib/type/Type'

const ErrorComponent = dynamic(async () => import('components/common/ErrorComponent/ErrorComponent'))

type Props = { res: Result<ReadonlyDeep<Detail>, string> }

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: 'blocking',
  paths: [],
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }: GetStaticPropsContext) => {
  try {
    const paramsId = params?.['id']
    const id = Array.isArray(paramsId) ? paramsId[0] ?? '' : paramsId ?? ''
    if (id === '')
      return {
        notFound: true,
        revalidate: 1,
      }
    const product = await shopify.product.fetch(id)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unnecessary-condition
    if (!product) {
      return {
        notFound: true,
        revalidate: 1,
      }
    }
    const detail = getDetail(product)
    return {
      props: {
        res: {
          ok: true,
          val: detail,
        },
      },
      revalidate: 200,
    }
  } catch (error) {
    return {
      props: {
        res: {
          err: isShopifyError(error) ? error[0].message : error instanceof Error ? error.message : 'Sorry',
          ok: false,
        },
      },
      revalidate: 1,
    }
  }
}

const Items: NextPageWithLayout<Props> = ({ res }) => {
  const { t } = useLocale()
  const router = useRouter()

  const link = useMemo(
    () =>
      ({
        type: 'reload',
      } satisfies ErrorComponentWithReload),
    [],
  )

  if (router.isFallback) return <div>{t.loading}</div>

  return (
    <>
      <PageSeo
        description={res.ok ? res.val.description : config.description}
        ogImageUrl={res.ok ? res.val.images[0] ?? config.defaultOGImage : config.defaultOGImage}
        path={res.ok ? `${paths.items}/${encodeURIComponent(res.val.id)}` : paths.items}
        title={res.ok ? res.val.title : 'Items'}
      />
      {match(res)
        .with({ ok: true }, (ok) => (
          <>
            <div className="pt-2" />
            <ContentWrapper>
              <Heading isAutoFocus>{ok.val.title}</Heading>
              <Border />
              <Breadcrumbs productType={ok.val.productType} />
              <div className="flex flex-wrap justify-between">
                <ItemImage detail={ok.val} />
                <ItemDetail detail={ok.val} />
              </div>
            </ContentWrapper>
          </>
        ))
        .with({ ok: false }, (ok) => (
          <div className="py-12 text-center">
            <ErrorComponent
              ariaLabel="ページを再読み込みする"
              label="再読み込み"
              link={link}
              message="Item not found..."
              title={ok.err || 'Unknown Error'}
            />
          </div>
        ))
        .exhaustive()}
    </>
  )
}

Items.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default Items
