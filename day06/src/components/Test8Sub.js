import React, { useEffect }  from 'react';

const Test8Sub = ({msg, isShow,setIsShow}) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsShow(false)
        },3000)
        return()=>{
            clearTimeout(timer)
        }
    },[isShow])
    return (
        <>
        {
            isShow && <div styel={{background:'pink',padding:'20px 30px', margin:20,
            fontSize:25}}> 메세지:{msg} </div>
        }
          
          <p>3초후에 사라지기</p>  
        </>
    );
};

export default Test8Sub;