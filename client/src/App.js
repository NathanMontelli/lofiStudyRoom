import TextEditor from "../src/components/TextEditor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Preloader from "./components/preLoader/pre.js";
import "./style.css";
import Contact from './pages/Contact'

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
        <Route path='/profile' element={<Profile />} />
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

