import 'bootstrap/dist/css/bootstrap.min.css';
import Lofi1 from './components/Lofi1';
import Lofi1Button from './components/Lofi1Button/Lofi1Button';
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
    <Navigation />
      <Lofi1Button onClick={Lofi1} />
     
    </>
  )
}

export default App
