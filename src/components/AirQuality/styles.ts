import styled from 'styled-components';

export const AirQuality = styled.div`
  font-weight: 700;

  text-align: center;
  display: grid;

  h2 {
    font-size: 1.6rem;
    color: #dad8f7;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    margin-top: 3.2rem;
  }

  > div {
    > p {
      margin-top: 3.2rem;

      font-size: 1.8rem;
      color: #87ebcd;
    }

    p + p {
      margin-top: 0.4rem;
      font-size: 4rem;
      color: #e7e6fb;
    }
  }
`;
