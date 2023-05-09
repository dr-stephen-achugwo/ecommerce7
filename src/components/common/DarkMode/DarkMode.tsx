import { memo, useCallback, useMemo } from 'react'
import { match } from 'ts-pattern'

import { Moon, Sun } from 'components/icons'
import { type DefaultButton, UiButton } from 'components/ui'
import { useTheme } from 'lib/hooks/state'
import type { Theme } from 'lib/type/Type'

export const DarkMode = memo((): JSX.Element => {
  const { setTheme, theme } = useTheme()

  const handleClick = useCallback((): void => {
    setTheme(
      match(theme)
        .with('dark', () => {
          const light: Theme = 'light'
          return light
        })
        .with('light', () => {
          const dark: Theme = 'dark'
          return dark
        })
        .with(undefined, () => {
          const light: Theme = 'light'
          return light
        })
        .exhaustive(),
    )
  }, [setTheme, theme])

  const button = useMemo(() => {
    const DefaultButton: DefaultButton = {
      ariaLabel: 'ダークモードとライトモードを入れ替える',
      handleClick,
      type: 'default',
    }
    return DefaultButton
  }, [handleClick])

  return (
    <UiButton button={button}>
      {match(theme)
        .with('dark', () => <Moon />)
        .with('light', () => <Sun />)
        .with(undefined, () => <Sun />)
        .exhaustive()}
    </UiButton>
  )
})

DarkMode.displayName = 'DarkMode'
