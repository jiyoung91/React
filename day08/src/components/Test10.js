import React from 'react';
import { useReducer } from 'react';

const initialState ='tomato'
const reducer =(state,action)=>{
    switch(action.type){
        case 'RED':
            return 'red'
        case 'GREEN':
            return 'green'
        case 'BLUE':
            return 'blue'
        case 'PINK':
            return 'pink'
        default :
            return state
    }
}
const Test10 = () => {
    const [color,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h1 style={{color:color}}>컬러:{color}</h1>
            <p>
                <button onClick={()=>dispatch({type:'RED'})}>red</button>
                <button onClick={()=>dispatch({type:'GREEN'})}>green</button>
                <button onClick={()=>dispatch({type:'BLUE'})}>blue</button>
                <button onClick={()=>dispatch({type:'PINK'})}>pink</button>
            </p>
        </div>
    );
};

export default Test10;