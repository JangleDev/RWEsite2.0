import React from 'react'
import {InstagramOutlined} from '@ant-design/icons'
import {LinkedinOutlined} from '@ant-design/icons'
import MAELogo from '../assets/MAE_Logo_2.png'
import '../styles/footer.css'

function Footer() {
  const instagramLink = 'https://www.instagram.com/realworldengineering/'; 
  const linkedinLink = 'https://www.linkedin.com/company/rwe-real-world-engineering/';

  return (

    <div className="footer">
        <div className="left-side">
            <div className="socialMedia"> 
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined/>
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined/>
                </a>  
            </div>
        </div>
    </div>

  )
}

export default Footer
