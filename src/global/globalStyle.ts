import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input, button, h1, h2, h3, p, textarea, label  {
        font-family: 'Lato', sans-serif;
    }

`;