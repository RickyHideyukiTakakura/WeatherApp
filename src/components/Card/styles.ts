import styled from 'styled-components';

export const Card = styled.section`
  background: #6d67d0;

  border-radius: 10px;

  &:last-child {
    @media (min-width: 1200px) {
      grid-column: 2/4;
    }
  }
`;

export const CardHeader = styled.h2`
  font-size: 1.6rem;
  color: #dad8f7;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  margin-top: 3.2rem;
`;
