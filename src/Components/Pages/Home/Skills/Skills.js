import React, { Component } from 'react';
import SkillItem from './SkillItem'

import './css/Skills.css';


class Skills extends Component {
  render() {
    return (
      <div className="Skills" id="skills">
      <div className="skills">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-content skills-grid">
        <div className="list-grid">
          
            <SkillItem skill='HTML'
                       level="Advanced"
            />
            <SkillItem skill='CSS'
                       level='Intermediate - Advanced'
            />
            <SkillItem skill='JavaScript'
                       level='Begginer - Intermediate'
            />
            <SkillItem skill='ReactJs'
                       level='Begginer'
            />
            <SkillItem skill='Materialize.css'
                       level='Itermediate'
            />
            <SkillItem skill='Bootstrap'
                       level='Intermediate-Advanced'
            />
            <SkillItem skill='NPM'
                       level='Begginer'
            />
            <SkillItem skill='Git'
                       level="Don't even know what's that"
            />
        
        </div>    
        </div>
        <a className="resume" href="#">Download my resume!</a>
      </div>  
      </div>
    );
  }   
}

export default Skills;
    