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

export const WrapperEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .5rem 1rem;
  background: #171717;
  color: #fff;
  border: 1px solid #171717;
  border-radius: .15rem;
  transition: .5s background;

  &:hover {
    background: #464646;
  }
`;

export const WrapperDeletedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .5rem 1rem;
  background: transparent;
  border: 1px solid #171717;
  border-radius: .15rem;
  transition: .5s background, .5s color;

  &:hover {
    background: #464646;
    color: #fff;
    border: 1px solid #464646;
  }
`;
