import './App.css';
import { useWindowSize } from "@react-hook/window-size/throttled";
import React from "react";
//import { useWindowSize as useWindowSizeD } from "@react-hook/window-size/";
//import useScrollPosition from "@react-hook/window-scroll";
import Moody from "public/moody.mp3";
function App() {
    const [width, height] = useWindowSize({ fps: 60 });
    //const [widthD, heightD] = useWindowSizeD();
    //const scrollY = useScrollPosition(60 /*frames per second*/);
    return (
        <div>
        <iframe src="https://editor.p5js.org/richterzo/embed/tmX8UeKTq" width={width} height={height}/>
        <audio
            ref="audio_tag"
            autoPlay={true}
            controls={true} >
            <source type="audio/mp3" src={Moody} />
        </audio>
        </div>
    );
}

export default App;
