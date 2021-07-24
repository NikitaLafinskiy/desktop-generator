import React from 'react';
import styles from '../../../styles/components-css/main-components-css/background.module.css';

const SecondaryBackground = (props) => {
  return (
    <div
      id={styles.secondary}
      style={{
        backgroundColor: props.backgroundColor,
        clipPath: props.clipPath,
        zIndex: props.zIndex,
      }}></div>
  );
};

export default SecondaryBackground;
