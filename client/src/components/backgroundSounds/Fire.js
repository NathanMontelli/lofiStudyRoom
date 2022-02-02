import { useState, useRef, useEffect } from "react";
import fireSound from "../../Assets/campfire.mp3"
import ButtonComponent from "../ButtonComponent/ButtonComponent";



function Fire() {

  const audio = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  
 const setVolume = event =>{
   const  volume = event.target.value
   audio.current.volume = parseFloat(volume)
 }


  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
      // audio.current.volume = 0.3;

    } else {
      audio.current.pause();
    }
  })

  

  return (

    <div>
      
      <audio
        // controls
        loop
        src={fireSound}
        ref={audio}
        autoPlay
      >
      </audio>
      <ButtonComponent handleBtnClick={handlePlay} name={'Fire'} />
      <input
        type="range"
        className="slider"
        min={0}
        max={1}
        step={0.02}
      defaultValue={1}
      onChange={setVolume}
      />
    </div>


  );
}

export default Fire;