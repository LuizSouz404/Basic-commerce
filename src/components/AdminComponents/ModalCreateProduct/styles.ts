import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + * {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background: #171717;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const SelectorWrapper = styled.div`
  padding: 0 1.5rem;
  width: 100%;
  height: 4rem;
  font-size: 1rem;
  font-weight: 400;
  background: #e7e9ee;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  button {
    background: transparent;
    border: 0;
  }

  & + * {
    margin-top: 1rem;
  }
`;

export const Selector = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  background: #e7e9ee;
  border: 1px solid #d7d7d7;

  display: flex;
  flex-direction: column;
  width: 100%;

  border-radius: 0 0 0.25rem 0.25rem;

  span {
    padding: 10px 16px;

    & + span {
      border-top: 1px solid #00000010;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;
