import React, { useEffect, useRef, useState, useContext } from 'react';
import { AppUploadContext } from '../../../Contexts/AppUploadContext';
import styles from '../../../styles/components-css/helpers-components-css/appIcon.module.css';

const Component = (props) => {
  const [position, setPosition] = useState({
    x: props.x,
    y: props.y,
  });
  const { updateAppsPos } = useContext(AppUploadContext);
  let imgRef = useRef(null);
  useEffect(() => {
    Draggable.create(imgRef, {
      type: 'x,y',
      edgeResistance: 0.65,
      inertia: false,
    });
  }, [null]);

  const handleLeave = (e) => {
    const pos = imgRef.style.transform;
    if (pos) {
      const onlyValues = pos.split('(')[1].split(')')[0].split(',');
      const x = onlyValues[0];
      const y = onlyValues[1];
      // console.log(
      //   `position updated for ${props.id} and set to ${x} by the x axis and ${y} by the y axis`
      // );
      updateAppsPos(props.id, x, y);
      setPosition((prev) => {
        return {
          ...prev,
          x,
          y,
        };
      });
    }
  };
  return (
    <div
      ref={(el) => {
        imgRef = el;
      }}
      style={{
        transform: `translate(${position.x}, ${position.y}`,
        width: '70px',
      }}
      onMouseLeave={handleLeave}
      id={styles.appIcon}>
      <div id={styles.foreground}>
        <img src={props.img} style={props.styleIc} alt='app icon' />
      </div>
    </div>
  );
};

export default Component;
