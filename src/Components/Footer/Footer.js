import React, { Component } from 'react';
import './css/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="Footer">
      <ul>
       <li><a href="#"> <i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
       <li><a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i> </a></li>
       <li><a href="#"> <i className="fa fa-github" aria-hidden="true"></i> </a></li>
       <li><a href="#"> <i className="fa fa-twitter" aria-hidden="true"></i> </a></li>
      </ul>
      <div className="footer">
        <p>&copy;Badila Robert 2018</p>
      </div>
      </div>
    );
  }   
}

export default Footer;
    