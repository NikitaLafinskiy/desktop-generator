import React, { useState } from 'react';
import styles from '../../../styles/components-css/helpers-components-css/options.module.css';

const Component = (props) => {
  const [active, setActive] = useState(false);
  const handlePopUp = (e) => {
    setActive(!active);
  };
  const backgroundID = active ? styles.background : styles.backgroundInactive;
  const mockID = active ? styles.mock : styles.mockInactive;
  return (
    <div>
      <div onMouseOver={handlePopUp} id={mockID}></div>
      <div id={backgroundID}>{props.children}</div>
    </div>
  );
};

export default Component;
