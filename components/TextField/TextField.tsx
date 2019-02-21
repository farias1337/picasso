import React from 'react'
import cx from 'classnames'
import MUITextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput'
import { InputLabelProps } from '@material-ui/core/InputLabel'

import InputAdornment from '../InputAdornment'
import { Classes } from '../styles/types'
import styles from './styles'

interface Props {
  classes: Classes
  className?: string
  iconPosition: 'start' | 'end'
  Icon: React.ReactNode
  InputProps: OutlinedInputProps
  InputLabelProps: Partial<InputLabelProps>
  multiline?: boolean
}

const TextField: React.FunctionComponent<Props> = props => {
  const {
    Icon,
    iconPosition,
    InputProps = {} as OutlinedInputProps,
    InputLabelProps = {},
    classes,
    children,
    multiline,
    ...restProps
  } = props

  if (Icon) {
    const IconAdornment = (
      <InputAdornment
        className={cx(
          classes.icon,
          iconPosition === 'end' ? classes.iconEnd : classes.iconStart
        )}
        position={iconPosition}
      >
        {Icon}
      </InputAdornment>
    )

    // InputLabelProps.shrink = 'auto' TODO: uncomment when 'auto' PR is merged
    InputProps.notched = false
    InputLabelProps.classes = { shrink: classes.shrink }

    if (iconPosition === 'end') {
      InputProps.endAdornment = IconAdornment
    } else {
      InputProps.startAdornment = IconAdornment
      InputLabelProps.className = classes.labelIconStart
    }
  }

  return (
    <MUITextField
      InputLabelProps={{
        ...InputLabelProps,
        classes: {
          root: classes.label,
          shrink: classes.labelShrink
        }
      }}
      InputProps={{
        ...InputProps,
        classes: {
          root: multiline ? classes.rootMultiline : classes.root,
          input: classes.input,
          inputMultiline: classes.inputMultiline
        }
      }}
      multiline={multiline}
      {...restProps}
      variant='outlined'
    >
      {children}
    </MUITextField>
  )
}

TextField.defaultProps = {
  iconPosition: 'end'
}

export default withStyles(styles)(TextField)
