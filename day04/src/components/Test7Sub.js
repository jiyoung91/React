import React from 'react';

const Test7Sub = ({onDel,onAdd1,onAdd2,onMod,onMod2}) => {
    return (
        <div>
            <p>
                <button onClick={()=>onDel(1)}>1삭제</button>
                <button onClick={()=>onDel(2)}>2삭제</button>
            </p>
            <p>
                <button onClick={onAdd1}>추가</button>
                <button onClick={()=>onAdd2('전지현')}>추가</button>
            </p>
            <p>
                <button onClick={()=>onMod(3)}>수정</button>
                <button onClick={()=>onMod2(4)}>수정</button>
            </p>
        </div>
    );
};

export default Test7Sub;