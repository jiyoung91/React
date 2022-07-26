import React from 'react';

const Step2 = ({form,changeInput,onPrev,onNext }) => {
    const {job,email,sex,inter} = form
    return (
        <>
        <p>
         <label>직업</label> :
         <input type="text" name="job" value={job} onChange={changeInput}/>
        </p> 
        <p>
         <label>이메일</label> :
         <input type="text" name="email" value={email} onChange={changeInput}/>
        </p> 
        <p>
         <label>성별</label> :
         <input type="text" name="sex" value={sex} onChange={changeInput}/>
        </p> 
        <p>
         <label>관심분야</label> :
         <input type="text" name="inter" value={inter} onChange={changeInput}/>
        </p> 
        <p>
            <button onClick={onPrev}>이전</button>
            <button onClick={onNext}>다음</button>
        </p>
     </>
    );
};

export default Step2;