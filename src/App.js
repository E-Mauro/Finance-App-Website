import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavigationBar></NavigationBar>
        <h1>Hello World!</h1>
        Juan Arteaga
      </main>
    );
  }
}

export default App;
