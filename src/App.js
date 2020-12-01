import './App.css';
import { useWindowSize } from "@react-hook/window-size/throttled";
import React from "react";
//import { useWindowSize as useWindowSizeD } from "@react-hook/window-size/";
//import useScrollPosition from "@react-hook/window-scroll";
import Playlist from 'react-mp3-player';
import track1 from "./assets/tracks/moody.mp3";


function App() {
    const [width, height] = useWindowSize({ fps: 60 });
    const tracks = [{
        img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg',
        name:'MOODY',
        desc: 'TRACK1',
        src:track1}];
    const playlistOverideStylingOpts = {
        offset : {
            left : null
        },
        breakpoint : {
            maxWidth : width
        }
    };
    //const [widthD, heightD] = useWindowSizeD();
    //const scrollY = useScrollPosition(60 /*frames per second*/);
    return (
        <div>
        <iframe src="https://editor.p5js.org/richterzo/embed/tmX8UeKTq" width={width} height={height}/>
            <Playlist tracks={tracks} opts={playlistOverideStylingOpts}/>
        </div>
    );
}

export default App;
