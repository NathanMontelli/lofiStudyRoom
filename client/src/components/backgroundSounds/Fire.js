import { useState, useRef, useEffect } from "react";
import fireSound from "../../Assets/campfire.mp3"
import ButtonComponent from "../ButtonCompnent/ButtonComponent";



function Fire() {

  const audio = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }


//   const [slider, setSlider] = useState({
//     value: 0,
//     label: ''
//   });

//  const onSlide = () => {
//    setSlider(slider.value)
//  }


  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
      audio.current.volume = 0.5;

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
      {/* <input
        type="range"
        min={0}
        max={1}
        step={0.02}
      value={slider.value}
      onChange={onSlide}
      /> */}
    </div>


  );
}

export default Fire;