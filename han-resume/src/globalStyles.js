// src/globalStyles.js
import { css, Global } from '@emotion/react';

const globalStyles = css`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #FFF8DC;
    color: #333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #FFD700;
  }
  /* Add other global styles */
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
