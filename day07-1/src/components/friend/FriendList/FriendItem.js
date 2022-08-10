import React from 'react';

const FriendItem = ({friend}) => {
    const { id , name , age , image } = friend 

    return (
        <li>
           <p> <img src={image} alt="" /> </p> 
           <div> <strong>이름: {name} </strong>
                 <span>나이: {age} </span>
           </div>
        </li>
    );
};

export default FriendItem;