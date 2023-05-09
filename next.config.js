/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')

const nextConfig = {
  pwa: {
    dest: 'public',
    disable: process.env.NEXT_PUBLIC_NODE_ENV === 'develop',
    buildExcludes: [
      // Don't precache files under .next/static/chunks/images this improves next-optimized-images behaviour
      /chunks\/images\/.*$/,
      // Dont cache the API it needs fresh serverinfo
      /chunks\/pages\/api\/.*/,
    ],
    exclude: [
      // dont cache map files
      /\.map$/,
      // exclude those pesky json files in _next root but still serve the ones we need from /_next/static
      /-manifest.json$/,
      // middleware
      /middleware-build-manifest.js$/,
      /middleware-react-loadable-manifest.js$/,
      /font-loader-manifest.js$/,
    ],
    // installs new SW when available withou a promt, we only need to send a reload request to user.
    skipWaiting: true,
    // recommend: set to false if your start url always returns same HTML document, then start url will be precached, this will help to speed up first load.
    dynamicStartUrl: false,
    // Prevents reloads on offline/online switch
    reloadOnOnline: false,
    sourcemap: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
    // do not use webp, use avif
    formats: ['image/avif'],
  },
  i18n: {
    locales: ['default', 'en', 'ja'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: false,
  experimental: {
    // appDir: true,
    typedRoutes: true,
    esmExternals: true,
    legacyBrowsers: false,
    scrollRestoration: true,
    // urlImports: ['']
  },
  // productionBrowserSourceMaps: true,
  reactStrictMode: true,
  compiler: {
    // removeConsole: true,
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
  async rewrites() {
    return [{ source: '/items', destination: '/' }]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = () => {
  const plugins = [withBundleAnalyzer, withPWA]
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  })
  return config
}

const ContentSecurityPolicy = `
 default-src 'self';
 script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.instagram.com *.shopify.com https://unpkg.com/pwacompat *.googletagmanager.com *.google-analytics.com https://cdn.vercel-insights.com/v1/script.debug.js https://vercel.live/_next-live/feedback/feedback.js;
 worker-src 'self' 'unsafe-eval' 'unsafe-inline';
 child-src *.youtube.com *.google.com *.twitter.com *.instagram.com *.shopify.com https://vercel.live/;
 style-src 'self' 'unsafe-inline' *.googleapis.com;
 img-src * blob: data:;
 media-src 'none';
 connect-src *;
 font-src 'self';
 `

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/gu, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]
