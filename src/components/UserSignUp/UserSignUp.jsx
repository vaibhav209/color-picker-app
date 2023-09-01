import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserSignUp.module.css';
import routes from '../../routes/routes.json';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';
import InputField from '../InputField/InputField';
import AuthLink from '../AuthLink/AuthLink';
import ActionButton from '../ActionButton/ActionButton';
import { isValidEmail } from '../../utils/validationUtils';

const UserSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  

  const signUpHandler = () => {
    if (!isValidEmail(username)) {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      signUpHandler();
    }
  };

  return (
    <div className={styles.signupSection}>
      <h2>Sign Up</h2>

      <InputField
        placeholder="name"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
      />

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
        onClick={signUpHandler}
        className={styles.signupButton}
        disabled={!name || !username || !password}
        btnName="Sign Up"
      />
      <AuthLink
        text="Already have an account?"
        to={routes.USERSIGNIN}
        toLinkName="SignIn"
      />

      <Footer />
    </div>
  );
};

export default UserSignUp;
