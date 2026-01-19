import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.navy};
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.sans};
    font-size: 16px;
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${theme.colors.lightestSlate};
    line-height: 1.1;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};

    &:hover,
    &:focus {
      color: ${theme.colors.teal};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.lightestNavy} ${theme.colors.navy};
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.navy};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.lightestNavy};
    border: 3px solid ${theme.colors.navy};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
