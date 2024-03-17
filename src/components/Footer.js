import React from 'react'
import {InstagramOutlined} from '@ant-design/icons'
import {LinkedinOutlined} from '@ant-design/icons'
import LinkTreeLogo from '../assets/linktree_logo_icon_247832.png'
import Logo from '../assets/RWELogoNoBG.png'
import MAELogo from '../assets/MAE_Logo_5.png'
import youtubeLogo from '../assets/ytlogo.png'

import '../styles/footer.css'

function Footer() {
  const instagramLink = 'https://www.instagram.com/realworldengineering/'; 
  const linkedinLink = 'https://www.linkedin.com/company/rwe-real-world-engineering/';
  const linktreeLink = "https://linktr.ee/realworldengineering/";
  

  return (

    <div className="footer">
        <div className="middle">
            <h1>Additional Links</h1>
            <h3>Donate</h3>
            <h3>Contact Us</h3>
            <div className="RWELogo">
              
              
            </div>
        </div>
        <div className="left">
            <div className="socialMedia"> 
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined/>
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined/>
                </a>
                <div className='youtube'>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img src = {youtubeLogo}/>
                    </a>
                </div>
                <div className='linktree'>
                    <a href={linktreeLink} target="_blank" rel="noopener noreferrer">
                        <img src={LinkTreeLogo}/>
                    </a>
                </div>
               
                   
            </div>
        </div>
        <div className="right">
            <p><span>&copy;</span>2024 REALWORLDENGINEERING</p>
            <img src={Logo}/>
        </div>
    </div>

  )
}

export default Footer
