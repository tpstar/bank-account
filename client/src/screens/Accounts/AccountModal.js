import React from 'react'
import AccountForm from './AccountForm'

export default ({ handleSubmit }) => {
  return (
    <div>
      <h2 style={{ paddingTop: 30, paddingLeft: 20, paddingBottom: 30 }}>New Account</h2>
      <AccountForm
        onSubmit={handleSubmit}
      />
    </div>
  )
}
