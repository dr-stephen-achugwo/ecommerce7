import type { Undefinable } from 'option-t/esm/Undefinable'

import s from 'components/ui/UiButton/UiButton.module.css'

export const getChooseClass = (choose: Undefinable<boolean>): Undefinable<string> =>
  choose === false ? s.notChoose : undefined
