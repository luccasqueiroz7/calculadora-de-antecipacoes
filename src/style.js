import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 20vh;
  background-color: var(--blue-2);
  filter: invert(${(props) => (props.dark ? "1" : "0")});
`;

export const DarkModeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px 12px 0 0;
`;

export const ButtonPersonalized = styled.div`
  width: 45px;
  background-color: var(--blue-1);
  border: var(--blue-6) solid 2px;
  border-radius: 50px;
  padding: 0 0 1px 2px;
  height: 20px;
  cursor: pointer;
  > div {
    background-color: var(--blue-6);
    height: 100%;
    width: 40%;
    border-radius: 100%;
    transition: transform 0.5s;
    transform: translateX(${(props) => props.change});
  }
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
    body {
        width: 100vw;
        height: 100vh;
        background-color: var(--blue-2);
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
