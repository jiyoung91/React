import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const MemberDetail = () => {
    const {memberID} = useParams()
    const [member, setMember] = useState({})
    const navigate = useNavigate()

    const css = {
        border:'1px solid tomato', margin:20, padding:15 
    }
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${memberID}`
        axios.get(url)
        .then( res => setMember( res.data ))
    },[])
    const {name,email,phone,website} = member
    const onGo = ()=>{
        navigate('/')
    }
    return (
        <div style={css}>
            <h4>MemberDetail page : { memberID}</h4>            
            <h5>name: {name}</h5>
            <h5>email: {email}</h5>
            <h5>phone: {phone}</h5>
            <h5>website: {website}</h5>
            <button onClick={onGo}>목록으로 </button>
        </div>
    );
};

export default MemberDetail;