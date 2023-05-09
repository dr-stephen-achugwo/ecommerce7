import { gooleAnalyticsId } from 'lib/config'

export const pageview = (url: string): void => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (window.gtag === undefined) return
  window.gtag('config', gooleAnalyticsId, { page_path: url })
}
