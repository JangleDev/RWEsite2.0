import React from 'react'
import {Link} from "react-router-dom"
import Slideshow from '../components/Slideshow'
import BannerImage from '../assets/RWEPhoto1.png'
import Logo from '../assets/RWELogoNoBG.png'
import '../styles/Home.css'
import MAELogo from '../assets/MAE_Logo_5.png'



function Home() {
  return (
    <div className="home">
        <div className="footerContainer">
          
        </div>

        <div className="header">
          <div className="headerContainer">
              <img src={MAELogo}/>
          </div>
          <div className="contentContainer">
            <h1>Funded and supported by the UF Department of Mechanical and Aerospace Engineering, 
              we provide students with hands-on experience in engineering, allowing them to apply 
              their academic knowledge to real-world problems and new technologies. 
            </h1>
          </div>
          <div className="leftheaderContainer">
              <img src={Logo}/>
          </div>
          
        </div>
        

        

        
  

    </div>
        
  )
}

export default Home

