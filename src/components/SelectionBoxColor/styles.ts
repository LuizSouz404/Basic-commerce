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
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid #181918;

  background: transparent;

  &:hover {
    background: #181918;
  }
`;

export const ColorSelection = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 100%;
`;
