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
}
`;

export default GlobalStyles;
