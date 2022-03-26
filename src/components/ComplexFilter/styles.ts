import styled from "styled-components";

interface WrapperFilterProps {
  gridNumber: number;
}

export const Container = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;

export const WrapperFilter = styled.div<WrapperFilterProps>`
  height: 7rem;

  display: grid;
  grid-template-columns: ${({gridNumber}) => `repeat(${gridNumber}, 1fr)`};
  gap: 2rem;

  div {
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: .5rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const CategoryName = styled.span`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00000075;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
`;
