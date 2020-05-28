import React, { Component } from 'react'
import TodoList from './todoList';
import TodoForm from './todoForm';

export default class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }

    addTodo(title) {
        this.setState((state) => ({
            data: [...state.data, { id: Date.now().toString(), title, complete: false }]
        }))
    }

    completeTodo(id) {
        this.setState((state) => ({
            data: state.data.map(item => {
                if (item.id === id) {
                    item.complete = true;
                }
            })
        }))
    }

    render() {
        return (
            <div>
                <h1>Daftar Kerjaan</h1>
                <TodoList data={this.state.data} complete={this.completeTodo} />
                <TodoForm add={this.addTodo} />
            </div>
        );
    }
}
