import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap'

import InputField from '../../components/InputField'
import { required, validateRoutingNumber } from '../../utils/validators'

const AccountForm = props => {

    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          name="bank_nickname"
          component={InputField}
          type="text"
          label="Bank Nickname"
          validate={required}
          warn={required}
        />
        <Field
          name="bank_address"
          component={InputField}
          type="text"
          label="Bank Address"
          validate={required}
          warn={required}
        />
        <Field
          name="routing_number"
          component={InputField}
          type="text"
          label="Routing Number"
          placeholder="type the Routing Number that contains only numbers"
          validate={[required, validateRoutingNumber]}
          warn={required}
        />
        <Field
          name="account_number"
          component={InputField}
          type="text"
          label="Account Number"
          validate={required}
          warn={required}
        />
        <Button type="submit" color="primary">
          Done
        </Button>
      </form>
    )
}

export default reduxForm({
  form: 'Account'
})(AccountForm)
