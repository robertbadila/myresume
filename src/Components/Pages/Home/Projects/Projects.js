import React, { Component } from 'react';
import './css/Projects.css';
import $ from 'jquery';

class Projects extends Component {
  render() {
    $(document).ready(function() {
      var movementStrength = 25;
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();
      $(".project").mousemove(function(e){
                var pageX = e.pageX - ($(window).width() / 2);
                var pageY = e.pageY - ($(window).height() / 2);
                var newvalueX = width * pageX * -1 - 25;
                var newvalueY = height * pageY * -1 - 50;
                $('project').css("background-position", newvalueX+"px     "+newvalueY+"px");
      });
      });
    return (
      <div className="projects-wraper">
      <div className="Projects" id="projects">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          <div className="project box1">
            <h2 className="project-title">Project1</h2>
            <a href="#" className="read-btn">read more</a>
          </div>
            <div className="project box2">
            <h2 className="project-title">Project2</h2>
          <a href="#" className="read-btn">read more</a>
          </div>
          <div className="project box3">
            <h2 className="project-title">Project3</h2>
            <a href="#" className="read-btn">read more</a>
          </div>
          <div className="project box4">
            <h2 className="project-title">Project4</h2>
            <a href="#" className="read-btn">read more</a>
          </div>
          <div className="project box5">
            <h2 className="project-title">Project5</h2>
            <a href="#" className="read-btn">read more</a>
          </div>
          <div className="project box6">
            <h2 className="project-title">Project6</h2>
            <a href="#" className="read-btn">read more</a>
          </div>
          <div className="project box7">
            <h2 className="project-title">Project7</h2>
            <a href="#" className="read-btn">read more</a>
          </div>
        </div>
      </div>
      </div>
    );
  }   
}

export default Projects;
    