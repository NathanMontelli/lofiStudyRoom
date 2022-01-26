import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
import TutorialModal from './components/TurtorialModal';
import Navigation from './components/Nav';
// import Home from './pages/Home'
const App = () => {
  return (
    <Router>
      <Navigation />
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

export default App
