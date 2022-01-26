import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Geko from './geko.png'
// import Lofi1Button from '../Lofi1Button';


const Image = styled(motion.img)`
position: absolute;
width: 100%;
max-width: 500px;
max-width: 500px;
`;

const Lofi1 = () => {
  return (
    <>
        <Image src={Geko} alt='geko'id ='animal'
          drag={true}
          // dragConstraints={{left: 250, right: 250, top:250, bottom: 250}}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          // dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        whileTap={{ scale: 0.9 }}
          />

    </>
  );
};

export default Lofi1;

