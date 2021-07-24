import Image from '../../../Components/Helpers/Reusables/PictureView';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditPicture() {
  const router = useRouter();
  const [isImg, setIsImg] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findAllPictures`)
      .then((doc) => {
        setIsImg(true);
        if (doc.data.length) {
          const fetch = (doc) => {
            const arr = doc.data;
            const mappedArr = arr.map((obj) => {
              return obj.id;
            });
            const amount = mappedArr.length;
            const rand = Math.floor(Math.random() * amount);
            const routeId = mappedArr[rand];
            router.push(`/view/${routeId}`);
          };

          const prevInterval = localStorage.getItem('currentInterval');
          prevInterval
            ? clearInterval(prevInterval)
            : console.log('the previus interval doesnt exist');
          const currentInterval = setInterval(() => {
            fetch(doc);
          }, 1000 * 60 * 60);
          localStorage.setItem('currentInterval', currentInterval);
        }
      });
  }, [null]);
  const img = isImg ? <Image /> : <div></div>;
  return <>{img}</>;
}
