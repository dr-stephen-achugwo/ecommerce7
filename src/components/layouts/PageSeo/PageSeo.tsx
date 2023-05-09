import { NextSeo } from 'next-seo'

import { config } from 'lib/config'
import { useLocale } from 'lib/hooks/common'

type Props = {
  description: string
  ogImageUrl: string
  path?: string
  title: string
}

export const PageSeo = ({ description, ogImageUrl, path, title }: Props): JSX.Element => {
  const { locale } = useLocale()

  return (
    <NextSeo
      canonical={`${config.siteRoot}${locale === undefined || locale === '' ? '' : `/${locale}`}${path ?? ''}`}
      description={description}
      openGraph={{
        description,
        images: [
          {
            alt: title,
            height: 500,
            url: `${config.siteRoot}/api/og?src=${ogImageUrl || config.defaultOGImage}`,
            width: 500,
          },
        ],
        title,
        type: 'website',
      }}
      title={title}
    />
  )
}
