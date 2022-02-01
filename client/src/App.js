import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Preloader from "./components/preLoader/pre.js";
import "./style.css";
import { ThemeContext } from "./components/Toggler/Toggler"
import { useContext } from "react"

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <div
        className="app"
        style={{ imgfile: theme.imgfile }}
      // style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
        <button type="button" onClick={toggleTheme}>
          Toggle theme
        </button>
      </div>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
