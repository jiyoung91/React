import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data'

const Front = () => {
    //const { 사용자 정의변수 } = useParams() 
    const { name } = useParams()
    
    return (
        <div>
            <h1>Front page: { name } 받기 </h1>    
            {
                data.filter( item => item.title === name )
                    .map( (item, index) => <div key={index}>
                    <h2>{item.title} : {item.info}</h2>
                    </div>)
    }
        </div>
    );
};

export default Front;