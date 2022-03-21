import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;

  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 5px 5px 5px #00000005;
`;

export const WrapperLogo = styled.div`
  width: 150px;
  height: 50px;

  position: relative;
`;

export const WrapperButton = styled.button`
  width: 30px;
  height: 30px;

  position: relative;

  background: transparent;
  border: none;
  outline: none;
`;