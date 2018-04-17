import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';

import $ from 'jquery';

class Container extends Component {


  componentDidUpdate(prevProps) {
     window.scrollTo(0, 0);
  }

  render() {

    $('html, body').animate({
      scrollTop:0
  }, 400);
   
  return (
      <div className="Container">
        <Switch >
          <Route className="route" exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    );
  }
}

export default Container;
