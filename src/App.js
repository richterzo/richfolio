import './App.css';
import { useWindowSize } from "@react-hook/window-size/throttled";
import React from "react";
//import { useWindowSize as useWindowSizeD } from "@react-hook/window-size/";
//import useScrollPosition from "@react-hook/window-scroll";
function App() {
    const [width, height] = useWindowSize({ fps: 60 });
    let audio = new Audio("/moody.mp3")
    const start = () => {
        audio.play()
    }
    //const [widthD, heightD] = useWindowSizeD();
    //const scrollY = useScrollPosition(60 /*frames per second*/);
    return (
        <div>
            <button id = "player" onClick={start}>Play</button>
        <iframe src="https://editor.p5js.org/richterzo/embed/tmX8UeKTq" width={width} height={height}/>
        </div>
    );
}

export default App;
