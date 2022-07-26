import React, { useRef } from 'react';

const Test10 = () => {
    const colorRef = useRef()
    const onView =()=>{
        const data ={
            color :colorRef.current.value
        }
        console.log(data)
    }
    return (
        <div>
            {/* 수업용 */}
            <select ref ={colorRef}>
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

export default Test10;