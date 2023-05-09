import { useKeenSlider } from 'keen-slider/react'
import type { ReactNode } from 'react'
import { Children, isValidElement, memo, useCallback, useMemo, useReducer, useState } from 'react'

import 'keen-slider/keen-slider.min.css'
import s from './Slider.module.css'

import { type DefaultButton, UiButton } from 'components/ui'
import { cn, getIsReduce } from 'lib/helper/common'

type Props = { children: NonNullable<ReactNode> }

export const Slider = memo(({ children }: Props): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, mount] = useReducer(() => true, false)
  const isReduce = getIsReduce()
  const duration = isReduce ? 0 : 500

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    created: () => {
      mount()
    },
    defaultAnimation: { duration },
    loop: true,
    slideChanged(slide) {
      // eslint-disable-next-line prefer-destructuring
      const slideNumber = slide.track.details.rel
      setCurrentSlide(slideNumber)
    },
    slides: { perView: 1 },
  })

  const handleClickNext = useCallback((): void => {
    slider.current?.next()
  }, [slider])

  const handleClickPrev = useCallback((): void => {
    slider.current?.prev()
  }, [slider])

  const nextButton = useMemo(
    () =>
      ({
        ariaLabel: '次の画像を表示する',
        className: cn(s.rightControl, s.control),
        handleClick: handleClickNext,
        type: 'default',
      } satisfies DefaultButton),
    [handleClickNext],
  )

  const prevButton = useMemo(
    () =>
      ({
        ariaLabel: '前の画像を表示する',
        className: cn(s.leftControl, s.control),
        handleClick: handleClickPrev,
        type: 'default',
      } satisfies DefaultButton),
    [handleClickPrev],
  )

  return (
    <div className={s.root}>
      {isMounted ? (
        <>
          <UiButton button={prevButton} />
          <UiButton button={nextButton} />
        </>
      ) : null}
      <div
        className="keen-slider h-full transition-opacity duration-150"
        ref={ref}
        style={{ opacity: isMounted ? 1 : 0 }}
      >
        {Children.map(children, (child) =>
          isValidElement(child)
            ? {
                ...child,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                props: {
                  ...child.props,
                  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
                  className: `${child.props.className ? `${child.props.className} ` : ''}keen-slider__slide`,
                },
              }
            : child,
        )}
      </div>
      <div className={cn(s.positionIndicatorsContainer)}>
        {[...Array(slider.current?.slides.length).keys()].map((idx) => (
          <UiButton
            button={{
              ariaLabel: `${idx}枚目の画像を表示する`,
              className: cn(s.positionIndicator, {
                [s.positionIndicatorActive]: currentSlide === idx,
              }),
              handleClick: (): void => {
                slider.current?.moveToIdx(idx)
              },
              type: 'default',
            }}
            key={idx}
          >
            <div className={s.dot} />
          </UiButton>
        ))}
      </div>
    </div>
  )
})

Slider.displayName = 'Slider'
