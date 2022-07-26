import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const Test10 = () => {
    const [data,setData] = useState([])
    //1)fetch
    /* useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> setData(data))
    },[]) */

    //2)axios
    /*useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>setData(res.data))
    },[])*/

    //3)async, await 비동기통신
    /*useEffect(()=>{
        //함수정의
        const getData = async()=>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
        }
        getData()
    },[])*/

    //4)속도좋음
    useEffect(()=>{
        //함수정의
        const getData = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData(data)
        }
        getData()
    },[])


    return (
        <div>
            <ul>
                {
                    data.map(item=> 
                    <li key={item.id}>
                        {item.id} : {item.title}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test10;
