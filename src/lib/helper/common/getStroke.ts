import type { Undefinable } from 'option-t/esm/Undefinable'
import { match } from 'ts-pattern'

import type { Color, Theme } from 'lib/type/Type'

export const getStroke = (theme: Undefinable<Theme>, colorState: Undefinable<Color>): string =>
  match(theme)
    .with('dark', () => (colorState === 'Black' ? 'white' : 'currentColor'))
    .with('light', () => (colorState === 'White' || colorState === 'Ivory' ? 'black' : 'currentColor'))
    .with(undefined, () => (colorState === 'White' || colorState === 'Ivory' ? 'black' : 'currentColor'))
    .exhaustive()
