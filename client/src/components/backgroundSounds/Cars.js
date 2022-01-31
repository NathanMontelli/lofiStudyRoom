import { useState, useRef, useEffect } from "react";
import CarsSound from "../../Assets/cars.mp3"
import ButtonComponent from "../ButtonCompnent/ButtonComponent";


function Cars() {

  const audio = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }


  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
      audio.current.volume = 0.2;

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
      {/* <input
        type="range"
        min={0}
        max={20}
        step={0.02}
      value={volume}
      onChange={setVolume}
      /> */}
    </div>


  );
}

export default Cars;