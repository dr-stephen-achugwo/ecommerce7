import { cssTransition, toast } from 'react-toastify'

import { getIsReduce } from 'lib/helper/common'

const transition = cssTransition({
  collapse: false,
  enter: 'toast',
  exit: 'toast',
})

export const showToast = (message: string): void => {
  const isReduce = getIsReduce()
  isReduce ? toast(message, { transition }) : toast(message)
}
