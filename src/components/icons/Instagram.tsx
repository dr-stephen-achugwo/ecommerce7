import { memo } from 'react'

import { useLocale } from 'lib/hooks/common'

export const Instagram = memo((): JSX.Element => {
  const { t } = useLocale()

  return (
    <svg aria-label={t.ariaInstagramIcon} fill="none" height="36" role="img" viewBox="0 0 551.034 551.034" width="36">
      <path
        clipRule="evenodd"
        d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
        fill="currentColor"
      />

      <circle cx="418.306" cy="134.072" fill="#555" r="34.149" />
    </svg>
  )
})

Instagram.displayName = 'Instagram'
