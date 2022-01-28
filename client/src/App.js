import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
import TutorialModal from './components/Modals/TurtorialModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import Lofi1 from './components/Lofi1';
import Lofi1Button from './components/Lofi1Button/Lofi1Button';
import Navigation from './components/Navigation'
import BackgroundButton from './components/BackgroundButton'
import Background from './components/Background'


import { useState, useEffect } from 'react'
import Preloader from "./components/preLoader/pre.js";
import "./style.css";

import Bot from './components/Modals/botModal';

import Contact from './pages/Contanct'


// import Home from './pages/Home'
const App = () => {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (

    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>

      {/* <Navigation />
      <Lofi1Button onClick={Lofi1} /> 
      <BackgroundButton onClick={Background} />
      <TutorialModal />
      <Bot /> */}
      <Routes> 
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </Router>

  )
}

export default App
