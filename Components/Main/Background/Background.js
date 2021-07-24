import React from 'react';
import styles from '../../../styles/components-css/main-components-css/background.module.css';

const Background = (props) => {
  return (
    <div
      id={styles.main}
      style={{
        backgroundColor: props.backgroundColor,
        zIndex: props.zIndex,
      }}></div>
  );
};

export default Background;
