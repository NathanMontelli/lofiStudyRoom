import TextEditor from "../src/components/TextEditor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
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
      <Routes> 
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/notes' element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path='/documents/:id' element={<TextEditor />} />
      </Routes>

      </div>
    </Router>

  )
}

export default App
