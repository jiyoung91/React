import React from 'react';
import { useTodo } from '../../contexts/TodoContext';

const TodoInput = () => {
    const { changeInput, onAdd, text } = useTodo()
    const onSubmit =(e)=>{
        e.preventDefault()
        if(!text) return 
        onAdd(text)
    }
    return (
        <form onSubmit={onSubmit}>
           <input type='text' value={text} onChange={changeInput}/>
           <button type='submit'>추가</button> 
        </form>
    );
};

export default TodoInput;