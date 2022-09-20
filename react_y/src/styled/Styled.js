import { ThemeProvider, createGlobalStyle } from 'styled-components'

import logo from '../logo.svg'
import './styles.css'

import StyledButton, {FancyButton, SubmitButton, DarkButton } from './button/Button';
import { AnimatedLogo } from './button/Button.styles';

const theme ={
    dark : {
        primary : '#000',
        text : '#fff',
    },
    light:{
        primary : '#fff',
        text: '#000'
    },
    fontFamily: 'Segoe UI'
}
const GlobalStyle = createGlobalStyle`
    button{
        font-family : 'Roboto'
    }
`
const Styled = () => {
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
           <StyledButton type="submit">Styled Button</StyledButton>
           <div> <br /> </div>
           <StyledButton variant='outline'>Styled Button</StyledButton>
           <div> <br /> </div>
           <FancyButton as='a'>Fancy Button</FancyButton>
           <div> <br /> </div>
           {/* passed props and adding attributes */}
           <SubmitButton>Submit</SubmitButton>
           {/* animations */}
           {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <AnimatedLogo src={logo} />
           <div> <br /> </div>
            <DarkButton>Dark theme</DarkButton>
        </div>
        </ThemeProvider>
    );
};

export default Styled;