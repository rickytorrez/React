import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Andrew'
  }

  usernameChangeHandler = (event)=>{
    this.setState({username: event.target.value })
  }


  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.usernameChangeHandler} 
          currentName={this.state.username}/>
          
        <UserOutput username={this.state.username}/>  
        <UserOutput username='Palolo'/>
      </div>
    );
  }
}

export default App;


/*
Create TWO new components: UserInput and UserOutput !!!!!!!! DONE
UserInput should hold an input element, UserOutput two paragraphs !!!!!!!! DONE
Output multiple UserOutput components in the App component (any paragraph texts of your choice) !!!!!!!! DONE
Pass a username (of your choice) to UserOutput via props and display it there !!!!!!!! DONE
Add state to the App component (=> the username) and pass the username to the UserOutput component !!!!!!!! DONE
Add a method to manipulate the state (=> an event-handler method) !!!!!!!! DONE
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets



*/


