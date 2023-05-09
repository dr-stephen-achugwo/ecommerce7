/** @type {import('next-sitemap').IConfig} */

module.exports = {
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/api/og' }],
  },
  outDir: './public',
  siteUrl: process.env.NEXT_PUBLIC_URL,
  sitemapSize: 7000,
  exclude: ['/500'],
}
