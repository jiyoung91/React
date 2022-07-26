import React from 'react';
import { useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [color,setColor] =useState('')
    const [food,setFood] =useState('')
    const onColor =(e)=>{
        const {value} = e.target 
        setColor(value)
    }
    const onFood =(e)=>{
        const {value} = e.target
        setFood(value)
    }
    return (
        <div style={{margin:40}}>
            <h2>좋아하는 색 ? </h2>
            <div>
                <input type='text' name='color' onChange ={onColor}/>
                <p>선택 : pink,blue,red </p>
            </div>
            <hr />
            <h2>좋아하는 음식 ? </h2>
            <div>
                <p>
                    <input type='radio' value='고기' name='food' onChange ={onFood} />
                    <label style={{marginLeft:10}}>고기</label>
                </p>
                <p>
                    <input type='radio' value='회' name='food'  onChange ={onFood}/>
                    <label style={{marginLeft:10}}>회</label>
                </p>
                <p>
                    <input type='radio' value='라면' name='food' onChange ={onFood}/>
                    <label style={{marginLeft:10}}>라면</label>
                </p>
            </div>
            <hr />
            <Test3Sub color={color} food={food}/>
        </div>
    );
};

export default Test3;