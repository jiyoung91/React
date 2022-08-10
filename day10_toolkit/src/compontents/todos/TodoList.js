import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector( state => state.todos.todos )

    return (
        <ul>
           {
            todos.map( todo => <TodoItem key={todo.id} todo={todo} />)
           } 
        </ul>
    );
};

export default TodoList;