import React from 'react';

function TodoItem(props) {
    return (
        <li> {props.complete ? '[X]' : '[ ]'} {props.title}</li>
    )
}

export default TodoItem;