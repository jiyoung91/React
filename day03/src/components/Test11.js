import React, { useState } from 'react';

const Test11 = () => {
    const [color,setColor] = useState('skyblue')
    const [text,setText] =useState('')

    const onColor =(e)=>{
        //setColor(e.target.value)
        const {value} = e.target
        // setColor(value)
        setText(value)//담아놨다가
    }
    const onView =()=>[
        setColor(text)//여기서 바뀜
    ]
    return (
        <div>
            <h2 style ={{color:color}}>컬러 바꾸기</h2>
            <select onChange={onColor}>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
                <option value="green">green</option>
            </select>
            <button onClick={onView}>확인</button>
        </div>
    );
};

export default Test11;