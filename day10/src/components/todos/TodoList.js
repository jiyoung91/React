import React from 'react';
import { useTodo } from '../../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todo } = useTodo() 
    return (
        <div style={{marginTop:20}}>
            <ul>
               {
                todo.map(todo=><TodoItem key={todo.id} todo={todo} /> )
               }
            </ul>
        </div>
    );
};

export default TodoList;