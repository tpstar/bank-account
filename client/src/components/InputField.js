import React from 'react'
import { Input } from 'reactstrap'

const renderError = error =>
  error && <span className="small text-danger">{error}</span>
const renderWarning = warning =>
  warning && <span className="small text-warning">{warning}</span>

const InputField = ({
  input,
  label,
  type,
  children,
  placeholder,
  readOnly,
  meta: { touched, error, warning }
}) => (
  <fieldset className="form-group">
    {label && <label>{label}</label>}
    <Input
      placeholder={placeholder}
      {...input}
      type={type}
      rows={String(type === 'textarea' && '4')}
      style={{ resize: 'vertical' }}
    >
      {children}
    </Input>
    {touched && (renderError(error) || renderWarning(warning))}
  </fieldset>
)

export default InputField
