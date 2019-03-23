import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Button, Container, Modal, ModalBody, ModalHeader } from 'reactstrap'

import AccountCard from './AccountCard'

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

class Accounts extends Component {
  state = {
    accounts: [],
    showModal: false,
  }

  async componentDidMount() {
    const result = await axios.get('http://localhost:5000/api/v1/accounts')
    this.setState({ accounts: result.data })
  }

  createAccount = () => {
    this.setState({
      showModal: true
    })
  }

  _toggleModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { accounts, showModal } = this.state;
    console.log('## accounts', accounts)
    const renderAccounts = (
      (accounts.length > 0) ? (
        accounts.map((account, index) => <AccountCard key={index} account={account}/>)
      ) : (
        <h4>No Accounts, please add your account</h4>
      )
    )

    return (
      <Container fluid style={{marginTop: 30}}>
        <Modal
          isOpen={showModal}
          toggle={this._toggleModal}
          className="big-modal"
          fade={false}
        >
            <>
              <ModalHeader toggle={this._toggleModal}>
                Add Account
              </ModalHeader>
              <ModalBody style={{ backgroundColor: '#f0f0f0' }}>
                <p>Form</p>
              </ModalBody>
            </>
        </Modal>
        <Header>
          <h2>Account Listing</h2>
          <Button
            className="cta btn"
            size={'md'}
            color={'primary'}
            onClick={this.createAccount}
          >
            Add Account
          </Button>
        </Header>
        {renderAccounts}
      </Container>
    )
  }
}

export default Accounts;
