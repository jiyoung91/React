import React from 'react';
import './Test3.css'
import myStyle from './Test3.module.css'

const Test3 = () => {
    return (
        <div>
            <div className='box'>Test</div>
            <div className={myStyle.box}>Test</div>
        </div>
    );
};

export default Test3;
/*
css 컴포넌트는 재사용 

파일명.module.css
import 참조변수 from './파일명.module.css'
<요소명 className={참조변수.클래스명}>

 */