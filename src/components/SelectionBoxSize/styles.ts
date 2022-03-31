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

  background: transparent;

  cursor: pointer;

  .active {
    font-weight: 700;
    color: #181918;
  }
`;

export const SizeSelection = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: #9A9A9B;
`;
