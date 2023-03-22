import React from 'react';
import './TodoDisplay.css'

const TodoDisplay = (props) => {
    console.log(props.todo);
    const {completed, id, title, userId} = props.todo;

    return (
        <div className='todo-display'>
          
            <h2>{title}</h2>
            <h2>{id}</h2>
            <h2>{userId}</h2>
            <h2>{completed}</h2>
            
        </div>
    );
};

export default TodoDisplay;