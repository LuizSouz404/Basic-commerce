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

  strong {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.01em;
    text-transform: capitalize;

    color: #171717;
  }

  span {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.01em;
    text-transform: capitalize;

    color: #171717;
  }
`;