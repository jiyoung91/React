import React from 'react';

const Test4Name = ({text,onText}) => {
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름 : </label>
            <input type="text" value={text} onChange={onText}/>
            <span>{text}</span>
        </div>
    );
};

export default Test4Name;