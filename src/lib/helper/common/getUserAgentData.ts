import { getIsWindowExist } from 'lib/helper/common'

export const getUserAgentData = (): string => {
  if (!getIsWindowExist()) return ''
  return window.navigator.userAgentData
    ? window.navigator.userAgentData.brands.map((item) => `${item.brand}/${item.version}`).join(' ')
    : window.navigator.userAgent
}
