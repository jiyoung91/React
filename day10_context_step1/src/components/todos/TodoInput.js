import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const TodoInput = () => {
    const {changeInput ,onAdd, text } = useTodos() 

    const onSubmit = (e)  => {
        e.preventDefault() 
        if( !text ) return 
        onAdd( text )
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={ changeInput }/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;