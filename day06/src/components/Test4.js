import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [count,setCount] = useState(1)
    useEffect(()=>{
        console.log('useEffect')
        const timer = setInterval(()=>{
            console.log('interval')
            //setCount(매개변수=>매개변수 + 1)
            setCount(cnt=>cnt + 1)
        },1000)
        //자식컴포넌트에 처리하는 경우가 많다 
        //시간은 정리 꼭 해야한다.
        return()=>{
            console.log('정리')
            clearInterval(timer)
        }

    },[])
    return (
        <div>
            <h1>카운트 :{count} </h1>
        </div>
    );
};

export default Test4;