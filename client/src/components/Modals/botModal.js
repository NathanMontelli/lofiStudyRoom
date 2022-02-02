import { Offcanvas, Accordion } from 'react-bootstrap'
import { useState } from 'react'
import "../../style.css"
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { trusted } from 'mongoose';
import "./Modal.css"




function Bot() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <ButtonComponent handleBtnClick={handleShow} name={'Music'} />



      <Offcanvas className="botModal" show={show} onHide={handleClose}
        placement="bottom"
        scroll={true}
        backdrop={false}
        >
        

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas Music</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
          <Accordion className='botAccordian' flush>
            <Accordion.Item className='botAccordian' eventKey="0" >
              <Accordion.Header className='botAccordian'>Lofi Girl</Accordion.Header>
              <Accordion.Body>
                <iframe title="lofiGirl" width="95%" height="290" scrolling="no" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1220428705&color=%23dcc2a7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='botAccordian' eventKey="1" >
              <Accordion.Header>Lofi HipHop</Accordion.Header>
              <Accordion.Body>
                <iframe title="lofiHiphop" width="95%" height="290" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/263367934&color=%23dabd9f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"/>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='botAccordian' eventKey="2" >
              <Accordion.Header>Lofi Chill</Accordion.Header>
              <Accordion.Body>
                <iframe title="lofiChill" width="95%" height="290" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/443113290&color=%23dabd9f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"/>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='botAccordian' eventKey="3" >
              <Accordion.Header>Lofi Synthwave</Accordion.Header>
              <Accordion.Body>
                <iframe title="lofiSynthwave" width="95%" height="290" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/870885539&color=%23dabd9f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


        </Offcanvas.Body>
      </Offcanvas>






    </>
  );
}

export default Bot