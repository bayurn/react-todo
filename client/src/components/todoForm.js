import React, { Component } from 'react';
import '../css/todoBox.css';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        this.props.add(this.state.title);
        this.setState({ title: '' });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Todo:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" className="Submit" value="Submit" />
            </form>
        );
    }
}
