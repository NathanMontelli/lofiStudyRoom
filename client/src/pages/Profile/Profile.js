import React from 'react'
import './Profile.css'
import { Row, Container, Col } from 'react-bootstrap'
import WelcomeBadge from "../../components/WelcomeBadge"
import Navigation from "../../components/Navigation"
import TextEditor from "../../components/TextEditor"

const Profile = () => {
  return (
    <>
    <section className="background">
        <Navigation />
        <Container>
          <Row>
            <Col md="auto"><WelcomeBadge /> </Col>
          </Row>
        </Container>
      </section>
     
    </>
    )}

export default Profile
