import { colors } from 'lib/config'
import type { Color } from 'lib/type/Type'

const set = new Set<string>(colors)

export const isColor = (color: string): color is Color => set.has(color)
