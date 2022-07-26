import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const dataList =[
    {id:1, name:'김미미'},
    {id:2, name:'김미다'},
    {id:3, name:'김미나'},
]
const Test1 = () => {
    const [data,setData] = useState(dataList)
    
    const onAdd1 =(name)=>{
        setData(data.concat({id:4, name}))
    }
    const onAdd2 =(text)=>{
        setData([
            ...data,
            {
                id:5,
                name:text 
            }
        ])
    }
    const onDel1 =(num)=>{
        setData(data.filter(item=> item.id !== num ))
    }
    const onDel2 =(id)=>{
        setData(data.filter(item=>item.id !== id ))
    }
    const onMod1 =(id)=>{
        setData(data.map(item=>{
            if(item.id === id ){
                return {
                    ...item,
                    name :'유재석'
                }
            }else{
                return item
            }
        }))
    }
    const onMod2 =(id)=>{
        setData(data.map(item=> item.id === id ? {...item,name:'강호동'} : item ))
    }
    return (
        <div>
            <h2>4일차 마지막내용 복습</h2>
            <Test1Sub onAdd1={onAdd1} onAdd2={onAdd2} 
            onDel1={onDel1} onDel2={onDel2}
            onMod1={onMod1} onMod2={onMod2}/>
        </div>
    );
};

export default Test1;