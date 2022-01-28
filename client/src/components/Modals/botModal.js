import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import "../../style.css"
import ButtonComponent from '../ButtonComponent';




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
        backdrop={false}>

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas Music</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <iframe title="soundCloud" width="95%" height="290" scrolling="no" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1220428705&color=%23dcc2a7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />


        </Offcanvas.Body>
      </Offcanvas>










    </>
  );
}

export default Bot