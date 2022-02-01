import { useState, useRef, useEffect } from "react";
import rainSound from "../../Assets/rain-03.mp3"
import ButtonComponent from "../ButtonCompnent/ButtonComponent";


function Rain() {

  const audio = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }


  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
      audio.current.volume = 0.7;

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

export default Rain;