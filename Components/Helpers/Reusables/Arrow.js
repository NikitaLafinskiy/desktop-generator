import React from 'react';
import styles from '../../../styles/routes-css/menu-css/add_app.module.css';

const Component = (props) => {
  return (
    <div onClick={props.handleNext} id={styles.arrowIMG}>
      <img src='/images/previous_option.svg' alt='arrow' />
    </div>
  );
};

export default Component;
