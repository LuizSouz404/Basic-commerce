import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
 
export const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  gap: 1rem;

  @media (max-width: 1360px) {
    grid-template-columns: repeat(6, 1fr);
  }
  
  @media (max-width: 1170px) {
    grid-template-columns: repeat(5, 1fr);
  }
  
  @media (max-width: 980px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 795px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 610px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;