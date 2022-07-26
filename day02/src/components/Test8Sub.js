import React from 'react';
import PropTypes from 'prop-types';

const Test8Sub = ({name,age,addr,tel,color,bgColor,done} ) => {
    
    return (
        <div style={{width:350,margin:20,padding:15,
             border: `4px solid ${color}`, //탬플릿리터럴
             backgroundColor: bgColor}}>
            <h2>{name} 신상</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>연락처 : {tel}</li>
                <li>보더컬러 : {color}</li>
                <li>배경컬러 : {bgColor}</li>
                <li>동의여부 : {done? '동의' :'비동의'}</li>
            </ul>
        </div>
    );
};
//propTypes
Test8Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string,
    tel: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    done: PropTypes.bool
  };
//초기값
Test8Sub.defaultProps = {
    name:'아무개',
    age: 20,
    addr: '서울',
    tel: '010-0000-0000',
    color: 'blue',
    bgColor: 'green',
    done:false

  };
/* 
해당컴포넌트.propTypes = {
  props명: PropTypes.타입
};
 */
/* 
초기 Prop 값
defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있습니다.
// props의 초깃값을 정의합니다.
해당컴포넌트.defaultProps = {
  props명: '초기값'
};
*/
export default Test8Sub;