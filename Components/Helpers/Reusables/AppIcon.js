import axios from 'axios';
import React, { useState, useRef } from 'react';
import styles from '../../../styles/components-css/helpers-components-css/appIcon.module.css';

const Component = (props) => {
  const [position, setPosition] = useState({
    x: props.x,
    y: props.y,
  });
  let imgRef = useRef(null);
  let appRef = useRef(null);
  let iconRef = useRef(null);
  const handleLaunch = () => {
    console.log('launched');
    // axios.get(
    //   `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/launch?path=${props.path}`,
    //   {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   }
    // );
  };
  const handleShow = () => {
    gsap.to(imgRef, { opacity: 1, display: 'block', duration: 0.1 });
    gsap.to(appRef, {
      opacity: 1,
      filter:
        'invert(1) brightness(100%) contrast(100%) drop-shadow(0px 0px 5px white)',
      duration: 0.03,
    });
    gsap.to(iconRef, {
      filter:
        'invert(1) brightness(100%) contrast(100%) drop-shadow(0px 0px 3px white)',
      duration: 0.03,
    });
  };
  const handleHide = () => {
    gsap.to(imgRef, { opacity: 0, display: 'none', duration: 0.1 });
    gsap.to(appRef, {
      opacity: 0.8,
      filter: 'invert(0) brightness(100%) ',
      duration: 0.03,
    });
    gsap.to(iconRef, {
      filter: 'grayscale(1) brightness(100%) ',
      duration: 0.03,
    });
  };
  console.log(props.path);
  return (
    <>
      <div
        ref={(el) => {
          appRef = el;
        }}
        style={{
          transform: `translate(${position.x}, ${position.y}`,
          cursor: 'pointer',
          opacity: 0.8,
          zIndex: 3,
          width: '70px',
          filter: 'invert(0) brightness(110%)  drop-shadow(0px 0px 0px black)',
        }}
        onDoubleClick={handleLaunch}
        onMouseOver={handleShow}
        onMouseOut={handleHide}
        id={styles.appIcon}>
        <div
          style={{
            backgroundColor: 'transparent',
            width: 70 + 'px',
            height: '85px',
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: 1,
            clipPath:
              ' polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}></div>
        <div id={styles.foreground}>
          <img
            src={props.img}
            ref={(el) => {
              iconRef = el;
            }}
            style={props.styleIc}
            alt='app icon'
          />
        </div>
      </div>
      <img
        ref={(el) => {
          imgRef = el;
        }}
        style={{
          width: props.bgWidth,
          position: 'absolute',
          top: '0px',
          left: '0px',
          display: 'none',
          transform: `translate(${props.bgX}, ${props.bgY})`,
          zIndex: -2,
          opacity: 0,
        }}
        src={props.bgImg}
        alt='bg img'
      />
    </>
  );
};

export default Component;
