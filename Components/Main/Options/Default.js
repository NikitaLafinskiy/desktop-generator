import React, { useEffect, useState } from 'react';
import OptionsBackground from '../../Helpers/Options/OptionsBackground';
import OptionsButton from '../../Helpers/Options/OptionsButton';
import { useRouter } from 'next/router';
import axios from 'axios';

const Component = (props) => {
  const router = useRouter();
  const DefaultFiller = () => {
    const [route, setRoute] = useState('');
    const handleFullscreen = () => {
      document.documentElement.requestFullscreen();
    };
    useEffect(() => {
      if (router.isReady)
        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findAllPictures`)
          .then((doc) => {
            const result = doc.data;
            const rand = Math.floor(Math.random() * result.length);
            const pictureId = router.query?.picture
              ? router.query.picture
              : result[rand].id;
            setRoute(pictureId);
          });
    }, [router.isReady]);
    const routerQuery = router.query?.picture ? router.query.picture : '';
    const fullScreenLink = router?.pathname.split('[')[0] + routerQuery;
    return (
      <>
        <OptionsButton
          src='/images/edit_option.svg'
          link={`/menu/edit_choice?id=${route}`}
        />
        <OptionsButton
          src='/images/garbage_option.svg'
          link={'/menu/' + route + '/delete'}
        />
        <OptionsButton src='/images/plus_option.svg' link='/menu/add_choice' />
        <OptionsButton
          clickEvent={handleFullscreen}
          src='/images/view_option.svg'
          link={fullScreenLink}
        />
        <OptionsButton
          src='/images/see_all_option.svg'
          link={`/view/${route}/choosePicture`}
        />
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
