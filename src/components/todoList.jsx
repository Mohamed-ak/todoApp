import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Todo from './todo';

const TodoList = ({todos, onToggle}) => {
    console.log(todos);
    return (
        <ul className="list-group">
            <Accordion>
                {todos.map(todo=>{
                    return <Todo key={todo.id} {...todo} onToggle={onToggle} />
                })}
            </Accordion>
        </ul>
    )
}

export default TodoList;
