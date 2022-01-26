
import {Button} from 'react-bootstrap'
import Geko from '../Lofi1/geko.png'
import './LofiButton.css'


const Lofi1Button = () => {


  function handleClick ()  {
    const pic = "https://user-images.githubusercontent.com/92957388/151237524-91e535b6-c5b8-4ffc-8ad7-5206348675fe.png"
    document.getElementById('animal').src = pic.replace(`90x90`, '225x225');
    document.getElementById('animal').style.display="block";
    console.log('hello')
  }

  return (
    <>
      <img src={Geko} alt="geko" id="animal" className='hidden' />
      <Button onClick={handleClick}variant="primary">GekoMe</Button>
    </>
  );
};

export default Lofi1Button;
