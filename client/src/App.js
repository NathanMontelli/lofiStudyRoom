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
import 'bootstrap/dist/css/bootstrap.min.css';


// import Home from './pages/Home'
const App = () => {
  return (
   
    <Router>
      <Routes> 
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profilepage />} />
        {/* {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
   
  )
}

export default App
