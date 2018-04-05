import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import ToDoInput from './components/ToDoInput';

class App extends Component {
  constructor (props){
    super(props);

      this.state = {
        toDos: [
          {id: 0, text: "Make dinner tonight"},
          {id: 1, text: "Fold the laundry"},
          {id: 2, text: "Learn to make a react app"}
        ],
        nextId: 3
      }

    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);  
  } 

  addToDo(toDoText) {
    console.log("ToDo added: ", toDoText);
  }

  removeToDo(id){
    console.log("removing", id);
  }

  
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <ToDoInput toDoTest="" addToDo = {this.addToDo} />
          <ul>
            {
              this.state.toDos.map ((todo) => {
                return <ToDoItem todo= {todo} key={ todo.id } id={todo.id} removeToDo= { this.removeToDo } />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
