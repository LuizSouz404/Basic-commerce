import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: calc(100vh - 5rem);
  max-width: 1280px;
  margin: auto auto;
  padding: 2rem;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

export const WrapperImage = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  div {
    max-width: 20%;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    left: 0;

    border: 1px solid #33333225;

    img {
      max-width: 100px;
      aspect-ratio: 1/1;

      opacity: .5;
      transition: .25s opacity;

      &:hover {
        opacity: 1;
      }

      & + img {
        border-top: 1px solid #33333350;
      }
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

export const SelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const WrapperProductInformation = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const ProductTitle = styled.h1`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

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
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .75rem 2rem;
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
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .75rem 2rem;
  background: #171717;
  color: #fff;
  border: none;
  transition: .5s background;

  &:hover {
    background: #464646;
  }
`;
