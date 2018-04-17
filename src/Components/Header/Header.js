import React, { Component } from 'react';
import './css/Header.css';
import './css/Animation.css';

class Header extends Component {
  
  render() {
    return (
      <div className="Header">
      <div className="header-content">
     
        <div className="header-title">
          <h1 className="title">Lorem, ipsum dolor</h1>
        </div>
        <div className="header-description">
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur!</p>
        </div>

      </div>

        <div className="header-quote">
          <p className="quote">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, velit!"</p>
          <p className="qauthor">- Badila Robert -</p>
        </div>
      </div>
    );
  }   
}

export default Header;
    