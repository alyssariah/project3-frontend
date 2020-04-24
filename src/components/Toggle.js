import React from 'react'
import { func, string } from 'prop-types';

export default function Toggle({ theme, toggleTheme }){
  const isLight = theme === 'light';
  let div;
  if (theme === 'light')
    { div = (
      <div className="togglebutton" onClick={toggleTheme}>
      <i className="moonIcon far fa-moon"></i>
      </div>)}
  else { div = ( 
      <div className="togglebutton" onClick={toggleTheme}>
      <i className="sunIcon fas fa-sun"></i>
      </div>)}
  return (
    <div> 
      {div}
    </div>
  )}