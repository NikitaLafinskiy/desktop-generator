import React from 'react';
import styles from '../../../styles/components-css/helpers-components-css/edit.module.css';

const Component = (props) => {
  return <div id={styles.main}>{props.children}</div>;
};

export default Component;
