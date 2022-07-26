import React, { Fragment } from 'react';

const Test2 = () => {
    //함수영역 (모든 조건문,제어문 가능)

    //Fragment : 태그가 아니라 그룹핑해주는것
    return (
        <Fragment>
            <h1>JSX 영역 :조건처리</h1>
            <h2>한줄이상은 영역 div처리 ,Fragment, section, article, ul ..</h2>
            <img />
            {/* 주석 : ctrl+/ */} 
            <p 
                //주석
            >문단입니다.</p>
        </Fragment>
    );
};

export default Test2;