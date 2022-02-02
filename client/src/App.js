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
import 'bootstrap/dist/css/bootstrap.min.css';
import Lofi1 from './components/Lofi1';
import Lofi1Button from './components/Lofi1Button/Lofi1Button';
import Navigation from './components/Navigation'
import BackgroundButton from './components/BackgroundButton'
import Background from './components/Background'


import { useState, useEffect } from 'react'
import Preloader from "./components/preLoader/pre.js";
import "./style.css";
import Profile from './pages/Profile'




import Contact from './pages/Contact'



// import Home from './pages/Home'
import { useState, useEffect } from 'react'
import Preloader from "./components/preLoader/pre.js";
import "./style.css";
import { ThemeContext } from "./components/Toggler/Toggler"
import { useContext } from "react"

const App = () => {
  // const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
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
        
        <Route path='/profile' element={<Profile />} />
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

    <>
      
      <Router>
        <Preloader load={load} />
        {/* <div className="App" id={load ? "no-scroll" : "scroll"}>
          <div
        className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color, backgroundImage: theme.backgroundImage }}
      >
        <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
        <button type="button" onClick={toggleTheme}>
          Toggle theme
        </button>
      </div> */}
          <Routes>

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        {/* </div> */}
      </Router>
    </>
  )
}

export default App
