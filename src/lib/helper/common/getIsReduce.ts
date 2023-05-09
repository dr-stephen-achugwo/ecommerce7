import { getIsWindowExist } from 'lib/helper/common'

export const getIsReduce = (): boolean => {
  if (!getIsWindowExist()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
