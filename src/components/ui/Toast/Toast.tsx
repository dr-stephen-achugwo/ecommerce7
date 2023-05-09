import { memo } from 'react'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { match } from 'ts-pattern'

import { cn, getIsSmartphones } from 'lib/helper/common'
import { useTheme } from 'lib/hooks/state'

const Toast = memo((): JSX.Element => {
  const { theme } = useTheme()
  const isSmartphones = getIsSmartphones()

  return (
    <ToastContainer
      autoClose={3000}
      bodyClassName="text-sm font-med block p-3"
      closeButton={false}
      closeOnClick
      draggable={false}
      hideProgressBar
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      position="top-center"
      toastClassName={cn(
        'flex cursor-pointer justify-between overflow-hidden rounded-large p-1',
        isSmartphones && 'mx-4 mt-4',
        match(theme)
          .with('dark', () => 'text-black bg-white')
          .with('light', () => 'text-white bg-black')
          .with(undefined, () => 'text-white bg-black')
          .exhaustive(),
      )}
      transition={Flip}
    />
  )
})

Toast.displayName = 'Toast'

export default Toast
