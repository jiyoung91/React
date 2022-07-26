import React, { useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css'

const dataList=[
    {id:1,name:'김태리',addr:'서울'},
    {id:2,name:'김태이',addr:'대전'},
    {id:3,name:'김태지',addr:'대구'},
    {id:4,name:'김태기',addr:'제주'},
    {id:5,name:'김태트',addr:'강원'},
]
const Customer = () => {
    const no = useRef(dataList.length+1 )
    const [data,setData] = useState(
        //localStorage 값 조회
        ()=>JSON.parse(localStorage.getItem('data'))|| dataList
    )
    const [isEdit, setIsEdit] = useState(false)
    const [current,setCurrent] = useState({})
    const [msg,setMsg] = useState('test')
    const [isShow, setIsShow] = useState(false)
  
    useEffect(()=>{
        //localStorage 값 입력
        localStorage.setItem('data',JSON.stringify(data))//key,string값
    },[data])

    const onDel =(id)=>{
        setData(data.filter(item => item.id !== id ))
        setIsShow(true)
        setMsg('명단에서 삭제했습니다.')
    }
    const onAdd =(user)=>{
        user.id= no.current++
        setData([...data,user])
        setIsShow(true)
        setMsg('명단 추가했습니다.')
    }
    const onEdit =(user)=>{
        setIsEdit(true)
        setCurrent(user)
        setIsShow(true)
        setMsg('명단 수정했습니다.')
    }
    const onUpdate=(user)=>{
        setIsEdit(false)
        setData(data.map(item=>item.id === user.id? user : item ))

    }
    return (
        <div className='Customer'>
            <Message isShow={isShow} msg={msg} setIsShow={setIsShow} />
            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} />:<AddUser onAdd={onAdd} />
            }
            <ListUser data={data} onDel={onDel} onEdit={onEdit} />

        </div>
    );
};

export default Customer;