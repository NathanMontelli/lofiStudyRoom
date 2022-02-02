import { useState, useRef, useEffect } from "react";
import CarsSound from "../../Assets/cars.mp3"
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./BackgroundSounds.css"



function Cars() {

  const audio = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }



  const setVolume = event => {
    const volume = event.target.value
    audio.current.volume = parseFloat(volume)
  }


  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
      // audio.current.volume = 0.5;

    } else {
      audio.current.pause();
    }
  })


  return (

    <div>
      <audio
        // controls
        loop
        src={CarsSound}
        ref={audio}
        autoPlay
      >
      </audio>

      <ButtonComponent handleBtnClick={handlePlay} name={'Cars'} />
      <input
        className="slider"
        type="range"
        min={0}
        max={1}
        step={0.02}
      defaultValue={1}
      onChange={setVolume}
      />
    </div>


  );
}

export default Cars;