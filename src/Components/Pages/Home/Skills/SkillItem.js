import React, { Component } from 'react';
import './css/skillItem.css';

class SkillItem extends Component {


  render() {
    return (
      <div className="SkillItem" id="SkillItem">
        <h1>{this.props.skill}</h1>
         <p>{this.props.level}</p>
      </div>
    );
  }   
}

export default SkillItem;
    