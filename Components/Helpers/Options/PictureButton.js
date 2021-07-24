import React from 'react';
import styles from '../../../styles/components-css/helpers-components-css/pictureCircles.module.css';
import Link from 'next/link';

const Component = (props) => {
  const finalLink = props.link ? props.link : '/';
  const actualId = props.id ? styles.picture : '';
  return (
    <Link href={finalLink}>
      <a>
        <div onClick={props.clickEvent} className={styles.button}>
          <img style={props.style} src={props.src} alt='button' />
        </div>
      </a>
    </Link>
  );
};

export default Component;
