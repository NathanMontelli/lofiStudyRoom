import { useState, useRef, useEffect } from "react";
import WavesSound from "../../Assets/waves.mp3"
import ButtonComponent from "../ButtonComponent/ButtonComponent";


function Waves() {

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
        src={WavesSound}
        ref={audio}
        autoPlay
      >
      </audio>

      <ButtonComponent handleBtnClick={handlePlay} name={'Waves'} />
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

export default Waves;