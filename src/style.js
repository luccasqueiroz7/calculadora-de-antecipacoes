import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main`
  background-color: var(--blue-2);
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    ul,ol,li{
        list-style: none;
    }
    button {
        outline: none;
        cursor: pointer;
    }
    :root {
        --white:  #fbfcfd;
        --grey-1: #d0d9e0;
        --grey-2: #a4a9ad;
        --grey-3: #666666;
        --black:  #000000;
        --blue-1: #f6f8f9;
        --blue-2: #f4f4fc;
        --blue-3: #d3e1f1;
        --blue-4: #a1c3ed;
        --blue-5: #6aa0e3;
        --blue-6: #4178bc;
    }
`;
