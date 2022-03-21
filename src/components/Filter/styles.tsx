import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  max-width: 400px;
  margin: 0 auto;
`;

export const WrapperFilter = styled.ul`
  padding: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  list-style: none;

  li {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 1rem 0.15rem;

    &:nth-child(1) {
      font-weight: bold;
      border-bottom: 2px solid #000;
    }
  }
`;