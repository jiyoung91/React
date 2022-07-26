import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const dataList =[
    {id:1,name:'김다미'},
    {id:2,name:'김다니'},
    {id:3,name:'김다호'},
    {id:4,name:'김다두'},
    {id:5,name:'김다비'}
]

const Test7 = () => {
    const [data, setDate] = useState(dataList)

    const onDel=(id)=>{
        setDate(data.filter(item=> item.id !== id ))
    }
    const onAdd1 = ()=>{
        setDate([
            ...data,
            {id:6, name:'송혜교'}
        ])
    }
    const onAdd2 = (name)=>{
        setDate([
            ...data,
            {
                id:7,
                name // name:name
            }
        ])
    }
    const onMod =(id)=>{
        setDate( data.map(item=>{
            if(item.id === id ){
                return {
                    ...item,
                    name:'강호동으로 수정'
                }
            }else{
                return item 
            }
        }))
    }
    const onMod2 =(id)=>{
        setDate( data.map( item=> item.id === id ? {...item, name:'강호동으로 수정2'}: item))
    }

    return (
        <div>
            <ul>
                {
                    data.map(item => 
                     <li key={item.id}> {item.id} / {item.name} </li>) 
                }
            </ul>

            <Test7Sub onDel={onDel} onAdd1={onAdd1} onAdd2={onAdd2} onMod={onMod} onMod2={onMod2}/>
        </div>
    );
};

export default Test7;