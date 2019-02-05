import React, { ReactChild } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { ThemeStyle as MUIVariant } from '@material-ui/core/styles/createTypography'
import { PropTypes } from '@material-ui/core'
import MUITypography from '@material-ui/core/Typography'
import cx from 'classnames'

import styles from './styles'

type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'large'
  | 'small'
  | 'caption'

type Weights = 'thin' | 'light' | 'regular' | 'semibold' | 'bold'

interface Props {
  children: ReactChild
  variant: VariantType
  // TODO see if there is a better way to specify this
  classes: Record<string, string>
  align?: PropTypes.Alignment
  weight: Weights
}

interface Variants {
  // TODO: see if string can be replaced with VariantType
  [name: string]: MUIVariant
}

const VARIANTS: Variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  caption: 'caption',
  large: 'body1',
  small: 'body1'
}

const resolveRootClass = (props: Props) => {
  const { classes, weight, variant } = props

  return cx(
    {
      [classes.large]: variant === 'large',
      [classes.small]: variant === 'small'
    },
    classes[weight]
  )
}

const Typography: React.FunctionComponent<Props> = props => {
  const { variant, children, align } = props
  const resolvedVariant = VARIANTS[variant]
  const rootClass = resolveRootClass(props)

  return (
    <MUITypography
      align={align}
      classes={{
        root: rootClass
      }}
      variant={resolvedVariant}
    >
      {children}
    </MUITypography>
  )
}

Typography.defaultProps = {
  weight: 'regular'
}

export default withStyles(styles)(Typography)
