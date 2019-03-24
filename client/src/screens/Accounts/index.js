import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import { Button, Container, Modal, ModalBody } from 'reactstrap'

import AccountCard from './AccountCard'
import AccountModal from './AccountModal'
import { fetchAccounts, submitAccount } from '../../actions'

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
    showModal: false,
    // selectedAccount: null
  }

  async componentDidMount() {
    await this.props.fetchAccounts()
  }

  createAccount = () => {
    this.setState({
      showModal: true
    })
  }

  saveAccount = async values => {
    await this.props.submitAccount(values)
    this.setState({
      showModal: false
    })
  }

  toggleModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleSubmit = async values => {
    console.log('## values', values)
  }

  render() {
    const { showModal } = this.state
    const { accounts } = this.props
    console.log('## accounts', accounts)

    const renderAccounts = (
      (accounts.length > 0) ? (
        accounts.map(account => <AccountCard key={account.id} account={account}/>)
      ) : (
        <h4>No Accounts, please add your account</h4>
      )
    )

    return (
      <Container fluid style={{marginTop: 30}}>
        <Modal
          isOpen={showModal}
          toggle={this.toggleModal}
          className="big-modal"
          fade={false}
        >
          <ModalBody style={{ backgroundColor: '#f0f0f0' }}>
            <AccountModal handleSubmit={this.saveAccount} />
          </ModalBody>
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

const mapStateToProps = ({ accounts }) => ({ accounts })

export default connect(mapStateToProps, { fetchAccounts, submitAccount })(Accounts);