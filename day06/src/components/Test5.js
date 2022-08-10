import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [text,setText] = useState(5)
    const [count, setCount] = useState(1)
    const changeInput =(e)=>{
        const {value} = e.target 
        setText(Number(value))
    }
    useEffect(()=>{
        console.log('useEffect')
        const timer = setInterval(()=>{
            setCount(prevCount=> prevCount + text )//매개변수 prevCount
        },1000)
        return()=>{
            console.log('정리')
            clearInterval(timer)//정리
        }
    },[text])//text 변할때 마다 

    return (
        <div>
            <p>
            <input type='text' value={text}
            onChange={changeInput}/>
            </p>
            <h2>입력한 값만큼 1초마다 증가 :</h2>            
            <h1>{count} </h1>

        </div>
    );
};

export default Test5;