import React from 'react';
import { useState } from 'react';

//사용자 함수
export const useCountr = (initialState = 10) => {
    const [state,setState] = useState(initialState)
    const increment =()=>{
        setState(state +1 )
    }
    const decrement =()=>{
        setState(state -1 )
    }
    const reset =()=>{
        setState(initialState )
    }
    return { state, increment, decrement, reset}

};


