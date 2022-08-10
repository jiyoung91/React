import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({dataList }) => {
    //const {사용자정의 변수} = useParams()
    const {name } = useParams()

    return (
        <div>
            <h1> Front page : {name }  </h1>
            {
                dataList.filter(item=>item.title === name )
                .map((item,index)=> <div key={index}>
                    <h2>{item.title} : {item.info}</h2>
                </div>)
            }
        </div>
    );
};

export default Front;