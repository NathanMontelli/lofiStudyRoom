import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import City from './city.jpg'


const CityImg = styled(motion.img)`
min-height:100vh;
background-size:cover;
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
background-repeat: no-repeat;
 height: 100%;
background-position: center;
`;

const Background = () => {
  return (
    <CityImg  src={City}/>

  );
};

export default Background;
