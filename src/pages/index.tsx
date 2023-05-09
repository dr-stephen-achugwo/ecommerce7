import type { GetStaticProps, NextPageWithLayout } from 'next'
import dynamic from 'next/dynamic'
import type { Result } from 'option-t/esm/PlainResult'
import { useMemo } from 'react'
import { match } from 'ts-pattern'
import type { ReadonlyDeep } from 'type-fest'

import type { ErrorComponentWithReload } from 'components/common'
import { ContentWrapper, Layout, PageSeo } from 'components/layouts'
import { Categories, ItemsByCategory } from 'components/root'
import { Border, Heading } from 'components/ui'
import { config } from 'lib/config'
import { isShopifyError } from 'lib/helper/common'
import { getItems } from 'lib/helper/root'
import { useLocale } from 'lib/hooks/common'
import { paths } from 'lib/paths'
import { shopify } from 'lib/shopify'
import type { ItemType } from 'lib/type/Type'

const ErrorComponent = dynamic(async () => import('components/common/ErrorComponent/ErrorComponent'))

type Props = { res: Result<ReadonlyDeep<ItemType[]>, string> }

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const products = await shopify.product.fetchAll()
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/strict-boolean-expressions
    if (!products) {
      return {
        notFound: true,
        revalidate: 1,
      }
    }
    const items = getItems(products)
    return {
      props: {
        res: {
          ok: true,
          val: items,
        },
      },
      revalidate: 14_400,
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

const Home: NextPageWithLayout<Props> = ({ res }) => {
  const { t } = useLocale()

  const link = useMemo(
    () =>
      ({
        type: 'reload',
      } satisfies ErrorComponentWithReload),
    [],
  )

  return (
    <>
      <PageSeo
        description={config.description}
        ogImageUrl={config.defaultOGImage}
        path={paths.root}
        title={config.title}
      />
      {match(res)
        .with({ ok: true }, (ok) => (
          <>
            <div className="pt-2" />
            <ContentWrapper>
              <div className="flex items-end justify-between">
                <Heading isAutoFocus>{t.items}</Heading>
                {t.scroll}
              </div>
              <Border />
              <Categories />
              <ItemsByCategory items={ok.val} />
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

Home.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default Home
