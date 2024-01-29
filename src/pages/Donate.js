import React from 'react'
import RedirectButton from '../components/LinkButton'
import '../styles/Donate.css'


function Donate() {

    
    return (

        <div class="DonatePage">
            
            <div class="HeaderContainer">
                <h1>Donate</h1>
            </div>     

            <div class="DonateContainer">
                <h2>Donate through our GoFundMe page</h2>
                <div class="buttonContainer">
                    <RedirectButton url="https://gofund.me/3c4556e1" text="Donate"/>
                </div>
                <h2>Donate to the MAE fund</h2>
                <div class="buttonContainer">
                    <button class="button" type="submit">Donate</button>
                </div>
            </div> 
        </div>
          
    )
}

export default Donate