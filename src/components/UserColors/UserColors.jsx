import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import ColorInput from '../ColorInput/ColorInput';
import ColorSelectorButton from '../ColorSelectorButton/ColorSelectorButton';
import SignoutButton from '../SignoutButton/SignoutButton';
import { useNavigate } from 'react-router-dom';
import styles from './UserColors.module.css';
import routes from '../../routes/routes.json';
import { toast } from 'react-toastify';

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
    localStorage.clear();
    localStorage.removeItem('loggedIn');
    navigate(routes.USERSIGNIN);
    toast.info('You have successfully signed out!');
  };

  return (
    <>
      <div
        className={styles.colorSection}
        style={{
          backgroundColor: selectedColor,
          width: '100vw',
          height: '100vh',
        }}
      >
        <ColorSelectorButton
          onClick={colorSelectHandler}
          disabled={colorBoard}
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
        <SignoutButton onClick={signoutHandler} />
      </div>
    </>
  );
};

export default UserColors;
