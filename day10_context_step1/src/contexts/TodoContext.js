import React, { createContext, useContext, useRef, useState } from 'react';

const TodoContext  = createContext() 
export const useTodos = ()  => useContext( TodoContext )

const TodoProvider = ({ children }) => {
    const no  = useRef(6)
    const [ todos, setTodos ] = useState([
        {id:1, text:'김태리',  isChk :false },
        {id:2, text:'김다미',  isChk :false },
        {id:3, text:'최우식',  isChk :false },
        {id:4, text:'박진주',  isChk :true },
        {id:5, text:'김도현',  isChk :false },
    ])
    const [ text ,setText ] = useState('')
    //삭제
    const onDel  = ( id )  => {
        setTodos( todos.filter( todo  => todo.id !== id ))
    }
    //체크 
    const onToggle  = ( id )  => {
        setTodos( todos.map( todo => todo.id === id ? {...todo, isChk: !todo.isChk} : todo ))
    }
    //추가
    const onAdd = ( text )  => {
        setTodos([
            ...todos,
            {
                id:no.current++,
                text: text , 
                isChk :false 
            }
        ])
        setText('')        
    }
    //글자변경 
    const changeInput  =(e) => {
        const { value } = e.target 
        setText( value )
    }
    return (
        <TodoContext.Provider value={{ todos , onDel , onToggle, changeInput, onAdd, text }}>
            { children }
        </TodoContext.Provider>
    );
};

export default TodoProvider;