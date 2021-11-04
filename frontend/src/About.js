import React from 'react'
import imag from './images/photo.jpg'
function About(){
    return(
        <div className="main">
        <h1>
            About
        </h1>
        <div className="description ">
I am a computer Engineering student who is  always eager to learn new things to add to my toolbox in order to solve new and interesting problems. I like applied mathematics. My favourite things to study are application of mathematics for solving real world problem. The projects that I am most fond of doing are scripts to automate my works like the anime downloader script. Doing these kinds of projects I always encounter interesting unique problems and its really fun trying come up with a solution yourself. 
        </div>
        <img src={imag} className="photos" id="profile"/>
        
        </div>

    );
}

export default About;
