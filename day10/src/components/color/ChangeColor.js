import React from 'react';
import { useContext } from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {
    const {color,onColor} = useContext(ChangeColorContext)
    return (
        <div>
            <h1 style={{color:color}}>Change:{color} </h1>
            <p>
            <button onClick={()=>onColor('red')}>red</button>
            <button onClick={()=>onColor('green')}>green</button>
            <button onClick={()=>onColor('blue')}>blue</button>
            <button onClick={()=>onColor('tomato')}>tomato</button>
            </p>
        </div>
    );
};

export default ChangeColor;