import type { Undefinable } from 'option-t/esm/Undefinable'
import { match } from 'ts-pattern'

import s from 'components/ui/UiButton/UiButton.module.css'
import type { Color } from 'lib/type/Type'

export const getColorClass = (color: Undefinable<Color>): string =>
  match(color)
    .with('Black', () => s.black)
    .with('White', () => s.white)
    .with('Brown', () => s.brown)
    .with('Charcoal', () => s.charcoal)
    .with('Chocolate', () => s.chocolate)
    .with('Grey', () => s.grey)
    .with('Light Grey', () => s.lightGrey)
    .with('Taupe Marl', () => s.taupeMarl)
    .with('Ink', () => s.ink)
    .with('Light Grey Marl', () => s.lightGreyMarl)
    .with('Cadet Green', () => s.cadetGreen)
    .with('Cinder Marl', () => s.cinderMarl)
    .with('Taupe', () => s.taupe)
    .with('Military', () => s.military)
    .with('Grey Marl', () => s.greyMarl)
    .with('Deep Ocean', () => s.deepOcean)
    .with('Vintage Black', () => s.vintageBlack)
    .with('Chalk White', () => s.chalkWhite)
    .with('Nights', () => s.nights)
    .with('Optic White', () => s.opticWhite)
    .with('Tempest Blue', () => s.tempestBlue)
    .with('Olive Green', () => s.oliveGreen)
    .with('Putty', () => s.putty)
    .with('Ivory', () => s.ivory)
    .with('Red', () => s.red)
    .with('Green', () => s.green)
    .with(undefined, () => s.default)
    .exhaustive()
