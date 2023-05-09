import { ImageResponse } from '@vercel/og'
import type { NextApiHandler } from 'next'

export const config = {
  runtime: 'edge',
}

const handler: NextApiHandler = (req) => {
  try {
    if (req.url === undefined || req.url === '') throw new Error('error')

    const { searchParams } = new URL(req.url)
    const src = searchParams.get('src')

    if (src === null || src === '') throw new Error('error')

    return new ImageResponse(
      (
        <div tw="flex h-full justify-center relative w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" height={500} src={src} width={500} />
          <div tw="text-black text-6xl font-semibold absolute top-96">{process.env['NEXT_PUBLIC_SITE_NAME']}</div>
        </div>
      ),
      {
        height: 500,
        width: 500,
      },
    )
  } catch {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}

export default handler
