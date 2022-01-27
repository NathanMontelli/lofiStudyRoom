import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Geko from './geko.png'
import { useRef } from "react";
// import Lofi1Button from '../Lofi1Button';


const Image = styled(motion.img)`
position: absolute;
width: 100%;
max-width: 250px;
filter: drop-shadow(0px 5px 3px black);
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

