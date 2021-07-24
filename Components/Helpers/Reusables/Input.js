import React, { useState } from 'react';
import styles from '../../../styles/components-css/helpers-components-css/input.module.css';

const Component = (props) => {
  return (
    <input
      name={props.name}
      value={props.val}
      style={props.style}
      id={styles.input}
      onChange={props.handleChange}
      type='text'
      placeholder={props.placeholder}
    />
  );
};

export default Component;
