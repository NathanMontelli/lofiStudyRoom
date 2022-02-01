import React from 'react';
import './Contact.css'
import Peter from './peter.png'
import Abe from './abe.png'
import Austin from './austin.png'
import Nathan from './nathan.png'
import Navigation from '../../components/Navigation'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ButtonComponent from '../../components/ButtonCompnent/ButtonComponent';

const Contact = () => {
 

  return (
    <>
      <section className='landing' >
        <Navigation  />
        <Container style={{ "padding-top": 60}}fluid="md">
          <Row>
            {/* PETERS CARD  */}
            <Col className="bottom">
              <Card className="text-center bgCard" >

                <Card.Body>
                  <Card.Title>Peter Song</Card.Title>
                  <Card.Img variant="top" src={Peter} />
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                  <a target="_blank" rel="noopener noreferrer" href='https://github.com/Psong562'> <ButtonComponent name={'GitHub'} /> </a> </Card.Footer>
              </Card>
              {/* NATHANS CARD */}
            </Col>
            <Col>
              <Card className="text-center bgCard">

                <Card.Body>
                  <Card.Title>Nathan Monetelli </Card.Title>
                  <Card.Img variant="top" src={Nathan} />
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"> <a target="_blank" rel="noopener noreferrer" href='https://github.com/NathanMontelli'><ButtonComponent name={'GitHub'} /> </a></Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row>
            {/* ABES CARD  */}
            <Col className="bottom">
              <Card className="text-center bgCard">

                <Card.Body>
                  <Card.Title>Abraham Solis</Card.Title>
                  <Card.Img variant="top" src={Abe} />
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"> <a target="_blank" rel="noopener noreferrer" href='https://github.com/Abraham-Solis' ><ButtonComponent name={'GitHub'} /></a></Card.Footer>
              </Card>
            </Col>
            {/* AUSTINS CARD */}
            <Col >
              <Card className="text-center bgCard" >

                <Card.Body>
                  <Card.Title>Austin</Card.Title>
                  <Card.Img variant="top" src={Austin} />
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
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
              <Card className="text-center bgCard" >

                <Card.Body >
                  <Card.Title>Kevin</Card.Title>
                  <Card.Img variant="top" src={Austin} />
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted"> <a target="_blank" rel="noopener noreferrer" href='https://github.com/kelleyindahouse'><ButtonComponent name={'GitHub'} /></a></Card.Footer>
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
