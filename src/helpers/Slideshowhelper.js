import ImageSlider from "./Slideshow";

import Slider1 from "../assets/Slider/slider1.jpeg"
import Slider2 from "../assets/Slider/slider2.jpeg"
import Slider3 from "../assets/Slider/slider3.jpeg"
import Slider4 from "../assets/Slider/slider4.jpeg"
import Slider5 from "../assets/Slider/slider5.jpeg"

export default function Slideshowhelper() {
    
    const slides = [
        {Slider1},
        {Slider2},
        {Slider3},
        {Slider4},
        {Slider5},
    ];

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    return( 
        <div>
            <div style = {containerStyles}>
                <ImageSlider slides={slides}/>
            </div>
        </div>
    );
}