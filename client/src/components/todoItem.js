import React from 'react';

function TodoItem(props) {
    return <li> {props.item.complete ? '[X]' : '[ ]'} {props.item.title} 
        <button type="button" onClick={() => (props.complete(props.item.id))}>complete</button>
    </li>
}

export default TodoItem;