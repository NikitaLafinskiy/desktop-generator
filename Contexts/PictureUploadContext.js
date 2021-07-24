import { useState, createContext } from 'react';

const PictureUploadContext = createContext();

const PictureUploadProvider = (props) => {
  const [state, setState] = useState({
    width: null,
    height: null,
    x: 0,
    y: 0,
    imageSrc: '',
    imageSrcConverted: '',
    id: '',
    circleX: '',
    circleY: '',
    circleWidth: '',
    circleHeight: '',
  });
  const updateSource = (src, srcConverted) => {
    setState((prev) => {
      return {
        ...prev,
        imageSRC: src,
        imageSrcConverted: srcConverted,
      };
    });
  };
  const updatePosition = (x, y) => {
    setState((prev) => {
      return {
        ...prev,
        x,
        y,
      };
    });
  };
  const updateDimensions = (width, height) => {
    setState((prev) => {
      return {
        ...prev,
        width,
        height,
      };
    });
  };
  const updateCircleDimensions = (width, height) => {
    setState((prev) => {
      return {
        ...prev,
        circleWidth: width,
        circleHeight: height,
      };
    });
  };
  const updateId = (id) => {
    setState((prev) => {
      return {
        ...prev,
        id,
      };
    });
  };
  const updateCirclePosition = (x, y) => {
    setState((prev) => {
      return {
        ...prev,
        circleX: x,
        circleY: y,
      };
    });
  };
  return (
    <PictureUploadContext.Provider
      value={{
        updateSource,
        updatePosition,
        updateDimensions,
        updateId,
        imageSrc: state.imageSrc,
        width: state.width,
        height: state.height,
        x: state.x,
        y: state.y,
        id: state.id,
        circleX: state.circleX,
        circleY: state.circleY,
        circleWidth: state.circleWidth,
        circleHeight: state.circleHeight,
        updateCirclePosition,
        updateCircleDimensions,
      }}>
      {props.children}
    </PictureUploadContext.Provider>
  );
};

export { PictureUploadProvider, PictureUploadContext };
