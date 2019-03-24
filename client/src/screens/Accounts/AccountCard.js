import React from 'react'
import { Card, Col, Row } from 'reactstrap'

export default ({account}) => (
  <Card body style={{margin: 20, width: 700}}>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <h5>{account.bank_nickname}</h5>
      <i style={{fontSize: "0.8em"}}>{account.bank_address}</i>
    </div>
    <hr style={{marginTop: '0.6em'}}/>
    <Row>
      <Col>routing number: {account.routing_number}</Col>
      <Col>account number: {account.account_number}</Col>
    </Row>
  </Card>
)
