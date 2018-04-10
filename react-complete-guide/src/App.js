import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 23 },
      { name: 'Steph', age: 21 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName)=>{
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name="Maximillian";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 23 },
        { name: 'Steph', age: 43 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={ () => this.switchNameHandler('Tufina') }>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Pitu') } > I love Salsa   
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // click property on line 39 makes it available for use in Person.js
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App');
  }
}

export default App;
