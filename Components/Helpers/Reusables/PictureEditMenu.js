import React, { useState, useContext, useEffect, useRef } from 'react';
import { PictureUploadContext } from '../../../Contexts/PictureUploadContext';
import Button from './Button';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../../../styles/components-css/helpers-components-css/edit.module.css';
import stylesOption from '../../../styles/components-css/helpers-components-css/options.module.css';
import PictureEditable from './PictureEditable';
import MenuBar from '../Options/MenuBar';
import Input from './Input';
import TopMenu from './TopMenu';

const Component = (props) => {
  const router = useRouter();

  const [optionActive, setOptionActive] = useState(false);
  const {
    width,
    circleWidth,
    height,
    circleHeight,
    updateDimensions,
    updateCircleDimensions,
    x,
    circleX,
    y,
    circleY,
    updateCirclePosition,
  } = useContext(PictureUploadContext);
  const posNoPx = (pos) => {
    if (!pos) {
      return 0;
    }
    return parseInt(pos?.split('p')[0]);
  };
  const finalDim = (dim) => {
    return dim?.toString()?.length ? dim : null;
  };
  const handleChange = (e) => {
    const obj = e.target.name;
    if (obj.includes('w')) {
      if (obj.includes('circle')) {
        updateCircleDimensions(e.target.value, circleHeight);
      } else {
        updateDimensions(e.target.value, height);
      }
    } else if (obj.includes('h')) {
      if (obj.includes('circle')) {
        updateCircleDimensions(circleWidth, e.target.value);
      } else {
        updateDimensions(width, e.target.value);
      }
    }
  };

  const handleClick = () => {
    const id = router.query.picture;

    const data = {
      width: finalDim(width),
      height: finalDim(height),
      xNoPx: posNoPx(x),
      yNoPx: posNoPx(y),
      circleX: posNoPx(circleX),
      circleY: posNoPx(circleY),
      circleWidth: finalDim(circleWidth),
      circleHeight: finalDim(circleHeight),
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/updateOnePicture/${id}`,
        data
      )
      .then((doc) => {
        router.push(`/view/${router.query?.picture}`);
      });
  };

  const clickEvent = (e) => {
    setOptionActive(!optionActive);
  };
  const circleLayout = optionActive ? (
    <>
      <div onClick={clickEvent} id={styles.bg}></div>
      <div>
        <MenuBar
          style={{
            position: 'absolute',
            top: 50 + 'vh',
            left: 50 + 'vw',
            transform: 'translate(-50%,-50%) scale(2)',
            display: 'flex',
            alignItems: 'center',
          }}>
          <div
            style={{
              transform: 'scale(2)',
              marginLeft: '34px',
            }}
            className={stylesOption.button}>
            <PictureEditable
              width={circleWidth}
              height={circleHeight}
              updatePosition={updateCirclePosition}
              style={{
                transform: `translate(${circleX ? posNoPx(circleX) : 0}px, ${
                  circleY ? posNoPx(circleY) : 0
                }px)`,
              }}
              src={props.image.pictureFile}
              image={props.image}
            />
          </div>
          <div id={styles.flexCircle}>
            <h1>Edit the circle </h1>
            <Input
              value={circleWidth}
              handleChange={handleChange}
              placeholder='circle width...'
              name='circlewidth'
            />
            <Input
              value={circleHeight}
              handleChange={handleChange}
              placeholder='circle height...'
              name='circleheight'
            />
          </div>
        </MenuBar>
      </div>
    </>
  ) : (
    <div onClick={clickEvent} className={stylesOption.button}>
      <PictureEditable
        width={circleWidth}
        height={circleHeight}
        updatePosition={updateCirclePosition}
        style={{
          transform: `translate(${circleX ? posNoPx(circleX) : 0}px, ${
            circleY ? posNoPx(circleY) : 0
          }px)`,
        }}
        src={props.image.pictureFile}
        image={props.image}
      />
    </div>
  );

  return (
    <TopMenu>
      <input
        value={width}
        type='text'
        name='width'
        placeholder='width...'
        onChange={handleChange}
      />
      <input
        placeholder='height...'
        value={height}
        type='text'
        name='height'
        onChange={handleChange}
      />
      {circleLayout}
      <Button handleClick={handleClick}>Save</Button>
    </TopMenu>
  );
};

export default Component;
