import React, { Fragment } from 'react';

const Test1 = () => {
    return (
        <Fragment>
            <h1>JSX영역 :JavaScript를 확장한 문법 </h1>
            {/* 컴포넌트명은 반드시 첫글자 대문자*/ }
            <h2>한줄 이상은 div, section, article, tr,td,ul..</h2>
            <h2>빈 태그는 반드시 맨뒤에 / </h2>
            <div
            // 한줄 주석
            ></div>

        </Fragment>
    );
};

export default Test1;
