import React, { forwardRef, Ref } from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { StandardProps } from '@toptal/picasso-shared'

import kebabToCamelCase from '../utils/kebab-to-camel-case'
import styles from './styles'
const BASE_SIZE = 16

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: string
  base?: number
}
const useStyles = makeStyles(styles, { name: 'PicassoSvgPortfolioDesigner16' })
const SvgPortfolioDesigner16 = forwardRef(function SvgPortfolioDesigner16(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const { className, style = {}, color, scale, base } = props
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
    ...style
  }

  return (
    <svg
      viewBox='0 0 16 16'
      className={cx(...classNames)}
      style={svgStyle}
      ref={ref}
    >
      <path d='M0 0h7v7H0V0zm1 1v5h5V1H1zm8-1h7v7H9V0zm1 1v5h5V1h-5zM0 9h7v7H0V9zm1 6h5v-5H1v5zm8-6h7v7H9V9zm1 6h5v-5h-5v5z' />
    </svg>
  )
})

SvgPortfolioDesigner16.displayName = 'SvgPortfolioDesigner16'
export default SvgPortfolioDesigner16
