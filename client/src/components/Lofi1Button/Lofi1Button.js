import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import './LofiButton.css'
import Lofi1 from '../Lofi1'



const Lofi1Button = () => {

  const [hideState, setHideState] = useState(false)
  const handleHide = () => {
  setHideState(!hideState)
  console.log(handleHide)
  }


return (
    <>

      {
        hideState ? < Lofi1 /> : null
      }
    <Button variant="primary" onClick={handleHide}>GekoMe</Button>
 
    </>
  );
};

export default Lofi1Button;
