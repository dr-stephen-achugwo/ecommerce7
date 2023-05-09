/* eslint-disable @shopify/jsx-no-hardcoded-content */
import type { NextPageWithLayout } from 'next'

import { ContentWrapper, Layout, PageSeo, Prose } from 'components/layouts'
import { Border, Heading, Section } from 'components/ui'
import { config } from 'lib/config'
import { useLocale } from 'lib/hooks/common'
import { paths } from 'lib/paths'

const Legal: NextPageWithLayout = () => {
  const { t } = useLocale()

  return (
    <>
      <PageSeo description="" ogImageUrl={config.defaultOGImage} path={paths.legal} title="Legal" />
      <div className="pt-2" />
      <ContentWrapper>
        <Prose>
          <Heading isAutoFocus>{t.legal}</Heading>
          <Border />
          <Section>
            <div className="py-2 text">
              <Heading>販売者の名称</Heading>
              <p>{config.name}</p>
              <Heading>メールアドレス</Heading>
              <p>{config.emailAddress}</p>
              <Heading>販売URL</Heading>
              <p>{config.siteRoot}</p>
              <Heading>お支払い方法</Heading>
              <p>クレジットカード決済、代金引換決済</p>
              <Heading>商品代金以外の必要金額 </Heading>
              <p>代金引換決済の場合、代金引換手数料</p>
              <Heading>販売数量</Heading>
              <p>1点から</p>
              <Heading>お申込み有効期限</Heading>
              <p>7日以内にお願いいたします。7日間入金がない場合は、キャンセルとさせていただきます。</p>
              <Heading>商品引渡し時期</Heading>
              <p>指定日が無ければ入金確認後7営業日以内で発送致します。</p>
              <Heading>商品引渡し方法</Heading>
              <p>当方にて手配後、運送会社による配送</p>
              <Heading>返品・不良品について</Heading>
              <p>メールにてお問い合わせください。</p>
              <Heading>表現、及び商品に関する注意書き</Heading>
              <p>本商品に示された表現や再現性には個人差があり、 必ずしも利益や効果を保証したものではございません。</p>
            </div>
          </Section>
        </Prose>
      </ContentWrapper>
    </>
  )
}

Legal.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default Legal
