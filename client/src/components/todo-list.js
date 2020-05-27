import React from 'react';
import todoItem from './todo-item';

function todoList(props) {
    const listItems = props.data.map((item) =>
        <todoItem title={item.title} />
    )
    return <ul>{listItems}</ul> 
}

export default todoList;  