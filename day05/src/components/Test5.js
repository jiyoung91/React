import React, { useRef, useState } from 'react';

const Test5 = () => {
    const no =useRef(1)
    const textRef = useRef()
    const [data,setData] = useState([])
    const [form,setForm] = useState({
        text:'',addr:''
    })
    const {text,addr} = form 

    const onAdd=(e)=>{
        e.preventDefault()//submit 사용시
        if(!text || !addr) return 
        setData([
            ...data,
            {
                id:no.current++,
                text:text,
                addr:addr
            }
        ])
        setForm({
            text:'',
            addr:''
        })
        textRef.current.focus()
    }
    const changeInput =(e)=>{
        const {value,name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    return (
        <div>
            <form onSubmit={onAdd}>
                <input type='text' name="text" ref={textRef} value={text} onChange={changeInput}/>
                <input type='text' name="addr" value={addr} onChange={changeInput}/>
                <button type="submit">추가</button>
            </form>
            <hr />
            <ul>
                {data.map(item=> <li key={item.id}>
                    {item.id} / {item.text} / {item.addr}
                </li>)}
            </ul>
        </div>
    );
};

export default Test5;