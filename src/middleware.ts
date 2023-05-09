import { type NextRequest, NextResponse } from 'next/server'
import type { Undefinable } from 'option-t/esm/Undefinable'

// eslint-disable-next-line redos/no-vulnerable, regexp/no-super-linear-move
const publicFile = /\..*$/u

// eslint-disable-next-line @typescript-eslint/require-await, @typescript-eslint/prefer-readonly-parameter-types
export const middleware = async (req: NextRequest): Promise<Undefinable<NextResponse>> => {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    publicFile.test(req.nextUrl.pathname)
  ) {
    return undefined
  }
  if (req.nextUrl.locale === 'default') {
    const locale = req.cookies.get('NEXT_LOCALE')
    return NextResponse.redirect(
      new URL(`/${locale ? locale.value : 'ja'}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
    )
  }
  return NextResponse.next()
}
