import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 0.5rem;
    border: 2px  solid #fff;

    & + img {
      margin-left: -15px;
    }
  }

  div {
    width: 45px;
    height: 43px;
    margin-left: -20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    border: 2px solid #f1f1f1;
    background: #f1f1f1;
    font-weight: bold;
  }

`;
