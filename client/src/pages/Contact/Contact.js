import React from 'react';
import './Contact.css'
import Peter from './peter.png'
import Abe from './abe.png'
import Austin from './austin.png'
import Nathan from './nathan.png'
import Kevin from './kevin.png'
import Navigation from '../../components/Navigation'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const Contact = () => {
 

  return (
    <>
      <section className='landing' >
        <Navigation  />
        <Container style={{ "padding-top": 60}}fluid="md">
          <Row>
            {/* PETERS CARD  */}
            <Col>
              <Card className="text-center bgCard bottom" >

                <Card.Body>
                  <Card.Title className='glowlyText'>Peter Song</Card.Title>
                  <Card.Img variant="top" src={Peter} />
                  <Card.Text>
                    "The future belongs to those who believe in the beauty of their dreams."
                    <br />
                    - Shoyo Hinata.
                  </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                  <a target="_blank" rel="noopener noreferrer" href='https://github.com/Psong562'> <ButtonComponent name={'GitHub'} /> </a> </Card.Footer>
              </Card>
              {/* KEVINS CARD */}
            </Col>
            <Col>
              <Card className="text-center bgCard">

                <Card.Body>
                  <Card.Title className='glowlyText'>Kevin Kelley </Card.Title>
                  <Card.Img variant="top" src={Kevin} />
                  <Card.Text>
                    "I'll never forget you version 32."
                    <br />
                    - Albert Einstein
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"> <a target="_blank" rel="noopener noreferrer" href='https://github.com/kelleyindahouse'><ButtonComponent name={'GitHub'} /> </a></Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row>
            {/* ABES CARD  */}
            <Col >
              <Card className="text-center bgCard bottom">

                <Card.Body>
                  <Card.Title className='glowlyText'>Abraham Solis</Card.Title>
                  <Card.Img variant="top" src={Abe} />
                  <Card.Text>
                    "Deleted code is debugged code." 
                    <br />
                    - Jeff Sickel
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"> <a target="_blank" rel="noopener noreferrer" href='https://github.com/Abraham-Solis' ><ButtonComponent name={'GitHub'} /></a></Card.Footer>
              </Card>
            </Col>
            {/* AUSTINS CARD */}
            <Col >
              <Card className="text-center bgCard" >

                <Card.Body>
                  <Card.Title className='glowlyText'>Austin Hall</Card.Title>
                  <Card.Img variant="top" src={Austin} />
                  <Card.Text>
                    “Code is read more than it is written.”
                  
                    <br />
                    ― Daniel Roy Greenfeld
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"> <a target="_blank" rel="noopener noreferrer" href='https://github.com/BR0C0DE'><ButtonComponent name={'GitHub'} /></a></Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row>
            {/* KEVINS CARD */}
            <Col md={3}> </Col>
            <Col md={6} className='center'>
              <Card className="text-center bgCard" style={{"margin-bottom": 20}} >

                <Card.Body >
                  <Card.Title className='glowlyText'>Nathan Montelli </Card.Title>
                  <Card.Img variant="top" src={Nathan} />
                  <Card.Text>
                    "Before software can be reusable it first has to be usable."
                    <br /> 
                  - Ralph Johnson
                  </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted"> <a target="_blank" rel="noopener noreferrer" href='https://github.com/NathanMontelli'><ButtonComponent name={'GitHub'} /></a></Card.Footer>
              </Card>
            </Col>
          <Col md={3}> </Col>
          </Row>
  
        </Container>
      </section>
    </>



  );
};

export default Contact;
