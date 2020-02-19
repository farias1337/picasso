import React, { useState, ChangeEvent, FocusEvent } from 'react'
import {
  useField,
  FieldProps as FinalFieldProps,
  FieldMetaState,
  FieldRenderProps
} from 'react-final-form'
import { Form as PicassoForm } from '@toptal/picasso'

import { validators } from '../utils'

const { composeValidators, required: requiredValidator } = validators

type ValueType = string | string[] | number | boolean | undefined | File

export type FieldProps<TInputValue> = FinalFieldProps<
  TInputValue,
  FieldRenderProps<TInputValue, HTMLInputElement>,
  HTMLInputElement
>

export type Props<
  TInputValue,
  TWrappedComponentProps
> = TWrappedComponentProps &
  FieldProps<TInputValue> & {
    name: string
    type?: string
    hideFieldLabel?: boolean
    fieldType?: string
    children: (props: any) => React.ReactNode
  }

type FieldMeta<T> = FieldMetaState<T> & {
  dirtyAfterBlur?: boolean
}

const getInputError = <T extends ValueType>(meta: FieldMeta<T>) => {
  if (!meta.error && !meta.submitError) {
    return null
  }

  if (!meta.touched) {
    return null
  }

  if (meta.dirtyAfterBlur) {
    return null
  }

  if (meta.error) {
    return meta.error
  }

  if (meta.dirtySinceLastSubmit) {
    return null
  }

  return meta.submitError
}

const getValidators = (required: boolean, validate?: any) => {
  if (required && validate) {
    return composeValidators([requiredValidator, validate])
  }

  if (required && !validate) {
    return requiredValidator
  }

  return validate
}

const getProps = ({
  hideFieldLabel,
  error,
  label,
  required
}: {
  hideFieldLabel?: boolean
  error: string
  label: string
  required: boolean
}) => {
  if (hideFieldLabel) {
    return {
      label,
      required
    }
  }
  return {
    error: Boolean(error)
  }
}

const FieldWrapper = <
  TWrappedComponentProps extends { value?: ValueType },
  TInputValue extends ValueType = TWrappedComponentProps['value']
>(
  props: Props<TInputValue, TWrappedComponentProps>
) => {
  const {
    type,
    hideFieldLabel,
    name,
    validate,
    hint,
    label,
    required,
    children,
    value,
    ...rest
  } = props
  const [dirtyAfterBlur, setDirtyAfterBlur] = useState(false)
  const { meta, input } = useField<TInputValue>(name, {
    validate: getValidators(required, validate),
    type,
    value: value
  })

  const error = getInputError<TInputValue>({
    ...meta,
    dirtyAfterBlur
  })

  const childProps = {
    ...rest,
    ...input,
    ...getProps({ hideFieldLabel, error, label, required }),
    onChange: (event: ChangeEvent<HTMLElement>) => {
      setDirtyAfterBlur(true)
      input.onChange(event)
    },
    onBlur: (event: FocusEvent<HTMLElement>) => {
      setDirtyAfterBlur(false)
      input.onBlur(event)
    }
  }

  return (
    <PicassoForm.Field error={error} hint={hint}>
      {!hideFieldLabel && label && (
        <PicassoForm.Label required={required} htmlFor={name}>
          {label}
        </PicassoForm.Label>
      )}
      {children(childProps)}
    </PicassoForm.Field>
  )
}

FieldWrapper.defaultProps = {}

FieldWrapper.displayName = 'FieldWrapper'

export default FieldWrapper
