import Image from 'next/image'
import { memo, useReducer } from 'react'

import type { ImageHeight, ImageWidth } from 'components/ui'
import { config } from 'lib/config'
import { cn, getIsSmartphones } from 'lib/helper/common'
import { useScroll, useThrottle } from 'lib/hooks/common'

type Type = 'default' | 'zoom'

type Props = {
  alt: string
  height: ImageHeight
  priority: boolean
  src: string
  type: Type
  width: ImageWidth
}

export const UiImage = memo(({ alt, height, priority, src, type, width }: Props): JSX.Element => {
  const isSmartphones = getIsSmartphones()
  const [isMounted, mount] = useReducer(() => true, false)
  const { isAboutCenter, isTopOrBottom, ref } = useScroll()

  const imageSrc = src || config.placeholderImg
  const isZoom = type === 'zoom' && isMounted
  const isPcZoom = isZoom && !isSmartphones
  const isCenteringZoom = isZoom && isAboutCenter && !isTopOrBottom

  const handleLoadingComplete = useThrottle(mount, 500)

  return (
    <div className="overflow-hidden" ref={ref}>
      <Image
        alt={alt}
        blurDataURL={config.blurDataURL}
        // eslint-disable-next-line react/forbid-component-props
        className={cn(
          isZoom && 'motion-safe:scale-100 motion-safe:duration-700 motion-safe:ease-in-out',
          isPcZoom && 'motion-safe:hover:scale-110 motion-safe:focus:scale-110',
          isCenteringZoom && 'motion-safe:scale-110',
        )}
        height={height}
        onLoadingComplete={handleLoadingComplete}
        placeholder="blur"
        priority={priority}
        quality="85"
        src={imageSrc}
        width={width}
      />
    </div>
  )
})

UiImage.displayName = 'UiImage'
