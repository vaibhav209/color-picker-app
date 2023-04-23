import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './UserSignUp.module.css';
import routes from '../../routes/routes.json';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';

const UserSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const signUpHandler = () => {
    if (!emailPattern.test(username)) {
      toast.error('Please enter a valid email address');
    } else if (name.length < 3) {
      toast.error('Please enter valid name');
    } else if (password.length < 4) {
      toast.error('Your password must be at least four characters long');
    } else {
      const user = {
        name: name,
        username: username,
        password: password,
      };
      localStorage.setItem('user', JSON.stringify(user));

      toast.success(
        'Congratulations! Your account has been successfully created'
      );
      navigate(routes.USERSIGNIN);
    }
  };

  return (
    <div className={styles.signupSection}>
      <h2>Sign Up</h2>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.userInput}
      />

      <input
        placeholder="Email"
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.userInput}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.userInput}
      />

      <button
        onClick={signUpHandler}
        className={styles.signupButton}
        disabled={!name || !username || !password}
      >
        Sign Up
      </button>
      <p>
        Already have an account?{' '}
        <span>
          <Link to={routes.USERSIGNIN} className={styles.linkStyles}>SignIn</Link>
        </span>
      </p>

      <Footer />
    </div>
  );
};

export default UserSignUp;
