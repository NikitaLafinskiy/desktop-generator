import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findAllPictures`)
      .then((doc) => {
        const arr = doc.data;

        if (arr.length !== 0) {
          const mappedArr = arr.map((obj) => {
            return obj.id;
          });
          const amount = mappedArr.length;
          const rand = Math.floor(Math.random() * amount);
          const routeId = mappedArr[rand];
          router.push(`/view/${routeId}`);
        }
      });
  }, [null]);
  return <div></div>;
}
