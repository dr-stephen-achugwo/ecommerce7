/* eslint-disable react/jsx-props-no-spreading */
import { Analytics } from '@vercel/analytics/react'
import type { AppPropsWithLayout } from 'next/app'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import NextHead from 'next/head'
import Script from 'next/script'
import { NextSeo } from 'next-seo'
import { RecoilEnv, RecoilRoot } from 'recoil'

import { Context } from 'components/layouts'
import { config, gooleAnalyticsId, isMaintenance } from 'lib/config'
import { cn } from 'lib/helper/common'
import { useGooleAnalytics } from 'lib/hooks/common'
import 'styles/main.css'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

// eslint-disable-next-line new-cap
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const Maintenance = dynamic(async () => import('components/layouts/Maintenance/Maintenance'))

//  export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
//    if (isDevelop) {
//      console.log(metric)
//    }
//  }

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page): JSX.Element => page)

  useGooleAnalytics()

  return (
    <>
      {/* @ts-expect-error */}
      <NextSeo {...config} />
      <NextHead>
        {!!gooleAnalyticsId && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gooleAnalyticsId}`} />
            <Script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gooleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });`,
              }}
              id="gooleAnalytics"
            />
          </>
        )}
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/manifest.json" key="site-manifest" rel="manifest" />
        <Script async crossOrigin="anonymous" src="https://unpkg.com/pwacompat" />
        <link href="/images/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/images/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/images/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link color="#5bbad5" href="/images/icons/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#da532c" name="msapplication-TileColor" />
        <meta content="/images/icons/browserconfig.xml" name="msapplication-config" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="telephone=no" name="format-detection" />
      </NextHead>
      <RecoilRoot>
        <Context>
          {getLayout(
            <main className={cn(inter.variable, 'font-body tabular-nums')}>
              {isMaintenance ? <Maintenance /> : <Component {...pageProps} />}
              <Analytics />
            </main>,
          )}
        </Context>
      </RecoilRoot>
    </>
  )
}

export default MyApp
