import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const WrapperSelector = styled.div`
  display: flex;
  gap: .5rem;
`;

export const Selector = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid transparent;

  background: transparent;

  &:hover {
    border: 2px solid #181918;
  }
`;

export const ColorSelection = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 100%;
`;
