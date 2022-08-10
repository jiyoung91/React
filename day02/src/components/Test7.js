import React from 'react';

const Sub = (props) => {
    const {name, age } = props
    return (
        <div style={{borderBottom:'1px solid #000',marginBottom:15 }}>
            {/* 자식컴포넌트 */}
            <h3>{name}: {typeof name}</h3>
            <h3>{age}: {typeof age}</h3>
        </div>
    );
};
const Test7 = () => {
    const data1 = { name:'강아지', age:3 }
    const data2 = { name:'고양이', age:2 }

    return (
        <>
            <h2>props 설명</h2>
            <Sub name="김다미" age="20"/>
            <Sub name="김태리" age={25}/>
            <Sub name={data1.name} age ={data2.age} />
          
        </>
    );
};
export default Test7;
/* 
자식에서 부모에 값을 콜백으로 전달할때 
<자식컴포넌트 props명 = 값 > 

*/



