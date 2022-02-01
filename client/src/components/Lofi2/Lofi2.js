import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Pizza from './pizza.png'
import { useRef } from "react";
// import Lofi1Button from '../Lofi1Button';


const Image = styled(motion.img)`
position: absolute;
width: 100%;
max-width: 250px;
filter: drop-shadow(0px 5px 3px black);
`;

const MotionConstraints = styled(motion.div)`
  height: 80vh;
  width: 80vw;
  border: 1px solid #f00;
  `;



const Lofi2 = () => {
  const constraintsRef = useRef(null);
  return (
    <>

      <MotionConstraints ref={constraintsRef}>
        <Image src={Pizza} alt='Pizza'
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

export default Lofi2;