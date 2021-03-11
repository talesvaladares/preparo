import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    /* :root {
        --white: #fff;
        --background: #f2f3f5;
        --gray-line: #dcdde0;
        --text: #666666;
        --text-highlight: #b3b9ff;
        --title: #2e384d;
        --red: #e83f5b;
        --green: #4cd62b;
        --blue: #5965e0;
        --blue-dark: #4953b8;
        --blue-twitter: #2aa9e0;
    } */

    /* @media(max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html {
            font-size: 87.5%;
        }
    } */
    *{
        border: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        height: 100%;
    }
    * , button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
        
    }
    /* body {
        background: var(---background);
        color: var(--text);
        
    } */
    body, input, textarea, button {
        font: 16px "Roboto", sans-serif; 
    }
    button {
        cursor: pointer;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;