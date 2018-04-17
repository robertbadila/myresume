import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Container from './Container';
import NavBar from './Components/Navbar/NavBar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar />
        <Route>
          <Container />
        </Route>
          <Footer />
      </div>
    );
  }
}

export default App;
