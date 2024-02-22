import React from 'react'
import RedirectButton from '../components/LinkButton'
import '../styles/Donate.css'
import Logo from '../assets/RWELogoNoBG.png'
import LongLogo from '../assets/IMG_6705-1.PNG'
import GFMLogo from '../assets/gofundmelogo.png'
import MAELogo from '../assets/MAE_Logo_5.png'


function Donate() {

    
    return (

        <div class="DonatePage">
            
            <div class="HeaderContainer">
                <h1>Donate</h1>
            </div>     
            

            <div class = "GFMContainer">    
                <h1>Donate through our GoFundMe</h1>
                
                <div class="buttonContainer">
                    <RedirectButton url="https://gofund.me/3c4556e1" text="Donate"/>
                    <img src={GFMLogo}/>
                </div>

            </div>

            <div class = "MAEFundContainer">

                <h1>Donate to the MAE Excellence fund</h1>
                
                <div class="buttonContainer">
                    <RedirectButton url="https://www.uff.ufl.edu/give-now/?fund_id=024649&appeal=GZAKRA1" text="Donate"/>
                    <img src={MAELogo}/>
                </div>

            </div>
                
        </div>
          
    )
}

export default Donate