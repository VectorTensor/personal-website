import React from 'react'
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
<img src={img1} className="photos"/>
<img src={img2} className="photos"/>
<img src={img3} className="photos"/>
<img src={img4} className="photos"/>
<img src={img5} className="photos"/>
<img src={img6} className="photos"/>
<img src={img7} className="photos"/>
<img src={img8} className="photos"/>
<img src={img9} className="photos"/>
<img src={img10} className="photos"/>
<img src={img11} className="photos"/>
<img src={img12} className="photos"/>
        </div>

        
    )
}

export default Art;
