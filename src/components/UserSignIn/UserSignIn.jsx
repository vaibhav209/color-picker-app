import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './UserSignIn.module.css';
import routes from '../../routes/routes.json';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';

const UserSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const signInHandler = () => {
    const getUserInfo = JSON.parse(localStorage.getItem('user'));

    if (!emailPattern.test(username)) {
      toast.error('Please enter a valid email address');
    } else if (password.length < 4) {
      toast.error('Your password must be at least four characters long');
    } else {
      if (
        getUserInfo &&
        getUserInfo.username === username &&
        getUserInfo.password === password
      ) {
        localStorage.setItem('loggedIn', true);
        navigate(routes.USERHOME);
        toast.success(
          `You're in, ${getUserInfo.name}! Let's start playing with colors.`
        );
      } else {
        toast.error('This account does not exist');
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      signInHandler();
    }
  };

  return (
    <>
      <div className={styles.loginSection}>
        <h2>Sign In</h2>
        <input
          placeholder="Email"
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.userInput}
          onKeyPress={handleKeyPress}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.userInput}
          onKeyPress={handleKeyPress}
        />

        <button
          onClick={signInHandler}
          className={styles.loginButton}
          disabled={!username || !password}
        >
          Sign In
        </button>

        <p>
          Don't have an account?{' '}
          <Link to={routes.USERSIGNUP} className={styles.linkStyles}>
            <span>SignUp</span>
          </Link>
        </p>

        <Footer />
      </div>
    </>
  );
};

export default UserSignIn;
