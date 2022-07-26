import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [count,setCount ] = useState(1)
    const [active ,setActive] = useState(false)
    const onToggle =()=>{
        setActive(!active)
    }
    useEffect(()=>{
        console.log('useEffect')
        let timer = null 
        if(active){
            timer = setInterval(()=>{
                setCount(cnt => cnt+1)
            },1000)
        }else{
            clearInterval(timer)//정리
        }
        return()=>{
            console.log('정리')
            clearInterval(timer)//정리
        }
    },[active])//active 바뀔때마다 update!
    
    const onReset =()=>{
        setActive(false)
        setCount(1)
    }

    return (
        <div>
            <h1>카운트 : {count} </h1>
            <p>
                <button onClick={onToggle }>
                    {active ? '중지':'시작'}    
                </button>
                <button onClick={onReset}>초기화 중지</button>
            </p>
        </div>
    );
};

export default Test6;