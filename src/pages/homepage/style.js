import styled from "styled-components";

export const HomepageDiv = styled.div`
  background-color: var(--white);
  width: 70%;
  max-width: 590px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  margin-top: 20vh;
  box-shadow: 0px 0px 10px var(--grey-3);
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 86%;
    max-width: 86%;
  }
  @media (min-width: 548px) and (max-width: 767px) {
    max-width: 470px;
  }
`;
