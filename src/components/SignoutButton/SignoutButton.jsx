import React from 'react';
import styles from './SignoutButton.module.css';

const SignoutButton = ({onClick}) => {
  return <button className={styles.signoutStyles} onClick={onClick}>Sign Out</button>;
};

export default SignoutButton;
