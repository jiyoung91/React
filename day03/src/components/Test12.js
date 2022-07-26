import React, { useState } from 'react';

const Test12 = () => {
    const [isChk,setIsChk] =useState('false')
    const onChk =(e)=>{
        const {checked } = e.target
        setIsChk(checked)
    }
    return (
        <>
        <div style={{color:isChk === true?'red':'blue',margin:30,fontSize:25}}>
            <input type="checkbox" onChange={onChk} checked={isChk}/>
             오늘은 일요일
        </div>
        </>
    );
};

export default Test12;