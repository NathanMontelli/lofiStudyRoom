import TextEditor from "../src/components/TextEditor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'

const App = () => {
  return (
    <>
      <a href='/notes'>notes</a>
      <Router>
        <Routes>
          <Route path='/notes' element={<Navigate to={`/documents/${uuidV4()}`} />} />
          <Route path='/documents/:id' element={<TextEditor />} />
        </Routes>
      </Router>
    </>
  )
}

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
// import Home from './pages/Home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
  )
}

export default App
