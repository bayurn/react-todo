import React, { Component } from 'react'
import TodoList from './todoList';
import TodoForm from './todoForm';

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.addTodo = this.addTodo.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    addTodo(title) {
        this.setState((state, props) => ({
            data: [...state.data, { title, complete: false }]
        }))
    }

    render() {
        return (
            <div>
                <h1>Daftar Kerjaan</h1>
                <TodoList data={this.state.data} />
                <TodoForm add={this.state.addTodo} />
            </div>
        );
    }
}

export default TodoBox;