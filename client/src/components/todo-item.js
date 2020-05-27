import React from 'react';

function todoItem(props) {
    return (
        <li> {props.complete ? '[X]' : '[ ]'} {props.title}</li>
    )
}

export default todoItem;