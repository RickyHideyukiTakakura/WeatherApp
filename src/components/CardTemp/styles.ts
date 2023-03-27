import styled from 'styled-components';

import bgTempImg from '../../assets/bg-temp-now.jpeg';
import cloudsImg from '../../assets/clouds.svg';

export const CardTemp = styled.section`
  background: url(${bgTempImg}) no-repeat center/cover;

  display: grid;
  grid-template-rows: max-content 1fr max-content;

  border-radius: 1rem;

  position: relative;

  &::before {
    content: '';
    width: 17.6rem;
    height: 17.6rem;

    background: url(${cloudsImg}) no-repeat;

    position: absolute;
    top: -5.6rem;
    left: -5.6rem;
  }

  @media (min-width: 1200px) {
    grid-row: 1/3;
  }
`;
