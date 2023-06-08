import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const SvgPuzzleWhite64 = forwardRef(function SvgPuzzleWhite64(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const { className, style = {}, scale, base, 'data-testid': testId } = props
  const scaledSize = base || SIZE * Math.ceil(scale || 1)

  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style,
  }

  return (
    <svg
      fill='none'
      viewBox='0 0 64 64'
      className={className}
      style={svgStyle}
      ref={ref}
      data-testid={testId}
    >
      <g clipPath='url(#a)'>
        <path
          fill='#231F20'
          d='M34.31 54.715a3.917 3.917 0 0 0 2.547-.281 1.033 1.033 0 0 1 1.475.937V63.5H63.5V38.332h-8.13a1.033 1.033 0 0 0-.936 1.476c.377.793.476 1.69.281 2.546a3.897 3.897 0 1 1-7.31-2.559 1.03 1.03 0 0 0-.944-1.463h-8.129v8.129a1.03 1.03 0 0 1-1.462.944 3.897 3.897 0 1 0-2.56 7.31Z'
          opacity={0.3}
        />
        <path
          fill='#fff'
          d='M26.168 25.668h-1v-8.13a1.532 1.532 0 0 1 2.191-1.388 3.394 3.394 0 0 0 4.11-5.181 3.45 3.45 0 0 0-4.121-.946 1.497 1.497 0 0 1-1.455-.085 1.538 1.538 0 0 1-.725-1.31V1H1v24.668H0V0h26.168v8.629a.544.544 0 0 0 .497.541.504.504 0 0 0 .248-.048 4.393 4.393 0 0 1 5.339 1.223 4.393 4.393 0 0 1-5.324 6.708.518.518 0 0 0-.51.03.527.527 0 0 0-.25.455v8.13Z'
        />
        <path
          fill='#fff'
          d='M38.258 33.208a4.392 4.392 0 0 1-4.401-4.394 4.337 4.337 0 0 1 .433-1.9.502.502 0 0 0-.03-.49.542.542 0 0 0-.463-.256h-8.63v-8.629A1.538 1.538 0 0 1 26.61 16c.255-.015.51.035.739.146a3.4 3.4 0 0 0 3.859-5.48 3.38 3.38 0 0 0-1.624-.892 3.424 3.424 0 0 0-2.224.244 1.531 1.531 0 0 1-2.191-1.388V0h26.168v26.168h-8.63a.529.529 0 0 0-.455.25.517.517 0 0 0-.03.51 4.41 4.41 0 0 1 .318 2.869 4.398 4.398 0 0 1-3.26 3.294 4.594 4.594 0 0 1-1.021.117Zm-12.09-8.04h7.629a1.539 1.539 0 0 1 1.54 1.441c.015.255-.036.51-.147.739a3.392 3.392 0 0 0 2.333 4.78 3.382 3.382 0 0 0 4.04-2.545 3.42 3.42 0 0 0-.245-2.224 1.534 1.534 0 0 1 1.388-2.192h7.63V1H26.168v7.63a.527.527 0 0 0 .25.454.52.52 0 0 0 .51.03 4.395 4.395 0 1 1-.015 7.932.504.504 0 0 0-.489.03.543.543 0 0 0-.256.463v7.628ZM64 64H37.833v-8.63a.533.533 0 0 0-.761-.485 4.395 4.395 0 1 1 .015-7.93.503.503 0 0 0 .489-.031.543.543 0 0 0 .257-.463v-8.628h8.628a1.54 1.54 0 0 1 1.54 1.441c.015.255-.035.509-.146.738a3.393 3.393 0 0 0 2.332 4.78 3.383 3.383 0 0 0 4.04-2.545 3.42 3.42 0 0 0-.244-2.224 1.532 1.532 0 0 1 1.388-2.19H64V64Zm-25.167-1H63V38.833h-7.63a.53.53 0 0 0-.455.25.52.52 0 0 0-.03.51 4.394 4.394 0 1 1-8.364 1.885 4.337 4.337 0 0 1 .433-1.9.501.501 0 0 0-.03-.489.544.544 0 0 0-.463-.256h-7.628v7.628A1.538 1.538 0 0 1 37.39 48a1.497 1.497 0 0 1-.739-.146 3.4 3.4 0 0 0-3.858 5.48 3.38 3.38 0 0 0 1.624.892c.747.17 1.53.085 2.223-.244a1.534 1.534 0 0 1 2.192 1.388V63Z'
        />
        <path
          fill='#fff'
          d='M26.168 51.336H0V25.168h8.63a.53.53 0 0 0 .455-.251.52.52 0 0 0 .03-.51 4.408 4.408 0 0 1-.319-2.868 4.398 4.398 0 1 1 8.25 2.883.5.5 0 0 0 .03.489.543.543 0 0 0 .463.256h8.629v8.63a1.54 1.54 0 0 1-1.442 1.54 1.496 1.496 0 0 1-.738-.147 3.4 3.4 0 0 0-3.859 5.48c.448.443 1.01.752 1.624.892.747.17 1.53.084 2.224-.244a1.532 1.532 0 0 1 2.19 1.388v8.63ZM1 50.336h24.168v-7.63a.529.529 0 0 0-.251-.456.517.517 0 0 0-.51-.03 4.394 4.394 0 1 1-1.885-8.364 4.336 4.336 0 0 1 1.9.434.505.505 0 0 0 .489-.03.544.544 0 0 0 .257-.464v-7.628h-7.629A1.539 1.539 0 0 1 16 24.726a1.497 1.497 0 0 1 .147-.738 3.393 3.393 0 0 0-2.333-4.78 3.382 3.382 0 0 0-4.04 2.545 3.42 3.42 0 0 0 .244 2.224 1.53 1.53 0 0 1-1.388 2.19H1v24.169Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h64v64H0z' />
        </clipPath>
      </defs>
    </svg>
  )
})

SvgPuzzleWhite64.displayName = 'SvgPuzzleWhite64'
export default SvgPuzzleWhite64
