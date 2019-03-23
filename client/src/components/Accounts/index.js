import React, { Component } from 'react';
import axios from 'axios'

import AccountCard from './AccountCard'

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
        accounts.map((account, index) => <AccountCard key={index} account={account}/>)
      ) : (
        <h2>No Accounts, please add your account</h2>
      )
    )

    return (
      <div className="container" style={{marginTop: 30}}>
        <h2>Account Listing</h2>
        {renderAccounts}
      </div>
    )
  }
}

export default Accounts;
