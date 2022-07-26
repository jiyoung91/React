import React from 'react';

const Test1 = () => {
    const title ='신상명세서'
    const arr = ['김다미','김태리','송혜교','최진혁','남주혁']
    const data =[
        {id:1, name:'김다미'},
        {id:2, name:'김태리'},
        {id:3, name:'송혜교'},
        {id:4, name:'최진혁'},
        {id:5, name:'남주혁'}
    ]
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {
                    arr.map((item,idx)=>{
                        return (<li key={idx}> {idx}, {item}</li>)
                    })
                }
            </ul>
            <hr/>
            <ul>
                {
                    data.map((item,idx)=>{
                        return (<li key={idx}> {item.id} , {item.name}</li>)
                    })
                }
            </ul>
            <hr/>
            <ul>
                {
                    data.map(item =>{
                        return <li key={item.id}> {item.id} , {item.name}</li>
                    })
                }
            </ul>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}> {item.id} , {item.name}</li>)
                }
            </ul>
        </>
    );
};

export default Test1;
/* 
Key :유일성
Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. 
key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.

arr.map((item,index)=>{
    return 반환값(),{}
})
*/