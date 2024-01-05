import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/RWEPhoto1.png'
import Logo from '../assets/RWELogoNoBG.png'
import '../styles/Home.css'
import MAELogo from '../assets/MAE_Logo_5.png'

function Home() {
  return (
    <div className="home">
        <div className="headerContainer">
            <div classname="left-side">
              <img src={Logo}/>
              
            </div>
          
        </div>
        <div className="contentContainer">
            <h1>Real World Engineering (RWE) is a unique student engineering organization at the University of Florida that operates like a design firm. Funded and supported by the UF Department of Mechanical and Aerospace Engineering, we provide students with hands-on experience in engineering, allowing them to apply their academic knowledge to real-world problems and new technologies. 
We were founded in Summer 2022, and since then we have grown, learned, and solidified our purpose and goal. We have developed our first project, the Solar Drone Design Team, and have had tremendous success since. 
</h1>
            <img src={MAELogo}/>
        </div>

    </div>
        
  )
}

export default Home

