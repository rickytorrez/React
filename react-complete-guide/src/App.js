import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Max', age: 28 },
      { id:'2', name: 'Manu', age: 23 },
      { id:'3', name: 'Steph', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName)=>{
  //   // console.log('Was clicked');
  //   // DON'T DO THIS: this.state.persons[0].name="Maximillian";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 23 },
  //       { name: 'Steph', age: 43 }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];                                // spread operator 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id )=>{
    const personIndex = this.state.persons.findIndex(p => {                 // find person
      return p.id === id;
    });       

    const person = {                                                        // duplicates state
      ...this.state.persons[personIndex]                                    // spread operator
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);   // alternative

    person.name = event.target.value;                                       // updates person name (copy), not original
    const persons = [...this.state.persons];                                // updates the array at the position that was fetched
    persons[personIndex] = person;                                          // updates at one position inside the array

    this.setState( { persons: persons } )                                   // updates the state
  }

  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button 
          style={style}
          onClick={ this.togglePersonsHandler }>
          Toggle Persons
        </button>

        {persons}

      </div>
    );
    // click property on line 39 makes it available for use in Person.js
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App');
  }
}

export default App;
