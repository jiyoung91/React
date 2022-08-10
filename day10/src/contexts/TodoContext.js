import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
const  TodoContext = createContext()
export const useTodo = ()=>useContext(TodoContext)

const TodoProvider= ({children}) => {
    const no = useRef(6)
    const [todo, setTodo] = useState([
        {id:1,text:'김미미', isChk:false},
        {id:2,text:'김미리', isChk:false},
        {id:3,text:'김미아', isChk:false},
        {id:4,text:'김미디', isChk:true},
        {id:5,text:'김미네', isChk:false},
    ])
    const [text,setText] = useState('')
    const onDel =(id)=>{
        setTodo( todo.filter(todo => todo.id !== id ))
    }
    const onToggle =(id)=>{
        setTodo(todo.map( todo => todo.id === id ? {
            ...todo, isChk: !todo.isChk
        } : todo))
    }
    const onAdd =(text)=>{
        setTodo([
            ...todo,
            {
                id:no.current++,
                text:text,
                isChk:false
            }
        ])
        setText('')
    }
    const changeInput =(e)=>{
        const {value} = e.target
        setText(value)
    }
    return (
        <TodoContext.Provider value ={{ todo, onDel, onToggle,changeInput, onAdd, text}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;


