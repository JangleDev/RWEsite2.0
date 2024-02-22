import React from 'react'
import ContactForm from '../helpers/ContactForm'
import '../styles/Contact.css'



function Contact() {
    return (
        <div class="ContactPage">
            <div class="ContactContainer">
                <h1>Contact RWE</h1>
            </div>     
            <iframe 
            style={{ width:'100vw', height:'80vh', border: 'none'}}
            src="https://docs.google.com/forms/d/e/1FAIpQLSfpEVt5HDjDm1LxHZTSd4Je9rUfouMqUMywMtPe29yLlX3BOg/viewform?embedded=true" 
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
            </iframe>
        </div>
    )
  }
  export default Contact