import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState, useEffect } from 'react'
import Preloader from "./components/preLoader/pre.js";
import "./style.css";




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
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </Router>
   
  )
}

export default App
