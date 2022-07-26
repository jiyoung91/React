import React, { useEffect, useRef, useState } from 'react';

const Test2 = () => {
    const ref1 = useRef()   
    const [text,setText] = useState('')
    
    //한번만 실행됨 
    useEffect(()=>{
        ref1.current.focus()
    },[])

    return (
        <div>
            <h2>useEffect 형식2 (한번만 실행)</h2>
            <input type='text' ref={ref1} value={text} 
            onChange={e=>setText(e.target.value)}/>
        </div>
    );
};

export default Test2;