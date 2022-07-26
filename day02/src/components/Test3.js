import React from 'react';


const Test3 = () => {
/*
함수영역 : 변수,제어문,조건문 모두 사용가능
css : {}객체 {키:값} 
{'backgroud-color':'pink'} -->> {backgroudColor,'pink' }
*/
const title ='신상명세서'
const name = '김다미'
const age = 20
const addr ='제주'
const css1 = {
    backgroundColor:'hotpink',
    fontSize :30,
    padding:15,
    border:'1px solid #000',
    margin:10
}
const css2 ={

}
const css3 ={
    
}

    return (
        <div>
            {/* jsx 영역 */}
            <h2 style={css1}> {title}</h2>
            <h2 style={css2}> {name}</h2>
            <h2 style={css3}> {age}</h2>
        </div>
    );
};

export default Test3;