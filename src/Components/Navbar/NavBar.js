import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './css/NavBar.css';
import './css/Animation.css'; 

import $ from 'jquery'; 

class NavBar extends Component {

  componentWillMount(){
    this.setState({
      showOptions:false,
      plusClass:true
    })
  }

  handleClick(){
    if(this.state.showOptions){
      this.setState({
        showOptions:false
      })
    } else {
      this.setState({
        showOptions:true
      })
    };
    this.setState({
      plusClass:true
    })
  }

  handleEnter(){
    if(this.state.plusClass){
      this.setState({
        showOptions:true
      })
    }
  }

  handleRemove(){
    this.setState({
      plusClass:false
    })
  }

  hideOptions(){
    this.setState({
      showOptions:false
    })
  }



  render() {
    $(document).ready(function(){$('a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));
    
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top-65
          }, 400);
      }
    
    });})

    return (
     
      <ReactCSSTransitionGroup
        transitionName='getIn'
        transitionAppear={true}
        transitionAppearTimeout={1400}
        transitionEnter={false}
        transitionLeave={false}
      >
      <div className="navbar">
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <div className="nav">
          <ul>
            <li onMouseLeave={() => this.hideOptions()} ><Link onMouseEnter={() => this.handleEnter()} onMouseUp={() => this.handleClick()} className={`links links-options`} id="home" to="/"><strong>Home</strong></Link>
              <ul className={`options ${this.state.showOptions ? 'show' : '' }`}>
                <li><a onClick={() => this.hideOptions()} href="#about">About</a></li>
                <li><a onClick={() => this.hideOptions()} href="#skills">Skills</a></li>
                <li><a onClick={() => this.hideOptions()} href="#projects">Projects</a></li>
              </ul>
            </li>

            <li><Link onClick={()=> this.handleRemove()} to="/contact" className="links"><strong>Contact</strong></Link></li>
          </ul>
        </div>
      </div>
      </ReactCSSTransitionGroup>
   
    );
  }   
}

export default NavBar;
    