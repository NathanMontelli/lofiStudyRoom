import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import './Lofi2Button.css'
import Lofi2 from '../Lofi2'



const Lofi2Button = () => {

  const [hideState, setHideState] = useState(false)
  const handleHide = () => {
    setHideState(!hideState)
    console.log(handleHide)
  }


  return (
    <>

      {
        hideState ? < Lofi2 /> : null
      }
      <Button variant="primary" onClick={handleHide}>PizzaMe</Button>

    </>
  );
};

export default Lofi2Button;
