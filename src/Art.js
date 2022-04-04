import React from 'react'
import { Link  } from 'react-router-dom';
import img1 from './images/ayano.png'

import img2 from './images/ayumi.png'
import img3 from './images/f.png'
import img4 from './images/hattori.png'
import img5 from './images/hiroomi.png'
import img6 from './images/katarina.png'
import img7 from './images/sas.png'

import img8 from './images/mori.png'
import img9 from './images/yuki.png'
import img10 from './images/tsuji.png'
import img11 from './images/taichi.png'
import img12 from './images/profilepic.jpg'
import img13 from './images/mentor.png'

import img14 from './images/rival.png'




function Art()
{
    return (
        <div className="main">

        <h1>

            Art
        </h1>
        <div className="description">
        Here are some of my art works.
        </div>
        <a href={img1}>
<img src={img1} className="photos"/>
        </a>
        <a href={img2}>
<img src={img2} className="photos"/>
        </a>
        <a href={img3}>
<img src={img3} className="photos"/>
        </a>
        <a href={img4}>
<img src={img4} className="photos"/>
        </a>
        <a href={img5}>
<img src={img5} className="photos"/>
        </a>
        <a href={img6}>
<img src={img6} className="photos"/>
        </a>
        <a href={img7}>
<img src={img7} className="photos"/>
        </a>
        <a href={img8}>
<img src={img8} className="photos"/>
        </a>
        <a href={img9}>
<img src={img9} className="photos"/>
        </a>
        <a href={img10}>
<img src={img10} className="photos"/>
        </a>
        <a href={img11}>
<img src={img11} className="photos"/>
        </a>
        <a href={img12}>
<img src={img12} className="photos"/>
        </a>
        <a href={img13}>
<img src={img13} className="photos"/>
        </a>
        <a href={img14}>
<img src={img14} className="photos"/>
        </a>
        </div>


    )
}

export default Art;
