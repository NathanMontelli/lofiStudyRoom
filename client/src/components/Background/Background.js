import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import City from './city.jpg'


const CityImg = styled(motion.img)`
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

const Background = () => {
  return (
    <CityImg  src={City}/>

  );
};

export default Background;
