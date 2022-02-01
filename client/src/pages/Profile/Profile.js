import React from 'react'
import './Profile.css'
import { Row, Container, Col } from 'react-bootstrap'
import WelcomeBadge from "../../components/WelcomeBadge"
import Navigation from "../../components/Navigation"
import Rain from '../../components/backgroundSounds/Rain';
import Fire from '../../components/backgroundSounds/Fire';
import Cars from '../../components/backgroundSounds/Cars';
import Waves from '../../components/backgroundSounds/Waves';
import Bot from '../../components/Modals/botModal';
import TextEditor from "../../components/TextEditor"
import NotesBadge from "../../components/NotesBadge"

const Profile = () => {
  return (
    <>
    <section className="background">
        <Navigation />
        <Container>
          <Row>
            <Col><WelcomeBadge /> </Col>
            <Col><NotesBadge /></Col>
          </Row>
            <Col md="auto"></Col>
          <Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Bot />
            <br />
            <br />
            <br />
            <Rain />
            <br />
            <br />
            <Fire />
            <br />
            <br />
            <Cars />
            <br />
            <br />
            <Waves />
            </Row>
        </Container>
      </section>
     
    </>
    )}

export default Profile
