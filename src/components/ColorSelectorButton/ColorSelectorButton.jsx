import React from 'react';
import styles from './ColorSelectorButton.module.css';

const ColorSelectorButton = ({ onClick, disabled }) => {
  return (
    <button
      className={styles.selectColorButton}
      onClick={onClick}
      disabled={disabled}
    >
      Select Color
    </button>
  );
};

export default ColorSelectorButton;
