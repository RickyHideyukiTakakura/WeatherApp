import styled from 'styled-components';

export const SunChartWrapper = styled.div`
  margin-top: 4rem;
  height: 11rem;
`;

export const SunChart = styled.div`
  --pos-x: 75;
  margin: auto;
  width: 21.6rem;
  height: 21.6rem;

  position: relative;

  &::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    background: #f6c833;
    border-radius: 50%;

    top: 50%;
    left: 50%;
    margin: -0.6rem;

    transform: rotate(calc(1deg * (((100 - var(--pos-x)) / -100) * 180)))
      translate(10.6rem);
  }

  time {
    position: absolute;

    top: 25%;
    left: 50%;
    transform: translate(-50%);

    color: white;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export const Chart = styled.div`
  width: 21.6rem;
  height: 10.8rem;
  overflow: hidden;

  &::before {
    content: '';
    width: 21rem;
    height: 21rem;

    display: block;
    border-radius: 50%;

    background: linear-gradient(
      180deg,
      rgba(251, 219, 96, 0.2) 0%,
      rgba(251, 219, 96, 0) 101.89%
    );

    --mask: linear-gradient(0deg, white 50%, transparent 0%);
    mask: var(--mask);
    -webkit-mask: var(--mask);

    rotate: calc(1.825deg * var(--pos-x));
  }

  img {
    position: absolute;
    top: 0;
    left: -1%;
  }
`;
