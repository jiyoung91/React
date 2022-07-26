import React from 'react';

const Test9 = () => {

const handleClick1 =() =>{
    alert('test1')
}
const handleClick2 =() =>{
    alert('test2')
}
const handleClick3 =() =>{
    alert('test3')
}
const make = (num) =>{
    alert(`$num`)//안되는게맞음
}

const make1 = (num1,num2) =>{
    alert(`$num1+$num2 입니다.`)//안되는게맞음
}

    return (
        <div>
            <h2>이벤트처리연습 : on+ 첫글자 대문자</h2>
            <p>
                <button onClick ={handleClick1}>클릭</button>
                <button onClick ={handleClick2}>클릭</button>
                <button onClick ={handleClick3}>클릭</button>
            </p>
            <p>
                <button onClick={()=>{
                    console.log('test')
                }}>클릭</button>
                <button onClick={()=> alert('test')}>클릭</button>
            </p>
            <p>
                {/* 함수명()만 작성하면 화면로딩시무조건호출해서 값넘길때
                   ()=>함수(값) 함수로 한번 묶어서 처리해줘야함 */}
                <button onClick={()=>make(100)}>클릭</button>
                <button onClick={()=>make1(200,100)}>클릭</button>
            </p>
        </div>
    );
};

export default Test9;