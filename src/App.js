import './App.css';
import { useWindowSize } from "@react-hook/window-size/throttled";
import React from "react";
//import { useWindowSize as useWindowSizeD } from "@react-hook/window-size/";
//import useScrollPosition from "@react-hook/window-scroll";
import track1 from "./assets/tracks/moody.mp3";
import silence from "./assets/tracks/250-milliseconds-of-silence.mp3";

function App() {
    const [width, height] = useWindowSize({ fps: 60 });
    let audio = new Audio(track1);

    const start = () => {
        audio.play()
    }
    //const [widthD, heightD] = useWindowSizeD();
    //const scrollY = useScrollPosition(60 /*frames per second*/);
    return (
        <div>
            <iframe src="https://editor.p5js.org/richterzo/embed/tmX8UeKTq" width={width} height={height}/>
            <button onClick={start}>Play</button>
        </div>
    );
}

export default App;
