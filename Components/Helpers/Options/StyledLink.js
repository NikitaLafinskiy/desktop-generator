import React, { useState } from 'react';
import styles from '../../../styles/components-css/helpers-components-css/menu-bar.module.css';
import Link from 'next/link';

const Component = (props) => {
  return (
    <Link href={props.href}>
      <a className={styles.link} style={props.style}>
        {props.text}
      </a>
    </Link>
  );
};

export default Component;
