import React, { useState } from 'react';
import '../assets/css/reset.css'
import './Test5.css'

const user =[
    {id:1,name:'최우식',age:22,addr:'서울',done:true},
    {id:2,name:'최우도',age:25,addr:'부산',done:false},
    {id:3,name:'최우성',age:24,addr:'대구',done:true},
    {id:4,name:'최우호',age:23,addr:'제주',done:false},
    {id:5,name:'최우비',age:28,addr:'강원',done:true}
]
const Test5 = () => {
    const [data,setData] = useState(user)
    return (
        <>
           <table className='list'>
                <caption>그래우리는 출연진</caption>    
                <colgroup>
                    <col className='num' />
                    <col className='name' />
                    <col className='age' />
                    <col className='addr' />
                    <col className='done' />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.addr}</td>
                            <td>{item.done === true ? '동의' :'비동의'}</td>
                         </tr>
                    )}
                </tbody>
           </table> 
        </>
    );
};

export default Test5;