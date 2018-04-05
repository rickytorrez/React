import React from 'react';
import './ToDoItem.css';

export default class ToDoItem extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    removeToDo(id){
        this.props.removeToDo(id)
    }

    render(){
        return (
            <div className="toDoWrapper">
                <button className="removeToDo" onClick={(e)=> this.removeToDo(this.props.id)}>Remove</button> {this.props.todo.text}
            </div>
        )
    }
}