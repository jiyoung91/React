import React, { useRef, useState } from 'react';

const Test3 = () => {
    const no = useRef(1)

    const [data,setData] = useState([])
    const names = '김다1,김다2,김다3,아무1,아무2,아무3,이나,이나2,이나3,이나4,이유1'.split(',');

    const onAdd =()=>{
        const ran = Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                id:no.current++,
                text: names[ran]
            }
        ])
    }
    return (
        <div>
            <h2>데이터추가</h2>
            <button onClick={onAdd}>추가</button>
            <hr />
            <ul>
                {
                    data.map(item=> <li key={item.id}>{item.id} / {item.text} </li>)
                }
            </ul>
        </div>
    );
};

export default Test3;