import React, { useReducer } from 'react';
import { useState } from 'react';

const initialState = 0 
const reducer = (state,action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state +1
        case 'DECREMENT':
            return state -1
        case 'RESET':
            return 0
        default :
            return state
    }
}



const Test9 = () => {
    const [count, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h2>숫자 : {count}</h2>
            <p>
                <button onClick={()=>dispatch({type:'INCREMENT'}) }>증가</button>
                <button onClick={()=>dispatch({type:'DECREMENT'}) }>감소</button>
                <button onClick={()=>dispatch({type:'RESET'}) }>초기화</button>
            </p>
            
        </div>
    );
};

export default Test9;
// useReducer