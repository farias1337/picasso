import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import type { StandardProps } from '@toptal/picasso-shared'

import kebabToCamelCase from '../utils/kebab-to-camel-case'
import styles from './styles'
const BASE_SIZE = 16

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: string
  base?: number
}
const useStyles = makeStyles(styles, {
  name: 'PicassoSvgLogo',
})
const SvgLogo = forwardRef(function SvgLogo(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const {
    className,
    style = {},
    color,
    scale,
    base,
    'data-testid': testId,
  } = props
  const classes: Record<string, string> = useStyles(props)
  const classNames = [classes.root, className]
  const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1)
  const colorClassName = kebabToCamelCase(`${color}`)

  if (classes[colorClassName]) {
    classNames.push(classes[colorClassName])
  }

  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style,
  }

  return (
    <svg
      viewBox='0 0 109 30'
      className={cx(...classNames)}
      style={svgStyle}
      ref={ref}
      data-testid={testId}
    >
      <path
        fill='var(--logo-emblem-color)'
        d='m8.065 0 6.664 6.664c.048.043.097.092.15.145l5.814 5.816-9.455 9.405 4.331 4.332-2.898 2.88-6.621-6.621c-.076-.07-.156-.15-.237-.231L0 16.58l9.422-9.368L5.13 2.918 8.065 0Zm4.218 10.442a.425.425 0 0 0-.259 0c-.086.022-.161.065-.312.215L6.33 16.016c-.156.156-.194.225-.22.311a.422.422 0 0 0 0 .258c.026.086.07.162.22.312l1.708 1.71c.156.155.226.193.312.22a.425.425 0 0 0 .259 0c.086-.027.161-.065.307-.215l5.382-5.359c.156-.156.194-.225.22-.311a.422.422 0 0 0 0-.258c-.02-.086-.064-.162-.215-.312l-1.708-1.71c-.156-.155-.226-.193-.312-.22Z'
      />
      <path
        fill='var(--logo-text-color)'
        d='M63.533 7.41c2.158 0 3.996.832 5.466 2.449 1.486 1.57 2.237 3.72 2.229 6.397-.008 2.622-.774 4.906-2.292 6.523-1.501 1.609-3.417 2.425-5.7 2.425-1.974-.007-3.757-.713-4.942-1.926l-.173-.185L58.105 30l-3.902-.008v-.29l.047-22.096 3.879.008-.008 2.692c1.275-1.436 3.331-2.896 5.412-2.896Zm24.993.055c2.23 0 3.77.502 4.95 1.475 1.13.94 1.737 2.61 1.788 4.369l.004.278-.024 11.397h-3.95v-.479c0-.486-.001-.992-.007-1.499-1.142 1.586-2.737 2.355-4.864 2.355-1.69 0-3.113-.51-4.16-1.46-1.057-.965-1.62-2.284-1.612-3.823.015-2.888 2.055-4.884 5.627-5.516l.293-.049 4.74-.745v-.377c0-.8-.235-1.766-.704-2.159-.485-.408-1.064-.753-2.08-.753-2.786 0-3.354 2.055-3.385 3.088l-.002.09-3.503.048c0-1.523.703-3.493 2.135-4.733 1.14-.99 2.808-1.452 4.421-1.503l.302-.004h.031ZM73.222 3.006l3.887.008L77.1 7.67l3.613.008-.008 3.241-3.613-.007-.016 8.736c0 .957.204 1.585.618 1.884.438.314 1.33.023 1.33.023l.352 3.399s-1.228.314-2.01.314c-1.017 0-1.877-.26-2.55-.77-1.079-.816-1.634-2.252-1.626-4.262l.015-9.324-3.26-3.258 3.268.008.008-4.655Zm-22.96 6.955c1.118 1.161 2.455 3.21 2.447 6.397-.008 3.187-1.345 5.228-2.463 6.381-1.533 1.57-3.613 2.473-5.71 2.473-.085 0-.171 0-.257-.008-2.245-.008-4.223-.808-5.881-2.378-1.666-1.586-2.51-3.768-2.51-6.507 0-2.74.852-4.922 2.526-6.5 1.65-1.562 3.628-2.354 5.873-2.354 2.22-.063 4.387.847 5.974 2.496Zm-9.01-7.198v3.854l-7.523.008L33.745 25l-4.059-.008v-.353l.031-18.022h-7.671l.007-3.854h19.2Zm55.892.259 3.504.008v.094l-.04 21.852-3.495-.007v-.102l.031-21.845Zm9.22 16.688c.72 0 1.353.259 1.862.777.516.518.774 1.138.774 1.868 0 .738-.258 1.35-.774 1.852a2.522 2.522 0 0 1-1.861.77c-.728 0-1.346-.252-1.846-.77a2.498 2.498 0 0 1-.766-1.852c0-.722.25-1.35.766-1.868s1.134-.777 1.846-.777Zm.016.431c-.61 0-1.126.22-1.548.652-.43.424-.642.942-.642 1.562 0 .612.204 1.138.634 1.577.422.424.938.644 1.556.644.61 0 1.126-.22 1.549-.644.422-.431.64-.95.64-1.577a2.13 2.13 0 0 0-.64-1.562 2.087 2.087 0 0 0-1.549-.652Zm.172.77c.579 0 .923.345.923.816 0 .4-.297.706-.704.785l.712 1.271h-.485v.008l-.704-1.256h-.477v1.256h-.43v-2.88h1.165Zm-.062.384h-.673v.88h.673c.375 0 .555-.142.555-.432 0-.299-.188-.448-.555-.448ZM91.31 16.9l-3.894.659c-1.9.322-2.784 1.067-2.792 2.347-.008 1.179.83 1.962 2.127 2.035l.18.006h.016c2.486 0 4.255-1.944 4.359-4.764l.004-.244v-.04Zm-47.047-5.966c-1.306 0-2.44.502-3.355 1.5-.9.98-1.36 2.291-1.36 3.9 0 1.61.46 2.92 1.352 3.901.915 1.005 2.05 1.508 3.355 1.515 1.33 0 2.472-.502 3.387-1.499.922-1.005 1.384-2.315 1.392-3.9.007-1.594-.462-2.905-1.385-3.902-.915-1.005-2.056-1.515-3.386-1.515Zm18.339.118h-.016c-1.306 0-2.393.479-3.316 1.468-.915.957-1.376 2.205-1.384 3.712 0 1.523.454 2.889 1.377 3.886.938.965 2.025 1.444 3.323 1.444 1.322 0 2.432-.487 3.324-1.436.93-.99 1.376-2.355 1.384-3.878.008-1.515-.461-2.763-1.368-3.713-.884-.98-2.002-1.483-3.324-1.483Z'
      />
    </svg>
  )
})

SvgLogo.displayName = 'SvgLogo'
export default SvgLogo
