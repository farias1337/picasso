import React, { forwardRef, Ref } from 'react'
import { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const Svg404ErrorWhite64 = forwardRef(function Svg404ErrorWhite64(
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
      viewBox='0 0 64 64'
      fill='none'
      className={className}
      style={svgStyle}
      ref={ref}
      data-testid={testId}
    >
      <path
        opacity={0.3}
        d='M28.27 52.351h32.419a1.92 1.92 0 0 0 1.939-1.939v4.343c0 .815-1.125 1.474-1.94 1.474H29.667L28.27 52.35ZM3.18 52.351h7.484L9.23 56.23H3.296c-.814 0-1.939-.66-1.939-1.474v-3.8c.233.814.97 1.396 1.823 1.396ZM6.01 10.121c-.193.31-.58.543-.969.543-.388 0-.775-.233-.97-.543a1.354 1.354 0 0 0-.387.93c0 .738.62 1.358 1.357 1.358s1.358-.62 1.358-1.357c0-.35-.156-.698-.388-.93ZM10.276 10.121c-.194.31-.581.543-.97.543-.387 0-.775-.233-.969-.543a1.354 1.354 0 0 0-.387.93c0 .738.62 1.358 1.357 1.358s1.357-.62 1.357-1.357c0-.35-.155-.698-.388-.93ZM14.542 10.121c-.194.31-.582.543-.97.543-.387 0-.775-.233-.969-.543a1.354 1.354 0 0 0-.388.93c0 .738.62 1.358 1.358 1.358.736 0 1.357-.62 1.357-1.357 0-.35-.155-.698-.388-.93ZM41.398 18.32 36.2 23.517v7.835l5.197 5.198h7.836l5.197-5.198v-7.835l-5.197-5.197h-7.835Z'
        fill='#231F20'
      />
      <path
        opacity={0.3}
        d='M27.262 49.249H13.767l-.97 3.955 15.9-.077-1.435-3.878ZM24.12 40.718h-8.143l-1.008 3.878h10.586l-1.435-3.878ZM20.902 31.992h-2.715l-1.008 4.072h5.235l-1.512-4.072ZM10.587 61.852h21.29l-1.474-4.072h-18.77l-1.046 4.072Z'
        fill='#231F20'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29.925 56.024h13.262v1H29.925v-1Z'
        fill='#fff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.439 7C2.629 7 2 7.63 2 8.439v46.147c0 .81.63 1.439 1.439 1.439h4.266v1H3.439A2.42 2.42 0 0 1 1 54.585V8.44A2.42 2.42 0 0 1 3.439 6h57.78a2.42 2.42 0 0 1 2.44 2.439v46.147a2.42 2.42 0 0 1-2.44 2.439H45.514v-1h15.705c.81 0 1.44-.63 1.44-1.44V8.44c0-.81-.63-1.439-1.44-1.439H3.44Z'
        fill='#fff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.041 8.837a.663.663 0 1 0 0 1.327.663.663 0 0 0 0-1.327Zm-1.663.664a1.663 1.663 0 1 1 3.327 0 1.663 1.663 0 0 1-3.327 0ZM9.307 8.837a.663.663 0 1 0 0 1.327.663.663 0 0 0 0-1.327Zm-1.663.664a1.663 1.663 0 1 1 3.326 0 1.663 1.663 0 0 1-3.326 0ZM13.572 8.837a.663.663 0 1 0 0 1.327.663.663 0 0 0 0-1.327Zm-1.663.664a1.663 1.663 0 1 1 3.327 0 1.663 1.663 0 0 1-3.327 0ZM5.235 61.352h28.89v1H5.235v-1Z'
        fill='#fff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.175 31.981h3.412L32.682 62.17l-.939.345L20.89 32.98h-2.017L8.019 62.513l-.939-.344L18.175 31.98ZM40.46 16.082h9.72l6.498 6.498v9.721L50.181 38.8h-9.722L33.962 32.3V22.58l6.497-6.497Zm.414 1-5.912 5.912v8.893l5.912 5.912h8.892l5.912-5.912v-8.893l-5.912-5.912h-8.892Z'
        fill='#fff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M40.008 23.35h1.21v4.653h.47v1h-.47v1.245h-1v-1.245H37.89v-.997l2.117-4.657Zm.21 4.653v-2.699l-1.227 2.699h1.227ZM50.478 23.35h1.21v4.653h.47v1h-.47v1.245h-1v-1.245H48.36v-.997l2.117-4.657Zm.21 4.653v-2.699l-1.227 2.699h1.227ZM45.177 24.35c-.693 0-1.245.55-1.245 1.244v2.715c0 .693.552 1.245 1.245 1.245.694 0 1.245-.552 1.245-1.245v-2.715c0-.693-.551-1.245-1.245-1.245Zm-2.245 1.244c0-1.245 1-2.245 2.245-2.245 1.246 0 2.245 1 2.245 2.245v2.715c0 1.245-1 2.245-2.245 2.245s-2.245-1-2.245-2.245v-2.715ZM44.483 61.658V38.003h1v23.655h-1Z'
        fill='#fff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M38.39 61.352h13.186v1H38.39v-1Z'
        fill='#fff'
      />
    </svg>
  )
})

Svg404ErrorWhite64.displayName = 'Svg404ErrorWhite64'
export default Svg404ErrorWhite64
