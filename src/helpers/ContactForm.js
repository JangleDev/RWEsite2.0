import React, { useState } from 'react';
import '../styles/ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Name</h2>
      <div class="nameInput">
        <input class="custom-input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        />
      </div>

      <h2>Email</h2>

      <div class="emailInput">
        <input class="custom-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>
 
      <h2>Message</h2>
      
      <div class="messageInput">
        <textarea class="custom-input"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      
      <div class="buttonContainer">
        <button class="button" type="submit">Submit</button>
      </div>
      
    </form>
  );
};

export default ContactForm;
