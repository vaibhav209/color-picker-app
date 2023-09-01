import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import ColorInput from '../ColorInput/ColorInput';
import { useNavigate, NavLink } from 'react-router-dom';
import styles from './UserColors.module.css';
import routes from '../../routes/routes.json';
import { toast } from 'react-toastify';
import ActionButton from '../ActionButton/ActionButton';

const UserColors = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [colors, setColors] = useState([]);
  const [colorBoard, setColorBoard] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const navigate = useNavigate();

  const resetColors = () => {
    setRed(0);
    setGreen(0);
    setBlue(0);
  };

  const saveHandler = () => {
    setColorBoard(false);

    const newColor = {
      value: `rgba(${red}, ${green}, ${blue})`,
    };

    setColors((prevColors) => [...prevColors, newColor]);
    resetColors();
  };

  const colorSelectHandler = () => {
    setColorBoard(true);
  };

  const colorBoxHandler = (index) => {
    setSelectedColor(colors[index].value);
    const newColor = [...colors];
    newColor.splice(index, 1);
    setColors(newColor);
  };

  const signoutHandler = () => {
    localStorage.removeItem('loggedIn');
    navigate(routes.USERSIGNIN);
    toast.info('You have successfully signed out!');
  };

  return (
    <>
      <div className={styles.helpTextStyle}>
        <NavLink to={routes.HELP} style={{ color: '#222' }}>
          How to play?
        </NavLink>
      </div>
      <div
        className={styles.colorSection}
        style={{
          backgroundColor: selectedColor,
          width: '100vw',
          height: '100vh',
        }}
      >
        <ActionButton
          onClick={colorSelectHandler}
          disabled={colorBoard}
          className={styles.selectColorButton}
          btnName="Select Color"
        />

        <div className={styles.masterBoard}>
          {colorBoard ? (
            <ColorInput
              red={red}
              green={green}
              blue={blue}
              setRed={setRed}
              setGreen={setGreen}
              setBlue={setBlue}
              onClick={saveHandler}
            />
          ) : (
            <div className={styles.colorCollection}>
              {colors.map((color, index) => {
                return (
                  <ColorBox
                    key={index}
                    onClick={() => colorBoxHandler(index)}
                    color={color}
                  />
                );
              })}
            </div>
          )}
        </div>

        <ActionButton
          className={styles.signoutStyles}
          onClick={signoutHandler}
          btnName="Sign Out"
        />
      </div>
    </>
  );
};

export default UserColors;
