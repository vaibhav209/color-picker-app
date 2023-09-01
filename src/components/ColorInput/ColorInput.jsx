import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import RangeSlider from '../RangeSlider/RangeSlider';
import styles from './ColorInput.module.css';

const ColorInput = ({
  red,
  green,
  blue,
  setRed,
  setGreen,
  setBlue,
  onClick,
}) => {
  return (
    <>
      <div className={styles.userInputBoard}>
        <div
          style={{
            backgroundColor: `rgba(${red}, ${green}, ${blue})`,
            height: '80px',
            width: '80px',
            borderRadius: '15%',
          }}
        ></div>
        <RangeSlider
          className={styles.colorPoint}
          bgColor="red"
          value={red}
          style={{ marginTop: '20px' }}
          onChange={(e) => setRed(e.target.value)}
        />
        <RangeSlider
          className={styles.colorPoint}
          bgColor="green"
          value={green}
          style={{ marginTop: '7px' }}
          onChange={(e) => setGreen(e.target.value)}
        />
        <RangeSlider
          className={styles.colorPoint}
          bgColor="blue"
          value={blue}
          style={{ marginTop: '7px' }}
          onChange={(e) => setBlue(e.target.value)}
        />
        <div className={styles.saveButton}>
          <ActionButton onClick={onClick} btnName="Save" />
        </div>
      </div>
    </>
  );
};

export default ColorInput;
