import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const TodoItem = ({ todo }) => {
    const { onDel , onToggle } = useTodos() 
    const { id, text, isChk } = todo 

    return (
        <li style={{color: isChk ? 'red':'#000'}}>
           <input type="checkbox" checked={isChk} onChange={ () => onToggle(id)} /> 
           { text }
           <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default TodoItem;