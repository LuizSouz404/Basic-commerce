import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-radius: .25rem;
  overflow: hidden;

  height: 3.5rem;
`;

export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const WrapperImage = styled.div`
  aspect-ratio: 1/1;
  height: 3.5rem;

  position: relative;
`;

export const WrapperActionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 0 1rem;
`;
