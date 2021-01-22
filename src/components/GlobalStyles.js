import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}
body{
    font-family: 'Libre Baskerville', serif;
    font-weight: bold;
    color: #EAEAEA;
    overflow: hidden;
}
::-webkit-scrollbar {
    width: .5rem;
    height: .5rem;
    }
    ::-webkit-scrollbar-track {
    width: .5rem;
    background: #030303;
    }
    ::-webkit-scrollbar-thumb {
    background: #E40000;
    }
`;

export default GlobalStyles;
