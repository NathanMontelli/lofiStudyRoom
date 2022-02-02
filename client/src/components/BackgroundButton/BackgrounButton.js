import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import Background from '../Background';

const BackgroundButton = () => {

  const [hideState, setHideState] = useState(false)
  const handleHide = () =>{
    setHideState(!hideState)
  }

  return (
    <>

      {
        hideState ? < Background /> : null
      }
      <Button variant="primary" onClick={handleHide}>Change The Background!</Button>
    </>

  );
};

export default BackgroundButton;
