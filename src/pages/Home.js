import React from 'react'
import {Link} from "react-router-dom"
import Slideshow from '../components/Slideshow'
import BannerImage from '../assets/RWEPhoto1.png'
import Logo from '../assets/DENNOBGLOGO.png'
import '../styles/Home.css'
import MAELogo from '../assets/MAE_Logo_5.png'
import LinktreeLogo from '../assets/Linktree_logo.png'
import Implement2 from '../assets/IMG_7355.jpg'
import teamImage from '../assets/IMG_1542.JPG'
import teamCover from '../assets/P1010082.JPG'
import slider1 from '../assets/IMG_5241.png'
import Slider2 from '../assets/IMG_5241.png'


function Home() {
  return (
    <div className="home">

        <div className="footerContainer">
            <img src={Logo}/>
            <div className="slider">
              <Slideshow/>
            </div>
             
        </div>

        
        <div className="header">

          <div className="headerContainer">
            <h1>THIS IS RWE.</h1>
            <h3>REAL WORLD ENGINEERING IS AN AGILE, STUDENT-RUN DESIGN FIRM SUPPORTED BY THE UNIVERSITY OF FLORIDA'S 
                DEPARTMENT OF MECHANICAL AND AEROSPACE ENGINEERING AND TECHNOLOGY, FROM DESIGNING A SOLAR POWERED DRONE 
                FOR DISASTER SURVEY MISSIONS TO CRAFTING SOFTWARE SOLUTIONS ADDRESSING CAMPUS-WIDE NEEDS. THIS BLEND OF 
                PROJECTS HIGHLIGHTS OUR DEDICATION TO LEVERAGING DIVERSE ENGINEERING DISCIPLINES TO TACKLE REAL-WORLD CHALLENGES.
            </h3>
          </div>

          <div className="contentContainer">
              <img src={Slider2}/>
          </div>
          <div className="headerContainer">
            <h1>MISSION</h1>
            <h3>REAL WORLD ENGINEERING IS AN AGILE, STUDENT-RUN DESIGN FIRM SUPPORTED BY THE UNIVERSITY OF FLORIDA'S 
                DEPARTMENT OF MECHANICAL AND AEROSPACE ENGINEERING AND TECHNOLOGY, FROM DESIGNING A SOLAR POWERED DRONE 
                FOR DISASTER SURVEY MISSIONS TO CRAFTING SOFTWARE SOLUTIONS ADDRESING CAMPUS-WIDE NEEDS. THIS BLEND OF 
                PROJECTS HIGHLIGHTS OUR DEDICATION TO LEVERAGING DIVERSE ENGINEERING DISIPLINES TO TACKLE REAL-WORLD CHALLENGES.
            </h3>
          </div>
          <div className="denContainer">
            <h1>DESIGN. ENRICH. NETWORK.</h1>
          </div>
          <div className="teamsContainer">
            <h1>TEAMS</h1>
            <h3>Solar Drone Team</h3>
            <h3>REAL WORLD ENGINEERING IS AN AGILE, STUDENT-RUN DESIGN FIRM SUPPORTED BY THE UNIVERSITY OF FLORIDA'S 
                DEPARTMENT OF MECHANICAL AND AEROSPACE ENGINEERING AND TECHNOLOGY, FROM DESIGNING A SOLAR POWERED DRONE 
                FOR DISASTER SURVEY MISSIONS TO CRAFTING SOFTWARE SOLUTIONS ADDRESING CAMPUS-WIDE NEEDS. THIS BLEND OF 
                PROJECTS HIGHLIGHTS OUR DEDICATION TO LEVERAGING DIVERSE ENGINEERING DISIPLINES TO TACKLE REAL-WORLD CHALLENGES.
            </h3>
            <h3>Software Team</h3>
            <h3>REAL WORLD ENGINEERING IS AN AGILE, STUDENT-RUN DESIGN FIRM SUPPORTED BY THE UNIVERSITY OF FLORIDA'S 
                DEPARTMENT OF MECHANICAL AND AEROSPACE ENGINEERING AND TECHNOLOGY, FROM DESIGNING A SOLAR POWERED DRONE 
                FOR DISASTER SURVEY MISSIONS TO CRAFTING SOFTWARE SOLUTIONS ADDRESING CAMPUS-WIDE NEEDS. THIS BLEND OF 
                PROJECTS HIGHLIGHTS OUR DEDICATION TO LEVERAGING DIVERSE ENGINEERING DISIPLINES TO TACKLE REAL-WORLD CHALLENGES.
            </h3>
          </div>

          

        </div>

       
       
    </div>
        
  )
}

export default Home

/** 
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
        **/