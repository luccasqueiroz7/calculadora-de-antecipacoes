import styled from "styled-components";

export const CalculatorDiv = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  padding: 20px 50px 27px 25px;
  gap: 10px;
  > h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--grey-3);
    font-size: 20px;
    white-space: nowrap;
    font-weight: bold;
  }
  > form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    > label {
      display: flex;
      flex-direction: column;
      gap: 5px;
      color: red;
      font-size: 10px;
    }
    > label > input {
      padding: 3px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      border: 2px solid var(--blue-4);
      border-radius: 5px;
    }
    > label > input:hover {
      border: 2px solid var(--blue-5);
    }
    > label > h3 {
      font-size: 12px;
      color: var(--grey-3);
      opacity: 0.8;
      font-weight: 600;
    }
  }
  @media (max-width: 767px) {
    max-width: 50%;
    padding: 20px 0 0 10px;
    padding-top: 20px;
    > h1 {
      font-size: 14px;
    }
  }
`;

export const ButtonInvisible = styled.button`
  display: "none";
  opacity: 0;
  width: 0px;
  height: 0px;
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
`;
