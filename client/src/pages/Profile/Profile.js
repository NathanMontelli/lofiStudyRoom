import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import WelcomeBadge from "../../components/WelcomeBadge"
import Navigation from "../../components/Navigation"
import TextEditor from "../../components/TextEditor"
import "./Profile.css"

const Profile = () => {
  return (
    <>
    <section className= "background">
    <Navigation />
        <Container>
          <Row>
            <Col md="auto"><WelcomeBadge /></Col>
            <Col md="auto"><TextEditor /></Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
    )}

export default Profile
