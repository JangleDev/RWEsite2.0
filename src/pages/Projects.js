import React from 'react'
import {Link} from "react-router-dom"

import BannerImage from '../assets/RWEPhoto1.png'
import Logo from '../assets/RWELogoNoBG.png'
import '../styles/Projects.css'
import MAELogo from '../assets/MAE_Logo_5.png'
import Drone from '../assets/IMG_2692.jpg'
import Drone2 from '../assets/IMG_5238.jpg'
import Drone3 from '../assets/IMG_3956.jpg'
import Drone4 from '../assets/IMG_3877.JPG'
import Drone5 from '../assets/IMG_2734.PNG'

/*
<h3>Aerial search and rescue operations have become indispensable in these times of crisis, yet traditional
methods involving manned aircraft are time-consuming and expensive, demanding considerable resources
and specialized personnel. This reality presents an acute need for a more streamlined and economical
solution to enhance the efficacy of these critical missions.The Solar Drone offers a viable alternative to traditional aerial search and rescue methods. By leveraging
inexpensive, autonomous drones equipped with solar charging capabilities, this innovative solution can
search a larger area more efficiently, while maximizing flight time. 
            </h3> */

function Projects() {
  return (
    <div className="projects">
        
        <div className="projectsHeaderContainer">
              <h2>The Solar Drone</h2>
        </div>

        <div className="projectsContentContainer">
            <div className="pccLeft">
                <img src={Drone}/>
            </div>
            <div className="pccRight">
                <h3>
                    Aerial search and rescue operations have become indispensable in these times of crisis, 
                    yet traditional methods involving manned aircraft are time-consuming and expensive, demanding 
                    considerable resources and specialized personnel. This reality presents an acute need for a 
                    more streamlined and economical solution to enhance the efficacy of these critical missions. 
                    The Solar Drone offers a viable alternative to traditional aerial search and rescue methods. 
                    By leveraging inexpensive, autonomous drones equipped with solar charging capabilities, this 
                    innovative solution can search a larger area more efficiently, while maximizing flight time. 
                </h3>
            </div>
            
            
        </div>
        
        <div className="projectsFooterContainer">
              <img src={Drone4}/>
              <img src={Drone5}/>
        </div>

    </div>
        
  )
}

export default Projects