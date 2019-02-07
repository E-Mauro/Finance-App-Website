import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import './App.css';
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavigationBar />
        <HomePage />
        {/* Elias*/}
      </main>
    );
  }
}

export default App;
