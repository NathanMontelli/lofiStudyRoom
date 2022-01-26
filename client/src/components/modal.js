import React from 'react';
import { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import first from "../Assets/otis.png"
import second from "../Assets/DemonSlayerCorps.png"
import third from "../Assets/headshot3.png"


const Example = () => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <h1 className='text-center'>Tutorial</h1>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h1 className='text-center'>Tutorial</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <Carousel>
            <Carousel.Item pause='hover'>
              <img
                className="d-block w-100"
                src={first}
                alt="First slide"
              />
              
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <img
                className="d-block w-100"
                src={second}
                alt="Second slide"
              />
            
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <img
                className="d-block w-100"
                src={third}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example




