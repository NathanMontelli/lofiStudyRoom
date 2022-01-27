import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Geko from './geko.png'
import { useRef } from "react";
// import Lofi1Button from '../Lofi1Button';


const Image = styled(motion.img)`
position: absolute;
width: 100%;
max-width: 500px;
max-width: 500px;
`;

const MotionConstraints = styled(motion.div)`
  height: 95vh;
  width: 95vw;
`;



const Lofi1 = () => {
  const constraintsRef = useRef(null);
  return (
    <>

      <MotionConstraints ref={constraintsRef}>
        <Image src={Geko} alt='geko' id='animal'
          drag={true}
          dragConstraints={constraintsRef}
          // dragConstraints={{left: 250, right: 250, top:250, bottom: 250}}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          dragTransition={{ bounceStiffness: 45, bounceDamping: 5 }}
          whileTap={{ scale: 0.9 }}
        />
    </MotionConstraints>
     

  

    </>
  );
};

export default Lofi1;

