import styled from "styled-components";

export const Container = styled.div`
  width: 171px;
  height: 240px;

  display: flex;
  flex-direction: column;
`;

export const WrapperImage = styled.div`
  width: 170px;
  height: 170px;

  position: relative;
`;

export const WrapperInformation = styled.div`
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  span {
    font-weight: 500;
    font-size: 16px;

    letter-spacing: 0.01em;
    text-transform: capitalize;

    color: #171717;
  }

  strong {
    font-weight: 700;
    font-size: 18px;

    letter-spacing: 0.01em;
    text-transform: capitalize;

    color: #171717;
  }
`;