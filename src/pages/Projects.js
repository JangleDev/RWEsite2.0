import React from 'react'
import {Link} from "react-router-dom"
import RedirectButton from '../components/LinkButton'
import BannerImage from '../assets/RWEPhoto1.png'
import Logo from '../assets/RWELogoNoBG.png'
import '../styles/Projects.css'
import MAELogo from '../assets/MAE_Logo_5.png'
import Drone from '../assets/IMG_2692.jpg'
import Drone2 from '../assets/IMG_5238.jpg'
import Drone3 from '../assets/IMG_3956.jpg'
import Drone4 from '../assets/IMG_3877.JPG'
import Drone5 from '../assets/IMG_2734.PNG'
import Design1 from '../assets/IMG_2730.PNG'
import Design2 from '../assets/IMG_2731.PNG'
import Design3 from '../assets/IMG_2735.PNG'
import Design4 from '../assets/IMG_2736.PNG'
import Implement2 from '../assets/IMG_7355.jpg'
import Implement3 from '../assets/IMG_3950.jpg'

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
        <div className="projHeader">
              <h1>Projects</h1>
        </div>
       
        
        

        <div className="projectsContentContainer">
            <div className = "pccRight">
                <img src={Implement2}/>
            </div>
            <div className="pccLeft">
                <div className="pccLeftHead">
                    <h1>The Solar Drone (2023-2024)</h1>
                </div>
                <div className="pccLeftBody">
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
        </div>
        
       
        <div className="projectsImplementContainer">
            <a href={"https://drive.google.com/file/d/1IB7p2iwYDHRO5zKXJgnU3CRKj7WcQsWj/view"} target="_blank" rel="noopener noreferrer" >
                <h3>
                    Click here to view the Solar Drone V2 Design Review
                </h3>
            </a>
        </div>
        
        

    </div>
        
  )
}

export default Projects