import React, { useEffect, useState } from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import TutorialModal from '../../components/Modals/TurtorialModal';
import Lofi1 from '../../components/Lofi1';
import Lofi1Button from '../../components/Lofi1Button/Lofi1Button';
import Navigation from '../../components/Navigation'
import { Row, Container } from 'react-bootstrap'
import Bot from '../../components/Modals/botModal';
import TextEditior from '../../components/TextEditor'


const Home = () => {

  return (
    <>
      <section className="homeBackground">
        <Navigation />
        <Bot />
        <div className="container">
          <div className="row p-5 rounded-lg ">
            <div className="col-md-4">
              <div className="lofi1Button">
                <Lofi1Button onClick={Lofi1} />
              </div>
            </div>

            <div className="col-md-4">
              {/* <motion.h1
                initial={{ opacity: 0, translateX: -40, translateY: -40 }}
                animate={{ opacity: 1, translatex: -10, translateY: -10 }}
                transition={{ duration: 3 }}>
                <h1 className='lofi2'>LoFi Study Room</h1>
              </motion.h1> */}
            </div>
            <div className="col-md-4">
              <TextEditior></TextEditior>
              <div className="tutorialModal">
                <TutorialModal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home