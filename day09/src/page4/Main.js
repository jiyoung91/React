import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Member from './Member';

const Main = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setData(res.data))
    },[])
    return (
        <div>
           <h2> Main page :회원수 {data.length}</h2>
           {
            data.map(item =><Member key={item.id} item={item} />)
           }
        </div>
    );
};

export default Main;