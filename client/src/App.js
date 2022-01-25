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

export default App
