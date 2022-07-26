import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Member = ({item}) => {
    const {id,name} =item
    const navigate = useNavigate()
    const css={
        border:'1px solid tomato', margin:20, padding:15 
    }
    const onGo =()=>{
        const url = `/member/${id}`
        navigate(url)
    }
    return (
        <div style={css}>
            <h4>ID:{id}</h4>  
            <h4>name:{name}</h4>  
            <p><Link to={`/member/${id}`}>자세히 보기</Link></p>
            <button onClick={onGo}>상세보기</button>
        </div>
    );
};

export default Member;