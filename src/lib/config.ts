/* eslint-disable sonarjs/no-duplicate-string */
export const categories = [
  'NEW ARRIVAL',
  'DRESS',
  'SKIRT/PANTS',
  'SHIRT/BLOUSE',
  'CUTSEW',
  'JACKET/OUTERWEAR',
  'BAG/POUCH',
  'ACCESSORY',
  'COSMETIC',
] as const

export const colors = [
  'Black',
  'White',
  'Brown',
  'Charcoal',
  'Chocolate',
  'Grey',
  'Light Grey',
  'Taupe Marl',
  'Ink',
  'Light Grey Marl',
  'Cadet Green',
  'Red',
  'Cinder Marl',
  'Taupe',
  'Military',
  'Grey Marl',
  'Deep Ocean',
  'Vintage Black',
  'Chalk White',
  'Nights',
  'Optic White',
  'Tempest Blue',
  'Olive Green',
  'Putty',
  'Ivory',
  'Green',
] as const

export const config = {
  aboutBottomOfPage: 0.65,
  aboutTopOfPage: 0.35,
  blurDataURL:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8+h8AAs8B5qzsEekAAAAASUVORK5CYII=',
  canonical:
    process.env['NEXT_PUBLIC_NODE_ENV'] === 'production' ? process.env['NEXT_PUBLIC_URL'] : 'http://localhost:3000',
  copyright: process.env['NEXT_PUBLIC_COPYRIGHT'],
  defaultColor: 'Black',
  defaultOGImage: process.env['NEXT_PUBLIC_DEFAULT_OGIMAGE_PATH'] ?? '',
  defaultSize: 'F',
  description: process.env['NEXT_PUBLIC_DESCRIPTION'] ?? '',
  description1: process.env['NEXT_PUBLIC_DESCRIPTION1'] ?? '',
  description2: process.env['NEXT_PUBLIC_DESCRIPTION2'] ?? '',
  description3: process.env['NEXT_PUBLIC_DESCRIPTION3'] ?? '',
  emailAddress: process.env['NEXT_PUBLIC_EMAIL_ADDRESS'],
  image1: '/brand1.jpg',
  image2: '/brand2.jpg',
  image3: '/brand3.jpg',
  name: process.env['NEXT_PUBLIC_MY_NAME'] ?? '',
  openGraph: {
    images: [{ alt: 'Brand logo', height: 500, url: '/brand2.jpg', width: 500 }],
    locale: 'ja',
    site_name: process.env['NEXT_PUBLIC_SITE_NAME'],
    type: 'website',
    url:
      process.env['NEXT_PUBLIC_NODE_ENV'] === 'production' ? process.env['NEXT_PUBLIC_URL'] : 'http://localhost:3000',
  },
  placeholderImg: '/product-img-placeholder.svg',
  siteRoot:
    process.env['NEXT_PUBLIC_NODE_ENV'] === 'production'
      ? process.env['NEXT_PUBLIC_URL'] ?? ''
      : 'http://localhost:3000',
  siteURL: {
    github: process.env['NEXT_PUBLIC_GITHUB_URL'] ?? '/',
    instagram: process.env['NEXT_PUBLIC_INSTAGRAM_URL'] ?? '/',
    twitter: process.env['NEXT_PUBLIC_TWITTER_URL'] ?? '/',
  },
  title: process.env['NEXT_PUBLIC_SITE_NAME'] ?? '',
  titleTemplate: `%s - ${process.env['NEXT_PUBLIC_MY_NAME'] ?? ''}`,
  twitter: {
    cardType: 'summary_large_image',
    handle: process.env['NEXT_PUBLIC_TWITTER_ACCOUNT'],
    site: process.env['NEXT_PUBLIC_TWITTER_ACCOUNT'],
  },
} as const

export const gooleAnalyticsId = process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'] ?? ''

// export const isDevelop = (process.env["NEXT_PUBLIC_NODE_ENV"] ?? "") === 'develop'

export const isMaintenance = (process.env['NEXT_PUBLIC_MAINTENANCE_MODE'] ?? '') === '1'

export const shopifyApiToken = process.env['NEXT_PUBLIC_SHOPIFY_API_TOKEN'] ?? ''

export const shopifyStoreUrl = `${process.env['NEXT_PUBLIC_SHOPIFY_STORE_ID'] ?? ''}.myshopify.com`

export const sizes = ['S', 'M', 'L', 'F'] as const
