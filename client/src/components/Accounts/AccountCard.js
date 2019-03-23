import React from 'react'
import { Card, Col, Row } from 'reactstrap'

export default ({account}) => (
  <Card body style={{margin: 20, width: 700}}>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <h4>{account.bank_nickname}</h4>
      <i style={{fontSize: "0.8em", alignSelf: "flex-end", paddingBottom: 3}}>{account.bank_address}</i>
    </div>
    <hr style={{marginTop: '0.6em'}}/>
    <Row>
      <Col>routing number: {account.routing_number}</Col>
      <Col>account number: {account.account_number}</Col>
    </Row>
  </Card>
)
