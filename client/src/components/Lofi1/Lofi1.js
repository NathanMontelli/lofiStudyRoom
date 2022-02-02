import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Geko from './geko.png';
import Pizza from './pizza.png';
import DognCat from './dogncat.png';
import { useRef } from "react";
import './Lofi1.css'
// import Lofi1Button from '../Lofi1Button';


const Image = styled(motion.img)`
position: absolute;
width: 100%;
max-width: 400px;
filter: drop-shadow(0px 5px 3px black);
`;

const MotionConstraints = styled(motion.div)`

  height: 80vh;
  width: 80vw;
  margin-bottom:160px;
  margin-right:160px;
  `;
  // Use the below code above to see dimensions
  // border: 1px solid #f00;
 


const Lofi1 = () => {
  const constraintsRef = useRef(null);
  return (
    <>

      <MotionConstraints className='mobileConstraints' ref={constraintsRef}>
        <Image src={Geko} alt='geko'
          style={{ overflowX: "hidden" }}
          drag={true}
          dragConstraints={constraintsRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          dragTransition={{ bounceStiffness: 10, bounceDamping: .2}}
          whileTap={{ scale: 1.5 }}
          
        />

        <Image src={Pizza} alt='pizza'
          drag={true}
          dragConstraints={constraintsRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          dragTransition={{ bounceStiffness: 20, bounceDamping: .2 }}
          whileTap={{ scale: 0.9 }}

        />

        <Image src={DognCat} alt='DognCat'
          drag={true}
          dragConstraints={constraintsRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          dragTransition={{ bounceStiffness: 30, bounceDamping: .2 }}
          whileTap={{ scale: 1.5 }}

        />

    </MotionConstraints>

  
    </>
  );
};

export default Lofi1;

