import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,body,#root {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Vollkorn;
    }
`