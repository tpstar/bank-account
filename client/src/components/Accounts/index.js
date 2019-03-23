import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import { Button, Container, Modal, ModalBody, ModalHeader } from 'reactstrap'

import AccountCard from './AccountCard'
import { fetchAccounts } from '../../actions'

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
  }

  async componentDidMount() {
    await this.props.fetchAccounts()
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
    const { showModal } = this.state
    const { accounts } = this.props
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

const mapStateToProps = ({ accounts }) => ({ accounts })

export default connect(mapStateToProps, { fetchAccounts })(Accounts);
