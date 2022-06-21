import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    
    :root {
        --linear: linear-gradient(154.23deg, #0F3A7B -58.45%, #0CFFFF 374.49%);
    }

    body, button, textarea, input {
        color: ${(props) => props.theme.primary};
        font: 400 1rem "Montserrat", sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: 0;
    }

    button:hover {
        cursor: pointer;
    }
`;
