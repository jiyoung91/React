import React, { useRef } from 'react';

const Test9 = () => {
    const idRef= useRef(null)
    const pwRef= useRef()
    const onShow =()=>{
        const data ={
            id:idRef.current.value,
            pw:pwRef.current.value
        }
        console.log(data)
    }
    return (
        <div>
            {/* ref 수업용 : 좋은 예는 아님 */}
            <input type="text" ref={idRef} />
            <input type="text" ref={pwRef} />
            <button onClick={onShow}>확인</button>

        </div>
    );
};

export default Test9;
/* 
useRef
직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능
useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다.
반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.
useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

-사용 사례
1)포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
2)애니메이션을 직접적으로 실행시킬 때.
3)서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

const 이름= useRef()
<태그 ref = {이름} />
이름.current.style.color = xx 

 */