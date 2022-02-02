import { useState, useRef, useEffect } from "react";
import rainSound from "../../Assets/rain-03.mp3"
import ButtonComponent from "../ButtonComponent/ButtonComponent";


function Rain() {

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
      audio.current.volume = 0.3;

    } else {
      audio.current.pause();
    }
  })


  return (

    <div>
      <audio
        // controls
        loop
        src={rainSound}
        ref={audio}
        autoPlay
      >
      </audio>

      <ButtonComponent handleBtnClick={handlePlay} name={'Rain'} />
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

export default Rain;