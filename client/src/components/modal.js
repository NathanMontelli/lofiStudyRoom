import React from 'react';
import { useState } from 'react'
import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import first from "../Assets/lofigirl.gif"
import second from "../Assets/jake-lofi.gif"
import third from "../Assets/nuro.gif"
import "../Button.css"


const TutorialModal = () => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);






  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        <h1 className='text-center'>Tutorial</h1>
      </Button> */}
      <button onClick={handleShow}>
        <span className="cta">
          <span>Tutorial</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>
      </button>




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
              <div>
                <h3>How to Login</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>

              <div>

                <img
                  className="d-block w-100"
                  src={first}
                  alt="First slide"
                />

              </div>
            </Carousel.Item>

            <Carousel.Item pause='hover'>
              <div>
                <h3>Moving items on the page</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <img
                className="d-block w-100"
                src={second}
                alt="Second slide"
              />


            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <div>
                <h3>Etc</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div>
              <div>


                <img
                  className="d-block w-100"
                  src={third}
                  alt="Third slide"
                />
              </div>


              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>




        </Modal.Body>
      
      </Modal>
    </>
  );
}

export default TutorialModal




