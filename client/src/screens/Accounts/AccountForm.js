import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap'

import InputField from '../../components/InputField'

const AccountForm = props => {

    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          name="bank_nickname"
          component={InputField}
          type="text"
          label="Bank Nickname"
        />
        <Field
          name="bank_address"
          component={InputField}
          type="text"
          label="Bank Address"
        />
        <Field
          name="routing_number"
          component={InputField}
          type="text"
          label="Routing Number"
        />
        <Field
          name="account_number"
          component={InputField}
          type="text"
          label="Account Number"
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
