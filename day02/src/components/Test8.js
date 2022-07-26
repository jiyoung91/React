import React from 'react';
import Test8Sub from './Test8Sub';


const Test8 = () => {
    return (
        <>
            <Test8Sub
                name ="김태리"
                age={22}
                addr="제주도"
                tel="010-3322-2222"
                done={true}
                color="tomato"
                bgColor="pink"
            />
            <hr />
            <Test8Sub 
                name ="김다미"
                addr="서울"
                color="skyblue"
                bgColor="yellow"
            />
            
        </>
    );
};

export default Test8;