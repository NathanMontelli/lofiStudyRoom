import TextEditor from "../src/components/TextEditor";
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
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    <Navigation />
    </>
  )
}


export default App
