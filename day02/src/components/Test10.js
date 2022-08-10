import React, { useState } from 'react';

const Test10 = () => {
    //useState
    const [name, setName] = useState('아무개')
    const [age, setAge] = useState(0)
    const [color, setColor] = useState('yellow')

    const onName1 =() =>{
        setName('김태리')
    }
    const onName2 =() =>{
        setName('김다미')
    }
    const onName3 =() =>{
        setName('최우식')
    }
    return (
        <div>
            <h3 style={{backgroundColor:color, padding:10,margin:10}}>
                이름:{name} , 나이:0{age}, 컬러:{color} </h3>
            <p>
                <button onClick={ onName1 }>김태리 </button>
                <button onClick={ onName2 }>김다미 </button>
                <button onClick={ onName3 }>최우식</button>
            </p>
            <p>
                <button onClick={()=>{ setColor('pink')}}>pink</button>
                <button onClick={()=>{ setColor('tomato')}}>yellow</button>
                <button onClick={()=>{ setColor('blue')}}>blue</button>
            </p>
            <p>
                <button onClick={()=> setAge(20)}>20살</button>
                <button onClick={()=> setAge(15)}>15살</button>
                <button onClick={()=> setAge(30)}>30살</button>
            </p>
        
        </div>
    );
};

export default Test10;
/* 
함수형컴포넌트는 렌더링할때마다 내부의 것을 기억하지못한다. (함수영역안에서만 기억)
그래서 화면에서 값이 안바뀜
내부 값을 유지하기 위해(기억) >  hook 이 등장
값을 유동으로 변경해주고 값을 기억 > useState

  const [count, setCount] = useState(0);
  const [상태데이터, 상태데이터 변경해주는 함수] = useState(초기값);
  const [변수, 함수] = useState(초기값);
    함수 : 값,수식 들어갈수있음
  const [test, setTest] = useState(0);
*/