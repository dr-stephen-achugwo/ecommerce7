import type { ReadonlyDeep } from 'type-fest'

import type { SelectedOption } from 'lib/type/Type'

export const getColorAndSize = (options: ReadonlyDeep<SelectedOption[]>, name: string): string =>
  options.find((option) => option.name === name)?.value ?? ''
