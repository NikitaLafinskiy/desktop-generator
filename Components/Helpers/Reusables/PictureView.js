import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Component = (props) => {
  const router = useRouter();
  let imgRef = useRef(null);
  const [state, setState] = useState({
    x: '',
    y: '',
    width: '',
    height: '',
    src: '',
  });
  useEffect(() => {
    if (router.query.picture) {
      const id = router.query.picture;

      gsap.from(imgRef, { duration: 0.5, opacity: 0 });
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findOnePicture/${id}`)
        .then((doc) => {
          const img = doc.data[0];
          console.log(doc.data);
          setState((prev) => {
            return {
              ...prev,
              x: img.x,
              y: img.y,
              width: img.width,
              height: img.height,
              src: img.pictureFile,
            };
          });
        });
    }
  }, [router.query.picture]);

  return (
    <>
      <img
        alt='image'
        src={state.src}
        ref={(el) => {
          imgRef = el;
        }}
        style={{
          transform: `translate(${state.x}px, ${state.y - 5}px)`,
          width: state.width,
          height: state.height,
          zIndex: -1,
          position: 'absolute',
        }}
      />
    </>
  );
};

export default Component;
