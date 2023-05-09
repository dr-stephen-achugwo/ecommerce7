import { memo } from 'react'

import { Prose } from 'components/layouts'
import type { ImageHeight, ImageWidth } from 'components/ui'
import { Flex, UiImage } from 'components/ui'
import { config } from 'lib/config'

export const Description = memo((): JSX.Element => {
  const imageHeight: ImageHeight = 500
  const imageWidth: ImageWidth = 500

  return (
    <Prose>
      <Flex>
        <div className="flex w-1/2 flex-col justify-center pt-6 sm:order-1 sm:w-full">
          <UiImage
            alt="Brandの画像1"
            height={imageHeight}
            priority
            src={config.image1}
            type="default"
            width={imageWidth}
          />
        </div>
        <div
          className="flex w-1/2 max-w-none flex-col justify-center pt-6 sm:order-2 sm:w-full"
          dangerouslySetInnerHTML={{
            __html: `${config.description1}`,
          }}
        />
        <div
          className="flex w-1/2 max-w-none flex-col justify-center pt-6 sm:order-4 sm:w-full"
          dangerouslySetInnerHTML={{
            __html: `${config.description2}`,
          }}
        />
        <div className="flex w-1/2 flex-col justify-center pt-6 sm:order-3 sm:w-full">
          <UiImage
            alt="Brandの画像2"
            height={imageHeight}
            priority
            src={config.image2}
            type="default"
            width={imageWidth}
          />
        </div>
        <div className="flex w-1/2 flex-col justify-center pt-6 sm:order-5 sm:w-full">
          <UiImage
            alt="Brandの画像3"
            height={imageHeight}
            priority
            src={config.image3}
            type="default"
            width={imageWidth}
          />
        </div>
        <div
          className="flex w-1/2 max-w-none flex-col justify-center pt-6 sm:order-6 sm:w-full"
          dangerouslySetInnerHTML={{
            __html: `${config.description3}`,
          }}
        />
      </Flex>
    </Prose>
  )
})

Description.displayName = 'Description'
