import React from 'react';
import styles from './ColorBox.module.css';

const ColorBox = ({color, onClick}) => {
  return (
    <div
      className={styles.colorBox}
      key={color.id}
      onClick={onClick}
    >
      <div
        style={{
          backgroundColor: color.value,
          height: '100px',
          width: '100px',
          borderRadius: '10%',
        }}
      ></div>
    </div>
  );
};

export default ColorBox;
