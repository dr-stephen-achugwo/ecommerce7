import { sizes } from 'lib/config'
import type { Size } from 'lib/type/Type'

const set = new Set<string>(sizes)

export const isSize = (size: string): size is Size => set.has(size)
