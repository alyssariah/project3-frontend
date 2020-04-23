import React from 'react'
import { func, string } from 'prop-types';

export default function Toggle({ theme, toggleTheme }){
  const isLight = theme === 'light';
  let div;
  if (theme === 'light')
    { div = (
      <div className="togglebutton" onClick={toggleTheme}>
      <i className="moonIcon fas fa-moon"></i>
      </div>)}
  else { div = ( 
      <div className="togglebutton" onClick={toggleTheme}>
      <i className="sunIcon fas fa-sun"></i>
      </div>)}
  return (
    <div> 
      {div}
      <br />
      <br />
      <span className="themespan"> theme</span>
    </div>
  )}


  // export default function Toggle({ theme, toggleTheme }){
  //   const isLight = theme === 'light';
  //   let button;
  //   if (theme === 'light')
  //     { button = (
  //       <button className="togglebutton" onClick={toggleTheme}>
  //       <i className="moonIcon fas fa-moon"></i>
  //       </button>)}
  //   else { button = ( 
  //       <button className="togglebutton" onClick={toggleTheme}>
  //       <i className="sunIcon fas fa-sun"></i>
  //       </button>)}
  //   return (
  //     <div>
  //       {button}
  //     </div>
  //   )}