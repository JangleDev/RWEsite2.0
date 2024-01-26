import React, {useState} from 'react'
import Cube from '../assets/RWELogoNoBG.png'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import {BarsOutlined} from '@ant-design/icons'

function Navbar() {
    const[openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
  return (
    <div className ="navbar">
        
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            
            <h1>
                <Link to="/">RWE</Link>
            </h1>

            <div className="hiddenLinks">

                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/donate">Donate</Link>
                
            </div>

        </div>

        <div className="rightSide">
            
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/donate">Donate</Link>
            
            <button onClick ={toggleNavbar}>
                <BarsOutlined />
            </button>

        </div>
      
    </div>
    
  )
}

export default Navbar
