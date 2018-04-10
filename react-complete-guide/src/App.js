import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name='Ricardo' age='28'/>
        <Person name='Eduardo' age='24'>I love to play soccer.</Person>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App');
  }
}

export default App;
