<<<<<<< HEAD
import React from 'react'
import TextEditor from "../src/components/TextEditor";
=======
>>>>>>> 2fa0ad6a64a22713486dc6fec8c3db88b5d0a64b
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Login from './pages/Login'
import Register from './pages/Register'
<<<<<<< HEAD


const App = () => {
  return (
    <>
      <a href='/notes'>notes</a>
      <a href='/register'>register</a>
      <a href='/login'>login</a>
      <a href='/profile'>profile</a>

      <Router>
        <Routes>
          <Route path='/notes' element={<Navigate to={`/documents/${uuidV4()}`} />} />
          <Route path='/documents/:id' element={<TextEditor />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
      </Router>
    <Navigation />
    </>
  )
}


=======
import TutorialModal from './components/TurtorialModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import Lofi1 from './components/Lofi1';
import Lofi1Button from './components/Lofi1Button/Lofi1Button';
import Navigation from './components/Navigation'

// import Home from './pages/Home'
const App = () => {
  return (
    <Router>
      <Navigation />
        <Lofi1Button onClick={Lofi1} />
      <TutorialModal />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
  )
}

>>>>>>> 2fa0ad6a64a22713486dc6fec8c3db88b5d0a64b
export default App
