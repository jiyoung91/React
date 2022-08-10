import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const Todos = () => {
    const [data, setData] = useState([
        {id:1, text:'test', isChk:false},
        {id:2, text:'testtest', isChk:false},
    ])
    const no = useRef(data.length+1)
    const onAdd=(text)=>{
        setData([
            ...data,
            {
                id:no.current++,
                text,
                isChk:false
            }
        ])
    }
    const onDel=(id)=>{
        setData( data.filter(item=> item.id !== id )) //아닌것만 남기기(해당id는 빼고)
    }
    const onMod=(id)=>{        
        setData(data.map(item=> item.id === id ? { ...item, isChk : !item.isChk }: item))
    }
    return (
        <div className='Todos'>
            <h1>할일 만들기</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList data={data} onDel={onDel} onMod={onMod}/>

        </div>
    );
};

export default Todos;
