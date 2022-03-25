import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 7rem;
  gap: 1rem;

  margin: 1rem auto;
  div {
    padding: 1.5rem 2rem;
    color: var(--text-title);
    background: var(--shape);
    border-radius: 0.25rem;
    box-shadow: 0px 1.5rem 4rem rgba(0, 0, 0, 0.06);
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highlight-background {
      color: #ffffff;
      background: #111;
    }
  }
`;
