import React from 'react'
import './Home.css'
import TutorialModal from '../../components/Modals/TurtorialModal';
import Lofi1 from '../../components/Lofi1';
import Lofi1Button from '../../components/Lofi1Button/Lofi1Button';
import Navigation from '../../components/Navigation'
import Bot from '../../components/Modals/botModal';
import Rain from '../../components/backgroundSounds/Rain';
import Fire from '../../components/backgroundSounds/Fire';
import Cars from '../../components/backgroundSounds/Cars';
import Waves from '../../components/backgroundSounds/Waves';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';


import { Row, Container, } from 'react-bootstrap'
import Bot from '../../components/Modals/botModal';
import { ThemeContext } from "../../components/Toggler/Toggler"
import { useContext } from "react"


const Home = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [load, upadateLoad] = useState(true);

  return (
    <>
      <section className="homeBackground">
        <Navigation />
        <a href='/notes' target="_blank" > <ButtonComponent name={'Let ur ideas flow'}></ButtonComponent></a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Bot />
        <br />
        <br />
        <br />
        <Rain />
        <br />
        <br />
        <Fire />
        <br />
        <br />
        <Cars />
        <br />
        <br />
        <Waves />
     
        <div className="container">
          <div className="row p-5 rounded-lg ">
            <div className="col-md-4">
              <div className="tutorialModal">
                <Lofi1Button onClick={Lofi1} />
              </div>
            </div>

            <div className="col-md-4">
                 
              {/* <motion.h1
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <div
            className="app"
            style={{ backgroundColor: theme.backgroundColor, color: theme.color, backgroundImage: theme.backgroundImage,
            backgroundSize: theme.backgroundSize,
          minHeight: theme.minHeight}}
          >

            <Navigation />
            
            {/* <div className="container">
              <div className=" "> */}
                <div className="col-md-4">
                  <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
                  <button type="button btn" onClick={toggleTheme}>
                    It's a {isDark ? "Dark" : "Light"} theme
                  </button>
                </div>
                <Bot />
                <div className="lofi1Button">
                  <Lofi1Button onClick={Lofi1} />

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
              <div className="lofi1Button">
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
