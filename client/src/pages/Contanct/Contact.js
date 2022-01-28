import React from 'react';
import './Contact.css'
import Peter from './peter.png'
import Abe from './abe.png'
import Austin from './austin.png'
// import Nathan from './nathan.png'
import Navigation from '../../components/Navigation'
import { Container, Row, Col, Card,Button} from 'react-bootstrap'

const Contact = () => {
  return (
    <>
    <section className=''>
      <Navigation />
        <Container fluid="md">
          <Row>
            {/* PETERS CARD  */}
            <Col> 
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Peter Song</Card.Title>
                  <Card.Img variant="top" src={Peter} />
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            {/* ABES CARD */}
            </Col>
            <Col>
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Abraham Solis</Card.Title>
                  <Card.Img variant="top" src={Abe} />
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </Col>
          </Row>
          <Row>
            {/* NATHANS CARD  */}
            <Col>
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Nathan</Card.Title>
                  <Card.Img variant="top" src={Abe} />
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </Col>
            {/* AUSTINS CARD */}
            <Col>
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Austin</Card.Title>
                  <Card.Img variant="top" src={Austin} />
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Kevin</Card.Title>
                  <Card.Img variant="top" src={Austin} />
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
    </section>
    </>



  );
};

export default Contact;
