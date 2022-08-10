import React, { useState } from 'react';
import './Test4.css'

const Test4 = () => {
    const [isClass, SetIsClass] = useState(false)
    const onAdd =()=>{
        SetIsClass(true)
    }
    const onRemove =()=>{
        SetIsClass(false)
    }
    const onToggle =()=>{
        SetIsClass(!isClass)    
    }
    return (
        <div>
            <div className='wrap'>
                <p className='on'>오늘은 일요일입니다.</p>
                <p className='on1'>오늘은 일요일입니다.</p>
                <p className='test on'>오늘은 일요일입니다.</p>
                <hr/>
                <p className={isClass? 'on':''}>오늘은 일요일입니다.</p>
                <p className={isClass? 'on1':''}>오늘은 일요일입니다.</p>
                 {/* 템플릿리터럴 */}
                <p className={`test ${isClass ? 'on':''}`}>오늘은 일요일입니다.</p>
                <div>
                    <button onClick={onAdd}>add</button>
                    <button onClick={onRemove}>remove</button>
                    <button onClick={onToggle}>toggle</button>
                </div>
            </div>
        </div>
    );
};

export default Test4;
