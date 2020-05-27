import React, { Component } from 'react'
import TodoList from './todoList';
import TodoForm from './todoForm';

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Daftar Kerjaan</h1>
                <TodoList data={this.state.data} />
                <TodoForm />
            </div>
        );
    }
}

export default TodoBox;