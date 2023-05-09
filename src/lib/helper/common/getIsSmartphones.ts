import { getUserAgentData } from 'lib/helper/common'

export const getIsSmartphones = (): boolean => /android|ipad|iphone|ipod/iu.test(getUserAgentData())
