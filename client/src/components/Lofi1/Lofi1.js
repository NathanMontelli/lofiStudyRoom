import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Geko from './geko.png';
import Pizza from './pizza.png';
import DognCat from './dogncat.png';
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
  `;
  // Use the below code above to see dimensions
  // border: 1px solid #f00;


const Lofi1 = () => {
  const constraintsRef = useRef(null);
  return (
    <>

      <MotionConstraints ref={constraintsRef}>
        <Image src={Geko} alt='geko'
          drag={true}
          dragConstraints={constraintsRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          dragTransition={{ bounceStiffness: 45, bounceDamping: 5 }}
          whileTap={{ scale: 0.9 }}
          
        />

        <Image src={Pizza} alt='pizza'
          drag={true}
          dragConstraints={constraintsRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          dragTransition={{ bounceStiffness: 45, bounceDamping: 5 }}
          whileTap={{ scale: 0.9 }}

        />

        <Image src={DognCat} alt='DognCat'
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

