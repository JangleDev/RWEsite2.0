import React from 'react'

import '../styles/Slideshow.css'

import Slider1 from '../assets/Slider/slider1.jpeg'
import Slider2 from '../assets/Slider/slider2.jpeg'
import Slider3 from '../assets/Slider/slider3.jpeg'
import Slider4 from '../assets/Slider/slider4.jpeg'
import Slider5 from '../assets/Slider/slider5.jpeg'

function Slideshow() {
  return (
    <div class="slider-frame">
        <div class="img-container">
            <img src={Slider1}/>
        </div>
        <div class="img-container">
            <img src={Slider2}/>
        </div>
        <div class="img-container">
            <img src={Slider3}/>
        </div>
        <div class="img-container">
            <img src={Slider4}/>
        </div>
        <div class="img-container">
            <img src={Slider5}/>
        </div>
    </div>
  )
}

export default Slideshow