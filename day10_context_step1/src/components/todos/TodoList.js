import React from 'react';
import { useTodos } from '../../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useTodos() 

    return (
        <div style={{ marginTop:20 }}>            
            <ul>
                {
                    todos.map( todo => <TodoItem key={todo.id} todo={todo} />)
                }
            </ul>            
        </div>
    );
};

export default TodoList;