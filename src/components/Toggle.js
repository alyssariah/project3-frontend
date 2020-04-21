import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import styles from './Toggle.styled.js';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <button className="togglebutton" onClick={toggleTheme}>
        Toggle
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;