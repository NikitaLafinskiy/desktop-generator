import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
//inputs for: file path, image sourse for an icon and the background picture, the scale of the image, getting the position of the image
import { PictureUploadProvider } from '../Contexts/PictureUploadContext';
import { AppUploadProvider } from '../Contexts/AppUploadContext';

import DefaultLayout from '../Components/Layouts/DefaultLayout';
import MenuLayout from '../Components/Layouts/MenuLayout';
import PicturesLayout from '../Components/Layouts/PicturesLayout';
import EditAppLayout from '../Components/Layouts/EditAppLayout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [Layout, setLayout] = useState(<DefaultLayout />);
  useEffect(() => {
    if (router.pathname.includes('menu')) {
      setLayout(<MenuLayout />);
    } else if (router.pathname.includes('choosePicture')) {
      setLayout(<PicturesLayout />);
    } else if (router.pathname.includes('edit')) {
      setLayout(<EditAppLayout />);
    } else {
      setLayout(<DefaultLayout />);
    }
  }, [router.pathname]);
  return (
    <>
      <Head>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/Draggable.min.js'></script>
      </Head>
      {Layout}
      <AppUploadProvider>
        <PictureUploadProvider>
          <Component {...pageProps} />
        </PictureUploadProvider>
      </AppUploadProvider>
    </>
  );
}

export default MyApp;
