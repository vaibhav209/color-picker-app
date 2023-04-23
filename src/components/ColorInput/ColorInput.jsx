import React from 'react';
import styles from './ColorInput.module.css';

const ColorInput = ({red, green, blue, setRed, setGreen, setBlue,  onClick}) => {
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
        <div>
          <div
            className={styles.colorPoint}
            style={{ backgroundColor: 'red' }}
          />
          <input
            type={'range'}
            min={'0'}
            max={'255'}
            value={red}
            style={{ marginTop: '20px' }}
            onChange={(e) => setRed(e.target.value)}
          />
        </div>
        <div>
          <div
            className={styles.colorPoint}
            style={{ backgroundColor: 'green' }}
          />
          <input
            type={'range'}
            min={'0'}
            max={'255'}
            value={green}
            style={{ marginTop: '7px' }}
            onChange={(e) => setGreen(e.target.value)}
          />
        </div>
        <div>
          <div
            className={styles.colorPoint}
            style={{ backgroundColor: 'blue' }}
          />
          <input
            type={'range'}
            min={'0'}
            max={'255'}
            value={blue}
            style={{ marginTop: '7px' }}
            onChange={(e) => setBlue(e.target.value)}
          />
          <div className={styles.saveButton}>
            <button onClick={onClick}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorInput;
