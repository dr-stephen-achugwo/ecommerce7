import type { NextRequest } from 'next/server'
import { match } from 'ts-pattern'

type Interval = '1d'

const isInterval = (param: string): param is Interval => param === '1d'

export const config = {
  runtime: 'edge',
}

const cron = (req: NextRequest): Response => {
  const param = req.nextUrl.searchParams.get('cron')
  const { env } = process
  const { NEXT_PUBLIC_URL: url } = env

  if (param === '' || param === null) return new Response('No cron provided', { status: 400 })
  if (!isInterval(param)) return new Response('Wrong cron value', { status: 400 })
  if (url === '' || url === undefined) return new Response('No env provided', { status: 400 })

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  match(param)
    .with('1d', async () => {
      try {
        const res = await fetch(`http://www.google.com/ping?sitemap=${url}/sitemap.xml`, { method: 'GET' })
        if (!res.ok) {
          throw new Error('Fetch failed')
        }
        return new Response('Successes', { status: 200 })
      } catch {
        return new Response('Fetch failed', { status: 400 })
      }
    })
    .exhaustive()

  return new Response('Unknown error', { status: 500 })
}

export default cron
