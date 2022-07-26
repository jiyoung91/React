import React from 'react';
import styled,{keyframes} from 'styled-components'

const Container = styled.div`
    height:100vh; display:flex; justify-content:center;
    background-color:pink;
    align-items:center; 
`
const ani = keyframes`
    0%{transform:translateY(0)}
    25%{transform:translateY(-20px) rotate(20deg)}
    50%{transform:translateY(10px)}
    75%{transform:translateY(-20px) rotate(-20deg)}
    100%{transform:translateY(0)}
`
const Hat = styled.div`
    font-size:120px;
    animation:${ani} 3s infinite cubic-bezier(1,1,0.5,1)
`

const Test9 = () => {
    return (
        <Container>
            <Hat>🎩</Hat>
        </Container>
    );
};

export default Test9;