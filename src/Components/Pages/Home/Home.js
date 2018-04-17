import React, { Component } from 'react';

import About from './About/About'
import Projects from './Projects/Projects';
import Skills from './Skills/Skills'
import Header from '../../Header/Header'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Home;
