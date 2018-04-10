import React, { Component } from 'react';
import './App.css';
import MenuInput from './Components/MenuInput/MenuInput';
import MenuOutput from './Components/MenuOutput/MenuOutput';

class App extends Component {
  state = {
    name: 'Chris'
  }

  nameChangeHandler = (event)=>{
    this.setState({name: event.target.value})
  }


  

  render() {
    return (
      <div className="App">
        <h1>Corridor Cafe</h1>
        <MenuInput 
          change={this.nameChangeHandler}
          currentName={this.state.name}/>

        <MenuOutput name="Wil"/>
        <MenuOutput name={this.state.name}/>
        <MenuOutput name="John"/>
      </div>
    );
  }
}

export default App;
