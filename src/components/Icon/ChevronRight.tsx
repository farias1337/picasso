import React from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'

interface Props extends StandardProps {
  size?: number
  color?: string
}

const SvgChevronRight = (props: Props) => {
  const { classes, className, style, size, color } = props
  const svgStyle = {
    fontSize: size && `${size}rem`,
    ...style
  }

  return (
    <svg
      {...props}
      viewBox='0 0 7 13'
      className={cx(classes.root, className)}
      style={svgStyle}
      color={color}
    >
      <path d='M7 6.500729c0 .1128091-.040186.2127306-.12055.2997643L1.275544 12.869445C1.195177 12.9564824 1.102912 13 .998749 13c-.104162 0-.196427-.0435176-.276794-.130555l-.601405-.6513128C.040184 12.1310962 0 12.0311755 0 11.9183686c0-.1128055.040184-.2127277.12055-.2997637l4.726381-5.1186053L.12055 1.3813958C.040183 1.294362 0 1.1944406 0 1.0816314 0 .9688296.040183.8689082.12055.7818671L.721955.1305543C.802322.0435205.894587 0 .998749 0c.104163 0 .196427.0435205.276795.1305543L6.87945 6.1995059C6.959814 6.286547 7 6.3864684 7 6.4992703v.0014587z' />
    </svg>
  )
}

SvgChevronRight.displayName = 'SvgChevronRight'

export default withStyles(styles)(SvgChevronRight)
