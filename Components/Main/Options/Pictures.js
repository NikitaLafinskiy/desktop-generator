import React, { useEffect, useState } from 'react';
import OptionsBackground from '../../Helpers/Options/OptionsBackground';
import OptionsButton from '../../Helpers/Options/OptionsButton';
import PictureButton from '../../Helpers/Options/PictureButton';
import { useRouter } from 'next/router';
import axios from 'axios';

const Component = (props) => {
  const router = useRouter();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findAllPictures`)
      .then((doc) => {
        // console.log(doc.data);
        const result = doc.data;
        setArr(result);
      });
  }, [null]);
  const DefaultFiller = () => {
    const mappedPictures = arr.map((obj) => {
      const width =
        obj.circleWidth === null && obj.circleHeight === null
          ? 100 + 'px'
          : obj.circleWidth;
      const circleX = obj.circleX;
      const circleY = obj.circleY;
      return (
        <PictureButton
          src={obj.pictureFile}
          style={{
            transform: `translate(${circleX + 9}px, ${circleY}px)`,
            filter: 'invert(0)',
            width,
            height: obj.circleHeight,
          }}
          link={`/view/${obj.id}`}
        />
      );
    });
    return (
      <>
        <OptionsButton
          link={`/view/${router.query?.picture}`}
          src='/images/previous_option.svg'
        />
        {mappedPictures}
      </>
    );
  };
  return (
    <div>
      <OptionsBackground>{<DefaultFiller />}</OptionsBackground>
    </div>
  );
};

export default Component;
