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
    color: ${({ theme }) => theme.h1s};
    transition: all 0.25s linear;
  }

  h2, h3, h4 {
    color: ${({ theme }) => theme.highlight};
    transition: all 0.25s linear;
  }

  header {
    background: ${({ theme }) => theme.presDivs};
    transition: all 0.25s linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  body {
    background: ${({ theme }) => theme.backgroundcolor};
    color: ${({ theme }) => theme.regulartext};
    transition: all 0.25s linear;
  }

  button {
    cursor: pointer;
    background: ${({ theme }) => theme.gradient};
    color: ${({ theme }) => theme.buttontext}; 
    transition: all 0.25s linear;
  }

  hr {
    color: ${({ theme }) => theme.regulartext};
    transition: all 0.25s linear;
  }

  i {
    color: ${({ theme }) => theme.highlight};
    cursor: pointer;
    transition: all 0.25s linear;
  }

ol {
    background-color: ${({ theme }) => theme.backgroundcolor};
    color: ${({ theme }) => theme.regulartext};
    padding: 1.2em;
    margin: 16px 0px;
    transition: all 0.25s linear;
  }

ul {
    background-color: ${({ theme }) => theme.backgroundcolor};
    color: ${({ theme }) => theme.regulartext};
    padding: 30px;
    margin: 16px 0px;
    transition: all 0.25s linear;
  }

  main {
  background: ${({ theme }) => theme.presDivs};
  transition: all 0.25s linear;
 }

`
