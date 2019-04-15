import React, { FunctionComponent, ChangeEvent, ReactNode } from 'react'
import cx from 'classnames'
import MUISelect from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'
import { capitalize } from '@material-ui/core/utils/helpers'

import FormControl from '../FormControl'
import InputLabel from '../InputLabel'
import Input from '../Input'
import OutlinedInput from '../OutlinedInput'
import MenuItem from '../MenuItem'
import { StandardProps } from '../Picasso'
import styles from './styles'

interface Option {
  key: number
  text: string | ReactNode
  value: string | number
}

export interface Props extends StandardProps {
  /** If true, the switch will be disabled */
  disabled?: boolean
  /** Component ID */
  id?: string
  /** Width of the component which will apply `min-width` to the `input` */
  width: 'full' | 'shrink' | 'auto'
  /** Inner text label for the `Select` */
  label?: string
  /** Placeholder option which is selected by default */
  placeholder?: string
  /** Whether `Select` should be rendered as native HTML `<select />` */
  native?: boolean
  /** Callback invoked when `Select` changes its state. */
  onChange?: (event: ChangeEvent<HTMLSelectElement>, child: ReactNode) => void
  /** List of options to be rendered as `Select` */
  options: Option[]
  /** Selected value */
  value?: string | number
  /** The variant to use */
  variant?: 'standard' | 'outlined'
}

const renderOptions = (
  options: Option[],
  placeholder?: string,
  isNative?: boolean
) => {
  if (!options.length) {
    return null
  }

  const OptionComponent = isNative ? 'option' : MenuItem

  const resultOptions = options.map(({ key, value, text }) => (
    <OptionComponent key={key || value} value={value}>
      {text}
    </OptionComponent>
  ))

  if (placeholder) {
    resultOptions.unshift(
      <OptionComponent disabled key='placeholder' value=''>
        {placeholder}
      </OptionComponent>
    )
  }

  return resultOptions
}

export const Select: FunctionComponent<Props> = ({
  classes,
  className,
  style,
  width,
  id,
  label,
  native,
  options,
  placeholder,
  variant,
  disabled,
  onChange,
  value
}) => {
  const hasLabel = !!label
  const fullWidth = width === 'full'

  const outlinedInput =
    variant === 'outlined' ? (
      <OutlinedInput
        classes={{
          input: hasLabel ? classes.inputWithLabel : classes.input
        }}
        fullWidth={fullWidth}
        labelWidth={0}
      />
    ) : (
      <Input
        classes={{
          input: hasLabel ? classes.inputWithLabel : classes.input
        }}
        disableUnderline
        fullWidth={fullWidth}
      />
    )

  const select = (
    <MUISelect
      className={className}
      style={style}
      classes={{
        root: cx(classes.root, classes[`root${capitalize(width)}`]),
        icon: classes.icon,
        select: classes.select
      }}
      displayEmpty
      id={id}
      input={outlinedInput}
      native={native}
      variant={variant}
      disabled={disabled}
      value={value}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        getContentAnchorEl: undefined // needed to restore default behaviour
      }}
      onChange={onChange}
    >
      {renderOptions(options, placeholder, native)}
    </MUISelect>
  )

  return (
    <FormControl className={cx(className, { [classes.rootFull]: fullWidth })}>
      {hasLabel && (
        <InputLabel
          classes={{
            root: classes.label,
            shrink: classes.labelShrink
          }}
          htmlFor={id}
          variant={variant}
        >
          {label}
        </InputLabel>
      )}
      {select}
    </FormControl>
  )
}

Select.defaultProps = {
  disabled: false,
  native: false,
  onChange: () => {},
  value: '',
  variant: 'outlined',
  width: 'full'
}

Select.displayName = 'Select'

export default withStyles(styles)(Select)
