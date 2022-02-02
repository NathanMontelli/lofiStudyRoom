import React, { useState } from 'react'
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

import { ThemeContext } from "../../components/Toggler/Toggler"
import { useContext } from "react"


const Home = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [load, updateLoad] = useState(true);

  return (
    <>
      <section>
        <div className="container">
          <div className="row p-5 rounded-lg ">
            <div className="App" id={load ? "no-scroll" : "scroll"}>
              <div
                className="app"
                style={{
                  backgroundColor: theme.backgroundColor, color: theme.color, backgroundImage: theme.backgroundImage,
                  backgroundSize: theme.backgroundSize,
                  minHeight: theme.minHeight, backgroundPosition:theme.backgroundPosition
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
                <br />
                <br />
                <br />
                <Bot />
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
