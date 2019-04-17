import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import NameHeader from './components/NameHeader/NameHeader'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import MyProjects from './components/MyProjects/MyProjects'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <NameHeader />
        <AboutMe />
        <Skills />
        <MyProjects />
        <Footer />
      </div>
    );
  }
}

export default App;
