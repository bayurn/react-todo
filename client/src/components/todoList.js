import React from 'react';
import TodoItem from './todoItem';

function TodoList(props) {
    const listItems = props.data.map((item) =>
        <todoItem title={item.title} />
    )
    return <ul>{listItems}</ul> 
}

export default TodoList;  