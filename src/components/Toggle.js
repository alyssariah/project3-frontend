import React from 'react'
import { func, string } from 'prop-types';
// import styled from 'styled-components';
// import styles from './Toggle.styled.js';

export default function Toggle({ theme, toggleTheme }){
  const isLight = theme === 'light';
  let button;
  console.log("theme", theme)
  console.log("isLight", isLight)
  if (theme === 'light')
    { button = (
      <button className="togglebutton" onClick={toggleTheme}>
      <i className="moonIcon fas fa-moon"></i>
      </button>)}
  else { button = ( 
      <button className="togglebutton" onClick={toggleTheme}>
      <i className="sunIcon fas fa-sun"></i>
      </button>)}
  return (
    <div>
      {button}
    </div>
  )}


// Toggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
