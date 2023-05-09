import { memo } from 'react'
import type { ReadonlyDeep } from 'type-fest'

import { Slider } from 'components/common'
import type { ImageHeight, ImageWidth } from 'components/ui'
import { UiImage } from 'components/ui'
import type { Detail } from 'lib/type/Type'

type Props = { detail: ReadonlyDeep<Detail> }

export const ItemImage = memo(({ detail }: Props): JSX.Element => {
  const { images, title } = detail
  const imageHeight: ImageHeight = 500
  const imageWidth: ImageWidth = 500

  return (
    <div className="flex w-1/2 flex-col sm:w-full">
      {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
      <div>
        <Slider>
          {images.map((image, i) => (
            <div key={image}>
              <UiImage
                alt={title || 'Item Image'}
                height={imageHeight}
                priority={i === 0}
                src={image}
                type="default"
                width={imageWidth}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
})

ItemImage.displayName = 'ItemImage'
