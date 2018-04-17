import React, { Component } from 'react';
import './css/Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="contact">
      <h1>Send me a message in the form below!</h1>
        <form id="form" class="topBefore">
      
            <input id="name" type="text" placeholder="NAME"/>
            <input id="email" type="text" placeholder="E-MAIL"/>
            <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
            <input id="submit" type="submit" value="SEND MESSAGE!"/>
      
        </form>  
        <h2>...or find me on social media...</h2>
      </div>
    );
  }   
}

export default Contact;
    