import React from 'react'
import AccountForm from './AccountForm'

export default ({ account, handleSubmit }) => {
  let title;
  if (!!account) {
    title = 'Update Account'
  } else {
    title = 'New Account'
  }

  return (
    <div>
      <h2 style={{ paddingTop: 30, paddingLeft: 20, paddingBottom: 30 }}>{title}</h2>
      <AccountForm
        onSubmit={handleSubmit}
        initialValues={account}
      />
    </div>
  )
}
