import React, { useState } from 'react';

const Test11 = () => {
    const [bgColor, setBgColor] =useState('pink')
    const onColor =() =>{
        //함수안에 값,수식 올수있음
        setBgColor(bgColor === 'blue' ? 'pink' : 'blue')//왕복
    }
    return (
        <>
            <h2>h1클릭하면 pink -blue 배경색 글자 변경하기 왕복</h2>
            <h1 style={{padding:30, border:'1px solid #000', margin:20, fontSize:20,
                backgroundColor:bgColor ,cursor:'pointer'}}
                onClick={onColor}>
                backgroundColor : {bgColor}
            </h1>
        </>
    );
};

export default Test11;