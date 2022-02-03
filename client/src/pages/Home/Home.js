import React, { useState } from 'react'
import './Home.css'
import TutorialModal from '../../components/Modals/TurtorialModal';
import Lofi1 from '../../components/Lofi1';
import Lofi1Button from '../../components/Lofi1Button/Lofi1Button';
import Navigation from '../../components/Navigation'
import Bot from '../../components/Modals/botModal';
import { ThemeContext } from "../../components/Toggler/Toggler"
import { useContext } from "react"
import Rain from '../../components/BackgroundSounds/Rain.js';
import Fire from '../../components/BackgroundSounds/Fire.js';
import Cars from '../../components/BackgroundSounds/Cars.js';
import Waves from '../../components/BackgroundSounds/Waves.js';


import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const Home = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [load, updateLoad] = useState(true);

  return (
    <>
      <section className="homeBackground">
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <div
            className="app"
            style={{
              backgroundColor: theme.backgroundColor, color: theme.color, backgroundImage: theme.backgroundImage,
              backgroundSize: theme.backgroundSize,
              minHeight: theme.minHeight, backgroundPosition: theme.backgroundPosition
            }}
          >
            <Navigation />
            <a href='/studyNotes' target="_blank" > <ButtonComponent name={'Let ur ideas flow'}></ButtonComponent></a>
            <br />
            <br />
            <br />
            <br />

            <div className="col-md-4">
              <ButtonComponent name={`Toggle Theme`} type="button btn" handleBtnClick={toggleTheme}>
                It's a {isDark ? "Dark" : "Light"} theme
              </ButtonComponent>
            </div>
            <br />
            <br />
            <Bot />
            <br />
            <br />
            <br />
            <br />
            <Rain />
            <br />
            <Fire />
            <br />
            <Cars />
            <br />
            <Waves />
            <div className="lofi1Button">
              <TutorialModal />

            </div>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <div className="tutorialModal">
                <Lofi1Button onClick={Lofi1} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
