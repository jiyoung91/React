import React from 'react';

const Test5 = () => {
    const done1 =true
    const done2 =false
    const done3 =undefined

    return (
        <>
            <p>{done1 === true ? <button>참확인</button> : <button>거짓확인</button>}</p>
            <p>{done1 === true && <span>참결과</span>}</p>
            <p>{done2 === false && <span>참결과</span>}</p>
            <p>{done2 ||<span>거짓결과</span>}</p>
            <p>{done3 ||<span>조회된 글이 없습니다.</span>}</p>
           {/* 다중 if문과 동일하게 처리 
           조건1 && 결과1
           || false :출력
           || undefined :출력
           */}
        
        </>
    );
};

export default Test5;
/* 
 jsx : &&, 삼항 
*/