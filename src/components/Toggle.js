import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// import styles from './Toggle.styled.js';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <>
    <button className="togglebutton" onClick={toggleTheme}>
      <i className="sunIcon" className="fas fa-sun"></i><i className="moonIcon" className="fas fa-moon"></i>

    </button>
    <div className="toggleIconDiv" onClick={toggleTheme}>
      {/* <i className="sunIcon" className="fas fa-sun"></i><i className="moonIcon" className="fas fa-moon"></i> */}
      </div>
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;