import React from 'react';
import '../css/todoBox.css';

function TodoItem(props) {
    return (
        <div className="Item">
            {props.item.complete ? '[X]' : '[ ]'} {props.item.title}
            <button type="button" className="button1" onClick={() => (props.complete(props.item.id))}>complete</button>
        </div>
    )
}

export default TodoItem;