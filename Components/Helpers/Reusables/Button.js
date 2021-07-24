import React, { useState } from 'react';
import styles from '../../../styles/components-css/helpers-components-css/button.module.css';

const Component = (props) => {
  return (
    <button style={props.style} id={styles.button} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Component;
