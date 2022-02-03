import React, { useEffect } from 'react';
import { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import '../ButtonComponent/Button.css'
import ambientSound from '../../Assets/Tutorial/ambientSounds.gif'
import fidgetCons from '../../Assets/Tutorial/fidgetCons.gif'
import musicTutorial from '../../Assets/Tutorial/musicTutorial.gif'
import noteBook from '../../Assets/Tutorial/noteBook.gif'
import part1 from '../../Assets/Tutorial/part1.gif'
import part2 from '../../Assets/Tutorial/part2.gif'
import toggleTheme from '../../Assets/Tutorial/toggleTheme.gif'
import './Modal.css'


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
        className="tutorialModal"
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      {/* <Modal.Header closeButton className="tutorialTitle">
          <Modal.Title >Tutorial</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>


          <Carousel>
            <Carousel.Item pause='hover'>
              <div>
              <h3>Music</h3>
                <p>Access the music button to choose which type of music you want to listen to.</p>
              </div>

              <div>
                <img
                  className="d-block w-100"
                  src={musicTutorial}
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item pause='hover'>
              <div>
                <h3>Ambient Sounds</h3>
                <p>Add ambient sounds that include Rain, Fire, Cars and Waves that play in the background</p>
              </div>
              <img
                className="d-block w-100"
                src={ambientSound}
                alt="Second slide"
              />


            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <div>
                <h3>Theme Toggle</h3>
                <p>Toggle from day themed and night themed background</p></div>
              <div>


                <img
                  className="d-block w-100"
                  src={toggleTheme}
                  alt="Third slide"
                />
              </div>

            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <div>
                <h3>Fidget-cons</h3>
                <p>Ever need a study buddy, use fidget-cons and you can toss your buddy around the screen.</p>
              </div>

              <div>
                <img
                  className="d-block w-100"
                  src={fidgetCons}
                  alt="Fourth slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item pause='hover'>
              <div>
                <h3>Let Your Ideas Flow</h3>
                <p>Access your study notes with this button here and you can save all of your notes. You can even share the link with friends and have real time changes.</p>
              </div>
              <img
                className="d-block w-100"
                src={noteBook}
                alt="Fifth slide"
              />


            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <div>
                <h3>Accessing Profile and Saving Notes Part 1</h3>
                <p>Copy the portion of the link starting with document and you can save them to your profile</p></div>
              <div>


                <img
                  className="d-block w-100"
                  src={part1}
                  alt="Sixth slide"
                />
              </div>

            </Carousel.Item>
            <Carousel.Item pause='hover'>
              <div>
                <h3>Accessing Profile and Saving Notes Part 2</h3>
                <p>Paste that code that you just copied and you can save your notes and access them at any moment.</p></div>
              <div>


                <img
                  className="d-block w-100"
                  src={part2}
                  alt="Seventh slide"
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




