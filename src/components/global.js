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
    transition: all 0.25s linear;
  }

  h2, h3, h4 {
    color: ${({ theme }) => theme.text2};
    transition: all 0.25s linear;
  }

  header {
    background: ${({ theme }) => theme.body1};
    transition: all 0.25s linear;
  }

  body {
    background: ${({ theme }) => theme.body1};
    color: ${({ theme }) => theme.text1};
    transition: all 0.25s linear;
  }

  button {
    cursor: pointer;
    background: ${({ theme }) => theme.button1};
    color: ${({ theme }) => theme.text1}; 
    transition: all 0.25s linear;
  }

  hr {
    color: ${({ theme }) => theme.text1};
    transition: all 0.25s linear;
  }

  i {
    color: ${({ theme }) => theme.highlight};
    cursor: pointer;
  }

 main {
  background: ${({ theme }) => theme.main};
  transition: all 0.25s linear;

 }

`
