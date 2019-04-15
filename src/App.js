import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import NameHeader from './components/NameHeader/NameHeader'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <NameHeader />
        <AboutMe />
        <Skills />
      </div>
    );
  }
}

export default App;
