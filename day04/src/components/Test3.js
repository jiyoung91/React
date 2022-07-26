import React, { useState } from 'react';

const Name = () => {
    const [text, setText] =useState('');
    const changeInput =(e)=>{
        const {value} = e.target
        setText(value)
    }
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름:</label>
            <input type="text" value={text} onChange={changeInput}/>
            <span style={{marginLeft:10}}>{text} </span>
        </div>
    );
};
const Animal = ({ani,changeInput}) => {
    return (
        <div>
            <h2>Animal 컴포넌트</h2>
            <label>동물:</label>
            <input type="text" value={ani} onChange={changeInput}/>
            <span style={{marginLeft:10}}>{ani} </span>
        </div>
    );
};
const Display = ({ani}) => {
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            <h3>내가 좋아하는 동물은 {ani} 입니다.</h3>
        </div>
    );
};

const Test3 = () => {
    const [ani,setAni] =useState('강아지');
    const changeInput =(e)=>{
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            <Name />
            <hr/>
            <Animal ani={ani} changeInput={changeInput} />
            <hr />
            <Display ani={ani} />
        </div>
    );
};

export default Test3;