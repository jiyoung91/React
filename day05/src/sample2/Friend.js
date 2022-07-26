import React, { useRef, useState } from 'react';
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import './style.css'
import dataList from '../assets/api/friendData'

const Friend = () => {
    const [data,setData] = useState(dataList)
    const [isChk, setIsChk] =useState(true)
    const no = useRef(data.length+1 )

    const onDel=(id)=>{
        setData(data.filter(item=> item.id !== id ))
    }
    const onRemove=()=>{
        setData([])
    }
    const onReset=()=>{
        setData(dataList)
    }
    const onAdd1=(name,age,image)=>{
        setData([
            ...data,
            {
                id:no.current++,
                name,
                age,
                image
            }
        ])
    }
    const onAdd=(form)=>{
        form.id = no.current++
        setData([
            ...data,
            form
        ])
    }
    return (
        <div className='wrap'>
            <h1>친구들 총인원: {data.length}</h1>
            <p className='chk'>
                <input type='checkbox' checked={isChk} 
                    onChange={e=>setIsChk(e.target.checked)} />
                {
                    isChk? '추가비활성' : '추가활성'
                }
            </p>
            <FriendList data={data} onDel={onDel}/>
            <p className='btn'>
                <button onClick={onRemove}>모두 삭제</button>
                <button onClick={onReset}>초기복구</button>
            </p>
            {
                isChk && <FriendInput onAdd={onAdd}/>
            }
             
        </div>
    );
};

export default Friend;