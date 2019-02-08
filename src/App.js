import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import HomePage from './pages/HomePage/HomePage'
import './App.css'

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
