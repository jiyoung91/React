import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [count, setCount] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()
    const onColor =() =>{
        setCount (count + 1 )
        ref1.current.style.backgroundColor ='skyblue'
        ref2.current.style.backgroundColor ='yellow'
    }

    //화면에 그려지고 난후 실행 (항상실행되서 자주쓰이지x)
    useEffect(()=>{
        ref1.current.style.backgroundColor ='red'
    })
    //화면에 그려지기 전에 실행 (항상실행되서 자주쓰이지x)
    useLayoutEffect(()=>{
        ref2.current.style.backgroundColor ='pink'
    })

    return (
        <div>
            <h2>hook :useEffect 형식1 </h2>
            <h1>카운트 : {count }</h1>
            <h2 ref={ref1}>useEffect</h2>
            <h2 ref={ref2}>결과</h2>
            <button onClick={onColor}>컬러, 숫자 </button>
        </div>
    );
};

export default Test1;