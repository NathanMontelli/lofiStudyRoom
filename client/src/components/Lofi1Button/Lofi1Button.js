import React, { useState } from 'react';
import './LofiButton.css'
import Lofi1 from '../Lofi1'
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';



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
    {/* <Button variant="primary" onClick={handleHide}>GekoMe</Button> */}

    <ButtonComponent handleBtnClick={handleHide} name={"Fidget-cons"} />
 
    </>
  );
};

export default Lofi1Button;
