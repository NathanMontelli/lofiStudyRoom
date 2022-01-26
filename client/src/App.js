import TextEditor from "../src/components/TextEditor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
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
        <Route path='/notes' element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path='/documents/:id' element={<TextEditor />} />
      </Routes>
    </Router>
  )
}

export default App
