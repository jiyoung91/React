import React, { useState } from 'react';

const Test13 = () => {
    const [isChk,setIsChk] = useState(false)
    const onView=(e)=>{
        const {checked} = e.target
        setIsChk(checked)
    }
    return (
        <div style={{margin:30}}>
            <p>
                <input type="checkbox" onChange={onView} checked={isChk}/>
                {isChk === true?'보임':'숨김'}
            </p>
            {
                isChk ? <div style={{with:200,height:100,background:'pink'}}></div> : null
            }
            <hr/>
            {
                isChk && <div style={{with:200,height:100,background:'pink'}}></div>
            }
        </div>
    );
};

export default Test13;