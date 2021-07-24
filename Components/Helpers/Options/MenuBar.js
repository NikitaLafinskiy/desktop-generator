import React, { useState } from 'react';
import styles from '../../../styles/components-css/helpers-components-css/menu-bar.module.css';

const Component = (props) => {
  return (
    <div style={props.style} id={styles.menu}>
      {props.children}
    </div>
  );
};

export default Component;
