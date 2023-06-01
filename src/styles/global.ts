import styled, { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
  }
`;

export const Container = styled.main`
  font-size: 1.6rem;

  background: url(${bgImg}) no-repeat center/cover;
  min-height: 100vh;

  display: grid;
  place-content: center;
  gap: 2.4rem;
  padding: 6.4rem;

  @media (min-width: 1200px) {
    grid-template-columns: 48rem 27.7rem 27.7rem;
    grid-template-rows: 24.4rem 21.2rem;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
`;
