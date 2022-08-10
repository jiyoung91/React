import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const user =[
    {id:1, name:'김태리'},
    {id:2, name:'김리'},
    {id:3, name:'김게리'},
    {id:4, name:'naver'},
    {id:5, name:'NAVER'},
    {id:6, name:'nate'},
    {id:7, name:'김치치'},
]
const Test4 = () => {
    const [data,setData] = useState(user)
    const [text,setText] = useState('')

    //실시간 검색 
    useEffect (()=>{
        setData(user.filter(item=>item.name.toLowerCase().includes(text.toLowerCase())))//user 원본으로 검색
    },[text])

    //user.filter(item=>item.name.toLowerCase().includes(text.toLowerCase()))

    return (
        <div>
        <input type='text' value={text} onChange={e =>setText(e.target.value)} />
        <hr />
        <ul>
            {
                data.map(item => <li key={item.id}>
                    {item.id} : {item.name}
                </li>)
            }
        </ul>
        </div>
    );
};

export default Test4;