import React from 'react';
import {useCountr } from '../hooks/useCountr'

const Test14 = () => {
    const { state, increment, decrement, reset} = useCountr(100)
    return (
        <div>
            <h1>숫자 :{state} </h1>
            <p>
                <button onClick={()=>increment()}>증</button>
                <button onClick={()=>decrement()}>감</button>
                <button onClick={()=>reset()}>초</button>
            </p>
        </div>
    );
};

export default Test14;