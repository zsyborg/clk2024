import React from 'react';
import styles from './LoadingBar.module.css';

const LoadingBar = ({ percentage }) => {
  // Calculate the width of the loading bar based on the percentage
  const barWidth = `${percentage}%`;

  return (
    <div className={styles.container}>
      <div className={styles.loader} style={{ width: barWidth }}></div>
    </div>
  );
};

export default LoadingBar;
