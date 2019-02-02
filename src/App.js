import React, { Component } from 'react';
import NavigationBar from './Components/NavigationBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavigationBar></NavigationBar>
        <h1>Hello World!</h1>
      </main>
    );
  }
}

export default App;
