import styled from 'styled-components';

export const TempNow = styled.div`
  margin: 6rem;

  font-weight: 700;

  display: flex;
  justify-content: center;
  gap: 0.4rem;

  > div:last-child {
    font-size: 2.4rem;
    color: #dad8f7;

    margin-top: 1.5rem;
  }
`;

export const Number = styled.div`
  text-align: center;
  font-size: 8.8rem;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  div {
    font-size: 2rem;

    span {
      color: #c2bff4;
    }
  }
`;
