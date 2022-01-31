import { useState, useRef, useEffect } from "react";
import WavesSound from "../../Assets/waves.mp3"
import ButtonComponent from "../ButtonCompnent/ButtonComponent";


function Waves() {

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
        src={WavesSound}
        ref={audio}
        autoPlay
      >
      </audio>

      <ButtonComponent handleBtnClick={handlePlay} name={'Waves'} />
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

export default Waves;