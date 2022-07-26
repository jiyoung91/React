import React, { useRef, useState } from 'react';

const Test5 = () => {
    const idRef = useRef()
    const [form,setForm] = useState({
        userid:'',
        userpw:'',
        useremail:''
    })
    //비구조할당 
    const {userid,userpw,useremail} = form 

    const changeInput=(e)=>{
        const {value, name} = e.target
        setForm({
            ...form, //다른값들은 copyt해옴
            [name]:value //userid:value //['userid']:value 
        })
    }
    const onReset =()=>{
        setForm({
            userid:'',
            userpw:'',
            useremail:''
        })
        idRef.current.focus()
    }
    return (
        <div>
            {/* name 안에 문자열로 넣어야함 */}
            <input type="text" value={userid} name="userid" onChange={changeInput} ref={idRef}/>
            <input type="text" value={userpw} name="userpw" onChange={changeInput}/>
            <input type="text" value={useremail} name="useremail" onChange={changeInput}/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h3>아이디:{userid}</h3>
            <h3>비번:{userpw}</h3>
            <h3>이메일:{useremail}</h3>
        </div>
    );
};

export default Test5;