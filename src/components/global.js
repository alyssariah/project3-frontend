// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  h1 {
    color: ${({ theme }) => theme.highlight};
  }

  h2, h3, h4 {
    color: ${({ theme }) => theme.text2};
  }

  header {
    background: ${({ theme }) => theme.body1};
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body1};
    color: ${({ theme }) => theme.text1};
    transition: all 0.25s linear;
  }

  button {
    cursor: pointer;
    background: ${({ theme }) => theme.button1};
    color: ${({ theme }) => theme.text1};
  }

  hr {
    color: ${({ theme }) => theme.text1};
  }

  i {
    color: ${({ theme }) => theme.highlight};
    cursor: pointer;
  }

 main {
  background: ${({ theme }) => theme.main};
 }

`
