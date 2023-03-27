import styled from 'styled-components';

export const Stats = styled.div`
  flex: 1;

  padding: 1.2rem 1.6rem;
  background: rgba(102, 96, 200, 0.6);
  border-radius: 0.6rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  div {
    color: #e7e6fb;

    span,
    p {
      font-size: 1.2rem;
    }

    h5 {
      font-size: 1.8rem;

      display: flex;
      align-items: baseline;
      gap: 0.4rem;
    }
  }
`;
