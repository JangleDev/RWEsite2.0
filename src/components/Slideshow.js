import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Slideshow.css'

import Slider1 from '../assets/IMG_8904.png'
import Slider2 from '../assets/IMG_5241.png'
import Slider3 from '../assets/P1010084.JPG'
import Slider4 from '../assets/Slider/slider4.jpeg'
import Slider5 from '../assets/Slider/slider5.jpeg'



function Slideshow() {
  return (
    <Carousel showIndicators={false} centerSlidePercentage={100}showThumbs={false} showStatus={false} autoPlay infiniteLoop centerMode className='main-slide'>
                <div>
                    <img src={Slider3} />
                </div>
                <div>
                    <img src={Slider1} />
                   
                </div>
                <div>
                    <img src={Slider2} />
                </div>
            </Carousel>
  )
}

export default Slideshow