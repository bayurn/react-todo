import React from 'react';
import TodoItem from './todoItem';
import '../css/todoBox.css';

function TodoList(props) {
    const listItems = props.data.map((item) =>
        <TodoItem key={item.id} item={item} complete={props.complete} />
    );
    return <h4>{listItems}</h4>
}

export default TodoList;  