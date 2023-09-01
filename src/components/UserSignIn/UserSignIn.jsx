import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserSignIn.module.css';
import routes from '../../routes/routes.json';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';
import ActionButton from '../ActionButton/ActionButton';
import AuthLink from '../AuthLink/AuthLink';
import InputField from '../InputField/InputField';
import { isValidEmail } from '../../utils/validationUtils';

const UserSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signInHandler = () => {
    const getUserInfo = JSON.parse(localStorage.getItem('user'));

    if (!isValidEmail(username)) {
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
      <div className={styles.signInSection}>
        <h2>Sign In</h2>

        <InputField
          placeholder="Email"
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <InputField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <ActionButton
          onClick={signInHandler}
          className={styles.signInButton}
          disabled={!username || !password}
          btnName="Sign In"
        />
        <AuthLink
          text="Don't have an account?"
          to={routes.USERSIGNUP}
          toLinkName="SignUp"
        />

        <Footer />
      </div>
    </>
  );
};

export default UserSignIn;
