import React, { Component } from 'react';
import axios from 'axios'

class Accounts extends Component {
  state = {
    accounts: []
  }

  async componentDidMount() {
    const result = await axios.get('http://localhost:5000/api/v1/accounts')
    this.setState({ accounts: result.data })
  }

  render() {
    const { accounts } = this.state;
    console.log('## accounts', accounts)
    const renderAccounts = (
      (accounts.length > 0) ? (
        <ul>{accounts.map((account, index) => <li key={index}>{account.bank_nickname}</li>)}</ul>
      ) : (
        <h2>No Accounts, please add your account</h2>
      )
    )

    return (
      <div>
        <h1>Accounts:</h1>
        {renderAccounts}
      </div>
    )
  }
}

export default Accounts;
