import React, { createContext, useState } from 'react';

export const ColorContext = createContext()

const ColorProvider = ( props ) => {
    //state , 함수 
    const [ color , setColor ] = useState('hotpink')
    const onRed = () => { setColor('red')}
    const onGreen = () => { setColor('green')}
    const onBlue = () => { setColor('blue')}
    const onTomato = () => { setColor('tomato')}

    return (
        <ColorContext.Provider value={{ color, onRed, onBlue, onGreen, onTomato }}>
            {/* UI디자인 - Color.js */}
            { props.children }
        </ColorContext.Provider>
    );
};

export default ColorProvider;