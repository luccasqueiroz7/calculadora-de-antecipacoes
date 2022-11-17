import styled from "styled-components";

export const ResultsDiv = styled.div`
  font-family: sans-serif;
  min-width: 40%;
  min-height: 315px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-self: flex-end;
  background-color: var(--blue-3);
  padding: 50px 100px 80px 25px;
  border-radius: 0 5px 5px 0;
  > h1 {
    font-style: italic;
    font-size: 18px;
    white-space: nowrap;
    font-weight: bold;
    color: var(--blue-6);
  }
  > ul > li {
    color: var(--blue-5);
    font-style: italic;
    > span {
      color: var(--blue-6);
      font-weight: bold;
    }
  }
  > hr {
    opacity: 0.5;
    border: 1px solid var(--blue-4);
    width: 500vw;
  }
  > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 767px) {
    > h1 {
      font-size: 16px;
      white-space: normal;
    }
    > ul > li {
      font-size: 12px;
      white-space: nowrap;
      > span {
        color: var(--blue-6);
        font-weight: bold;
      }
    }
  }
`;
