import React, { useState } from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    const [msg,setMsg] = useState('test')
    const [isShow,setIsShow] = useState(false)
    const onMsg1 =()=>{
        const result = window.confirm('전부 삭제하시겠어요?')
        if(result){
            setMsg('예')
            setIsShow(true)
        }else{
            return 
        }
    }
    const onMsg2 =()=>{
        const result = window.confirm('전부 복구하시겠어요?')
        if(result){
            setMsg('예')
            setIsShow(true)
        }else{
            return 
        }
    }
    return (
        <div>
            <p>
                <button onClick={onMsg1}>전부 삭제</button>
                <button onClick={onMsg2}>전부 복구</button>
            </p>
            <hr/>
            <Test8Sub msg={msg} isShow={isShow} setIsShow={setIsShow} />
        </div>
    );
};

export default Test8;