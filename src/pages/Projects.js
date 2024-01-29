import React from 'react'
import {Link} from "react-router-dom"

import BannerImage from '../assets/RWEPhoto1.png'
import Logo from '../assets/RWELogoNoBG.png'
import '../styles/Projects.css'
import MAELogo from '../assets/MAE_Logo_5.png'
import Drone from '../assets/DroneShot.png'



function Projects() {
  return (
    <div className="projects">
        
        <div className="projectsHeaderContainer">
            <div classname="left-side">
              <h1>The Solar Drone</h1>
            </div>
        </div>

        <div className="projectsContentContainer">
            <h3>Aerial search and rescue operations have become indispensable in these times of crisis, yet traditional
methods involving manned aircraft are time-consuming and expensive, demanding considerable resources
and specialized personnel. This reality presents an acute need for a more streamlined and economical
solution to enhance the efficacy of these critical missions.The Solar Drone offers a viable alternative to traditional aerial search and rescue methods. By leveraging
inexpensive, autonomous drones equipped with solar charging capabilities, this innovative solution can
search a larger area more efficiently, while maximizing flight time. 
            </h3>
            <img src={Drone}/>
        </div>

        
        <div className="projectsFooterContainer">
            
            <div classname="left-side">
              <img src={Logo}/>
              
            </div>
          
        </div>

    </div>
        
  )
}

export default Projects