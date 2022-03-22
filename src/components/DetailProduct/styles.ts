import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.75rem 1rem;
  gap: 3rem;
  width: 100%;
  height: calc(100vh - 5rem);
  max-width: 1280px;
  margin: auto auto;
  padding: 2rem;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

export const SelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const WrapperProductInformation = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const ProductTitle = styled.h1``;

export const ProductPrice = styled.strong`
  font-size: 28px;
`;

export const DescriptionSection = styled.strong``;

export const DescriptionContent = styled.p`
  color: #575757;
`;

export const ActionButtonSection = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

export const ActionButtonFav = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: .75rem 2rem;
  width: 50%;
  background: transparent;
  border: 1px solid #171717;
  transition: .5s background, .5s color;

  &:hover {
    background: #464646;
    color: #fff;
    border: 1px solid #464646;
  }
`;

export const ActionButtonBuy = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: .75rem 2rem;
  width: 50%;
  background: #171717;
  color: #fff;
  border: none;
  transition: .5s background;

  &:hover {
    background: #464646;
  }
`;
