import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import './App.css'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavigationBar />
        <HomePage />
        <Footer/>
      </main>
    );
  }
}

export default App;
