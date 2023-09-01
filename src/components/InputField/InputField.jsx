import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ placeholder, type, value, onChange, onKeyPress }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={styles.userInput}
      onKeyPress={onKeyPress}
    />
  );
};

export default InputField;