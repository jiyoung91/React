import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const ChangeColorContext = createContext()

const ChangeColorProvider = (props) => {
    const [color, setColor] = useState('pink')
    const onColor = (text) =>{
        setColor(text)
    }
    return (
        <ChangeColorContext.Provider value={{color,onColor}}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;