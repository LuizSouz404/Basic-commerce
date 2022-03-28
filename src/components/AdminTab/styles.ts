import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  overflow: hidden;
  background: #f1f1f1;
  color: #111;
`;

export const WrapperNav = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavLink = styled.li`
  display: flex;
  gap: .5rem;
  cursor: pointer;
`;
