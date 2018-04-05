import React from 'react';
import './ToDoInput.css';


export default class ToDoInput extends React.Component {
    constructor (props) {
        super(props)

        this.state = { value: 'test' };

        this.handleChange = this.handleChange.bind(this);
        this.addToDo = this.addTodo.bind(this);
    }

    handleChange(e){
        this.setState({ value: e.target.value })
    }

    addTodo(todo){
        if (todo.length > 0) {
            this.props.addToDo(todo);
            this.setState({ value: '' });
        }
    }

    render (){
        return (
            <div>
                <input type="text" value={ this.state.value } onChange={ this.handleChange } />
                <button className="btn btn-primary" onClick={() => this.addToDo(this.state.value) }> Submit </button>
            </div>
        );
    }
}