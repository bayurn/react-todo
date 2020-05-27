import React, { Component } from 'react'
import todoList from './todo-list';
import todoForm from './todo-form';

class todoBox extends Component {
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
                <todoList data={this.state.data} />
                <todoForm />
            </div>
        );
    }
}

export default todoBox;