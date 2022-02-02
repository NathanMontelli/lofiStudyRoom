import React, { useEffect } from 'react';
import { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import first from "../../Assets/lofigirl.gif"
import second from "../../Assets/jake-lofi.gif"
import third from "../../Assets/nuro.gif"
import '../ButtonComponent/Button.css'

import ButtonComponent from '../ButtonComponent/ButtonComponent';

const TutorialModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);


useEffect(() =>{
  handleShow()

},[])
  
return (
  <>

    <ButtonComponent className='toggles'handleBtnClick={handleShow} name={'Tutorial'} />


      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title><h1 className='text-center '>Tutorial</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Carousel>
            <Carousel.Item pause='hover'>
              <div>
                <h3>Music</h3>
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
                <h3>Ambient Sounds</h3>
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
                <h3>Theme Toggle</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div>
              <div>


                <img
                  className="d-block w-100"
                  src={third}
                  alt="Third slide"
                />
              </div>

            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <div>
                <h3>Fidget-cons</h3>
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
                <h3>Let Your Ideas Flow</h3>
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
                <h3>Accessing Profile and Saving Notes</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div>
              <div>


                <img
                  className="d-block w-100"
                  src={third}
                  alt="Third slide"
                />
              </div>

            </Carousel.Item>
          </Carousel>




        </Modal.Body>

      </Modal>
    </>
  );
}

export default TutorialModal




