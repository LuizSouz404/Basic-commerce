import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const WrapperSelector = styled.div`
  display: flex;
  gap: .5rem;

  .active {
    border: 2px solid #181918;
  }
`;

export const Selector = styled.div`
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid transparent;

  background: transparent;

`;

export const ColorSelection = styled.div`
  width: 18px;
  height: 18px;
  padding: 2px;

  border-radius: 100%;
`;
