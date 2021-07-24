import React, { useEffect, useRef } from 'react';

const Component = (props) => {
  const { width, height, updatePosition } = props;

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
      updatePosition(x, y);
      // console.log(x, y);
    }
  };

  const defineStyle = (width, height) => {
    if (width?.length === 0) {
      return {
        height: parseInt(height),
        ...props.style,
      };
    } else if (height?.length === 0) {
      return {
        width: parseInt(width),
        ...props.style,
      };
    } else if (height?.length !== 0 && width?.length !== 0) {
      return {
        width: parseInt(width),
        height: parseInt(height),
        ...props.style,
      };
    }
  };

  return (
    <div>
      <img
        ref={(el) => {
          imgRef = el;
        }}
        src={props.src}
        alt='picture'
        onMouseLeave={handleLeave}
        style={defineStyle(width, height)}
      />
    </div>
  );
};

export default Component;
