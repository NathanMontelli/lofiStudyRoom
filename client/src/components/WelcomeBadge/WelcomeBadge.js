import React from 'react'
import { useState } from 'react'
import { Form, Button, Alert, Badge, Card, Row, Col, Container  } from 'react-bootstrap'
import Navigation from "../Navigation"
import username from "../../utils/UserAPI"

// let username = 

const WelcomeBadge = () => {
  return ( 
    <Container>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Welcome (username)</Card.Title>
        <Card.Text>
          This is your profile page
        </Card.Text>
        <Button variant="primary">Set profile picture</Button>
      </Card.Body>
    </Card>
        </Col>
      <Col></Col>
      </Row>
    </Container>
 )}
   

 
export default WelcomeBadge