import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Profilepage from './pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import Preloader from "./components/preLoader/pre.js";
import "./style.css";
import Bot from './components/Modals/botModal';


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
        <Route path='/profile' element={<Profilepage />} />
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </Router>
   
  )
}

export default App
