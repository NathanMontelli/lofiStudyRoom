import React from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'

// let username = 

const WelcomeBadge = () => {
  return ( 
    <Container>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
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