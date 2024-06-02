// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial, sans-serif';
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  header, section {
    padding: 60px 0;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export default GlobalStyle;

