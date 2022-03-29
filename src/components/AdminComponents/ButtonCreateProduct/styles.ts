import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  position: fixed;
  bottom: 1rem;
  right: 1rem;

  padding: .5rem 1rem;
  background: #171717;
  color: #fff;
  border: 1px solid #171717;
  border-radius: .25rem;
  transition: .5s background;

  &:hover {
    background: #464646;
  }

  strong {
    text-transform: uppercase;
  }
`;
