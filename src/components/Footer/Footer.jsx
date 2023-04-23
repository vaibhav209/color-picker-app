import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes/routes.json';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span>Developed by </span>
      <a href="https://github.com/vaibhav209" target="_blank" className={styles.linkStyles}>
        Vaibhav Jumde
      </a>
      <span> | </span>
      <Link to={routes.USERFEEDBACK} className={styles.linkStyles}>Send Feedback</Link>
    </div>
  );
};

export default Footer;
