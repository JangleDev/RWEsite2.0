import React from 'react'
import {InstagramOutlined} from '@ant-design/icons'
import {LinkedinOutlined} from '@ant-design/icons'
import LinkTreeLogo from '../assets/Linktree_logo.png'
import Logo from '../assets/IMG_6705-1.PNG'
import MAELogo from '../assets/MAE_Logo_5.png'

import '../styles/footer.css'

function Footer() {
  const instagramLink = 'https://www.instagram.com/realworldengineering/'; 
  const linkedinLink = 'https://www.linkedin.com/company/rwe-real-world-engineering/';
  const linktreeLink = "https://linktr.ee/realworldengineering/";

  return (

    <div className="footer">
        <div className="middle">
            <div className="RWELogo">
              <img src={Logo}/>
            </div>
            <div className="MAELogo">
              <img src={MAELogo}/>
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
                <a href={linktreeLink} target="_blank" rel="noopener noreferrer">
                    <img src={LinkTreeLogo}/>
                </a>
                   
            </div>
        </div>
        <div className="right">
            <p>ufrealworldengineering@gmail.com</p>
        </div>
    </div>

  )
}

export default Footer
