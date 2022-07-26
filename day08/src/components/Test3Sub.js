import React from 'react';
import { useMemo } from 'react';
const getColor =(color) =>{
    switch(color){
        case 'pink' : return '분홍색입니다.';
        case 'blue' : return '분홍색입니다.';
        case 'red' : return '분홍색입니다.';
        default : return  '다시선택';
    }
}
const getFood =(food) =>{
    switch(food){
        case '고기' : return '고기입니다.';
        case '회' : return '회입니다.';
        case '라면' : return '라면입니다.';
    }
}

const Test3Sub = ({color,food}) => {
    const colorInfo =useMemo(()=>{
        return getColor(color)
    },[color])
    const foodInfo =useMemo(()=> getFood(food),[food])
    
    return (
        <div>
            <h3>선택한 색 : {color}</h3>
            <h3>색 설명 : {colorInfo}</h3>

            <h3>선택한 음식 : {food}</h3>
            <h3>음식 설명 : {foodInfo}</h3>

        </div>
    );
};

export default Test3Sub;