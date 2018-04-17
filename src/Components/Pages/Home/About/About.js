import React, { Component } from 'react';

import './css/About.css';

import InfoBox from './InfoBox';
import AboutMe from './AboutMe';

class About extends Component {

  //use ref attribute for scrollreveal!!!

  render() {
    return (
      <div className="about-wraper">
      <div className="About" id="about"> 
        <h1 className="about-title">Profile</h1>
        <div className="about-content about-grid">
          <div className="box boxone">
            <AboutMe />
          </div>
          <div className="box boxtwo">
            <InfoBox />
          </div>
          <div className="box boxthree">
            <InfoBox />
          </div>
          <div className="box boxfour">
            <InfoBox />
          </div>
        </div>
      </div>
      </div>
    );
  }   
}

export default About;
    