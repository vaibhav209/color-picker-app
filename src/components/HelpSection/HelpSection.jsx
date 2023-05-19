import React from 'react';
import styles from './HelpSection.module.css';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';

const HelpSection = () => {
  const navigate = useNavigate();

  const playButtonHandle = () => {
    navigate(routes.USERHOME);
  };

  return (
    <div className={styles.helpContainer}>
      <ul>
        <li>
          <h3>Create Color Combination:</h3>
          <p className={styles.textStyles}>
            Click "Select Color" to open the color palette.
            <br />
            Adjust the RGB values using sliders.
            <br />
            Click "Save" to save the color to your collection.
          </p>
        </li>
        <li style={{ marginTop: '12px' }}>
          <h3>Delete a Color:</h3>
          <p className={styles.textStyles}>
            Click on a color box to select it.
            <br />
            The color box will become the background color.
            <br />
            The selected color will be removed from your collection.
          </p>
        </li>
        <li className={styles.listStyle}>
          <h3>Use Saved Color:</h3>
          <p className={styles.textStyles}>
            Click on a color box in your collection.
            <br />
            The selected color becomes the background color.
          </p>
        </li>
      </ul>
      <div className={styles.buttonBox}>
        <button className={styles.playButton} onClick={playButtonHandle}>
          &#8592; Continue to Play
        </button>
      </div>
    </div>
  );
};

export default HelpSection;
